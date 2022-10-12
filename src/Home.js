import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux/cakeReducer";
import { buyChoc } from "./redux/chocReducer";
import { buyIceCream } from "./redux/iceCreamReducer";
import { fetchUser } from "./redux/userReducer";

function Home(props) {
  useEffect(() => {
    // props.fetchUser();
  }, []);

  return (
    <>
      <button onClick={() => props.fetchUser()}>Load Data</button>
      <>
        {props.userData.loading && <p>Loading ...</p>}

        {props.userData.users.length > 0 && (
          <>
            <p>Users loaded via thunk</p>
            <ul>
              {props.userData.users.map((user, idx) => {
                return <li key={idx}>{user.username}</li>;
              })}
            </ul>
          </>
        )}
      </>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cakeCount: state.cake.cakeCount,
    iceCreamCount: state.iceCream.iceCreamCount,
    chocCount: state.choc.chocCount,
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (quantity) => dispatch(buyCake(quantity)),
    buyIceCream: (quantity) => dispatch(buyIceCream(quantity)),
    buyChoc: (quantity) => dispatch(buyChoc(quantity)),
    fetchUser: (quantity) => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
