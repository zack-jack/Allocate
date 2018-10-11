import moment from "moment";

export default [
  {
    id: "1",
    description: "Car",
    note: "test note 1",
    amount: 100,
    createdAt: 0
  },
  {
    id: "2",
    description: "Rent",
    note: "test note 2",
    amount: 200,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "Credit Card",
    note: "test note 3",
    amount: 300,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
