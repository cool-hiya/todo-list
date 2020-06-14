import { User } from "../models";

const updateAuth = (state, action) => {
  if (state === undefined) {
    return {
      user: new User(),
      isUserLoggedIn: false
    };
  }

  state = state.auth;

  switch (action.type) {
    case "USER_LOGGED_IN":
      return {
        ...state,
        user: action.payload,
        isUserLoggedIn: true
      };
    case "USER_LOGGED_OUT":
      return {
        ...state,
        isUserLoggedIn: false
      };

    default:
      return state;
  }
};

export default updateAuth;
