export const buyChoc = (quantity) => {
  // debugger;
  return {
    type: "BUY_CHOC",
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
  chocCount: 50,
};

export const chocReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case "BUY_CHOC":
      // debugger;
      return {
        ...state,
        chocCount: state.chocCount - action.quantity,
      };

    default:
      return state;
  }
};
