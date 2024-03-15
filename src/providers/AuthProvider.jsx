/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// import {
  // createUserWithEmailAndPassword,
  // getAuth,
  // onAuthStateChanged,
  // signInWithEmailAndPassword,
  // signOut,
  // updateProfile,
// } from "firebase/auth";
// import app from "../firebase.config";

export const AuthContext = createContext(null);

// const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  //   const updateTheProfile = (name, picture) => {
  //     return updateProfile(auth.currentUser, {
  //       displayName: name,
  //       photoURL: picture,
  //     });
  //   };

  //   const signInUser = (email, password) => {
  //     setLoading(true);
  //     return signInWithEmailAndPassword(auth, email, password);
  //   };

  const signInUser = (user) => {
    setUser(user);
  };

  // const logOut = () => {
  //   setLoading(true);
  //   return signOut(auth);
  // };

  //   useEffect(() => {
  //     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  //       setUser(currentUser);
  //       setLoading(false);
  //     });
  //     return () => {
  //       unSubscribe();
  //     };
  //   },);

  //   useEffect(() => {
  //     if (user) {
  //       setLoading(false);
  //     }
  //   }, [user]);

  const authInfo = {
    user,
    // loading,
    // createUser,
    signInUser,
    // logOut,
    // updateTheProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
