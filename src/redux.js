import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const testExpense1 = store.dispatch(
  addExpense({ description: "test", amount: 100 })
);
const testExpense2 = store.dispatch(
  addExpense({ description: "test2", amount: 300 })
);

store.dispatch(removeExpense({ id: testExpense1.expense.id }));

console.log(testExpense1, testExpense2);

const state = {
  expenses: [
    {
      id: "",
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  ],
  filters: {
    text: "",
    sortBy: "",
    startDate: undefined,
    endDate: undefined
  }
};
