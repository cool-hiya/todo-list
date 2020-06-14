const userLoggedIn = user => {
  return {
    type: "USER_LOGGED_IN",
    payload: user
  };
};

const userLoggedOut = () => {
  return {
    type: "USER_LOGGED_OUT"
  };
};

export { userLoggedIn, userLoggedOut };
