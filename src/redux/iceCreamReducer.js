export const buyIceCream = (quantity) => {
//   debugger;
  return {
    type: "BUY_ICECREAM",
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
  iceCreamCount: 20,
};

export const iceCreamReducer = (state = initialState, action) => {
//   debugger;
  switch (action.type) {
    case "BUY_ICECREAM":
      // debugger;
      return {
        ...state,
        iceCreamCount: state.iceCreamCount - action.quantity,
      };

    default:
      return state;
  }
};
