const Initialobj = {
  Product: JSON.parse(localStorage.getItem("product")) || [],
  cash: JSON.parse(localStorage.getItem("cash")) || 10000,
  expenses: JSON.parse(localStorage.getItem("expenses")) || 0,
};
export const Reducer = (state = Initialobj, action) => {
  switch (action.type) {
    case "BUY":
      let num = [...state.Product, action.payload];
      localStorage.setItem("product", JSON.stringify(num));
      let str = state.cash - action.payload.price;
      localStorage.setItem("cash", JSON.stringify(str));
      let sim = state.expenses + +action.payload.price;
      localStorage.setItem("expenses", JSON.stringify(sim));
      return {
        ...state,
        Product: num,
        cash: str,
        expenses: sim,
      };

    case "DELETE":
      let result = state.Product.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("product", JSON.stringify(result));
      let cashDel = state.cash + +action.payload.price
      localStorage.setItem('cash', JSON.stringify(cashDel))
      let expensesDel = state.expenses - action.payload.price;
      localStorage.setItem("expenses", JSON.stringify(expensesDel));

      return {
        ...state,
        Product: result,
        cash: cashDel,
        expenses: expensesDel,
      };

    default:
      return state;
  }
};
