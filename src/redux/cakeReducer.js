export const buyCake = (quantity) => {
  // debugger;
  return {
    type: "BUY_CAKE",
    quantity,
  };
};

// export const deleteSession = () => {
//   // debugger;
//   return {
//     type: "DEL_SESSION",
//   };
// };

const initialState = {
  cakeCount: 10,
};

export const cakeReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case "BUY_CAKE":
      // debugger;
      return {
        ...state,
        cakeCount: state.cakeCount - action.quantity,
      };

    default:
      return state;
  }
};
