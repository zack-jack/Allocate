import { createStore, combineReducers } from "redux";
import uuid from "uuid";

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

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
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
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
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

store.dispatch(editExpense(testExpense2.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("test2"));
store.dispatch(setTextFilter(""));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

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
