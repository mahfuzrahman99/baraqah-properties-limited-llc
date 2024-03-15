/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Browser reload korle local storage theke user info retrieve kora
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : {
      _id: "",
      name: "",
      email: "",
      password: "",
      photoURL: "",
      role: "",
    };
  });

  const signInUser = (userLoggedIn) => {
    setUser(userLoggedIn);
    // Local storage e user info store kora
    localStorage.setItem("user", JSON.stringify(userLoggedIn));
  };

  const logOut = () => {
    setUser({
      _id: "",
      name: "",
      email: "",
      password: "",
      photoURL: "",
      role: "",
    });
    // Local storage e user info clear kora
    localStorage.removeItem("user");
  };

  // useEffect hook use kora hoise user er state change track korar jonno
  useEffect(() => {
    // Local storage e user info store kora
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const authInfo = {
    user,
    signInUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
