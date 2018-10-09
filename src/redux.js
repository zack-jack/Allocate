import { createStore, combineReducers } from "redux";

const State = {
  expenses = [{
    id: '',
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }],
  filters: {
    text: '',
    sortBy: '',
    startDate: undefined,
    endDate: undefined
  }
}