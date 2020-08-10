const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const toggleLog = () => {
  return {
    type: "SIGN_IN",
  };
};

const hrAction = () => {
  return {
    type: "READ_HR",
  };
};
export { increment, decrement, toggleLog, hrAction };
