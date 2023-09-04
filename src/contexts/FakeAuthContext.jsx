import { createContext, useContext, useReducer } from "react";

const FakeAuthContext = createContext();

const initialState = {
  user: {},
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logOut":
      return { ...state, user: {}, isAuthenticated: false };
    default:
      throw new Error("Unknown action type !!!");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function FakeAuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function loginUser(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logOut() {
    dispatch({ type: "logOut" });
  }

  return (
    <FakeAuthContext.Provider
      value={{ user, isAuthenticated, loginUser, logOut }}
    >
      {children}
    </FakeAuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(FakeAuthContext);
  if (context === undefined)
    throw new Error("Context used to outside of Auth contextProvider");
  return context;
}

export { FakeAuthProvider, useAuth };
