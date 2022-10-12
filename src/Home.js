import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux/cakeReducer";
import { buyChoc } from "./redux/chocReducer";
import { buyIceCream } from "./redux/iceCreamReducer";

function Home(props) {
  const [inputQuantity, setInputQuantity] = useState();

  return (
    <table>
      <tbody>
        <tr>
          <td>Item</td>
          <td>Inventory</td>
          <td>Cart</td>
          <td>Action</td>
        </tr>
        <tr>
          <td>Cake</td>
          <td>{props.cakeCount}</td>
          <td>
            <input
              type="number"
              name="aa"
              value={inputQuantity?.cake ?? ""}
              onChange={(event) =>
                setInputQuantity({ ...inputQuantity, cake: event.target.value })
              }
              required
            />
            {/* <button onClick={() => props.buyCake(5)}>Add</button> */}
          </td>
          <td>
            <button
              onClick={() => {
                // debugger;
                if (!inputQuantity?.cake) {
                  return;
                }

                if (props.cakeCount < inputQuantity.cake) {
                  alert("Quantity > inventory");
                  return;
                }
                props.buyCake(inputQuantity.cake);
              }}
              disabled={props.cakeCount === 0}
            >
              Add
            </button>
          </td>
        </tr>
        <tr>
          <td>Ice Cream</td>
          <td>{props.iceCreamCount}</td>
          <td>
            <input
              type="number"
              value={inputQuantity?.iceCream ?? ""}
              onChange={(event) =>
                setInputQuantity({
                  ...inputQuantity,
                  iceCream: event.target.value,
                })
              }
            />
            {/* <button onClick={() => props.buyCake(5)}>Add</button> */}
          </td>
          <td>
            <button
              onClick={() => {
                if (!inputQuantity?.iceCream) {
                  return;
                }

                if (props.iceCreamCount < inputQuantity.iceCream) {
                  alert("Quantity > inventory");
                  return;
                }
                props.buyIceCream(inputQuantity.iceCream);
              }}
              disabled={props.iceCreamCount === 0}
            >
              Add
            </button>
          </td>
        </tr>
        {/*  */}

        <tr>
          <td>Chocolate</td>
          <td>{props.chocCount}</td>
          <td>
            <input
              type="number"
              value={inputQuantity?.choc ?? ""}
              onChange={(event) =>
                setInputQuantity({
                  ...inputQuantity,
                  choc: event.target.value,
                })
              }
              required
            />
            {/* <button onClick={() => props.buyCake(5)}>Add</button> */}
          </td>
          <td>
            <button
              onClick={() => {
                if (!inputQuantity?.choc) {
                  return;
                }

                if (props.chocCount < inputQuantity.choc) {
                  alert("Quantity > inventory");
                  return;
                }
                props.buyChoc(inputQuantity.choc);
              }}
              disabled={props.chocCount === 0}
            >
              Add
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cakeCount: state.cake.cakeCount,
    iceCreamCount: state.iceCream.iceCreamCount,
    chocCount: state.choc.chocCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (quantity) => dispatch(buyCake(quantity)),
    buyIceCream: (quantity) => dispatch(buyIceCream(quantity)),
    buyChoc: (quantity) => dispatch(buyChoc(quantity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
