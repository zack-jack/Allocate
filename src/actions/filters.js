export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

export const setStartDate = (startDate, startDateId) => ({
  type: "SET_START_DATE",
  startDate,
  startDateId
});

export const setEndDate = (endDate, endDateId) => ({
  type: "SET_END_DATE",
  endDate,
  endDateId
});
