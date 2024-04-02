/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser)
  }, [])

  const signInUser = (userLoggedIn) => {
    setUser(userLoggedIn);
    // Local storage e user info store kora
    localStorage.setItem("user", JSON.stringify(userLoggedIn));
    setIsLoading(false)
  };

  const logOut = () => {
    setUser(null);
    // Local storage e user info clear kora
    localStorage.clear("user");
  };

  const authInfo = {
    user,
    signInUser,
    isLoading,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
