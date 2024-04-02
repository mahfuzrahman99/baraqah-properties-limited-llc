/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null)
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

  // useEffect hook use kora hoise user er state change track korar jonno
  useEffect(() => {
    // Local storage e user info store kora
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  // console.log(user);
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
