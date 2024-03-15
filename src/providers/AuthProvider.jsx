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

export const AuthContext = createContext();

// const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({
    _id: "",
    name: "",
    email: "",
    password: "",
    photo: "",
    role: "",
  });
  // const [loading, setLoading] = useState(true);

  //   const updateTheProfile = (name, picture) => {
  //     return updateProfile(auth.currentUser, {
  //       name: name,
  //       photoURL: picture,
  //     });
  //   };

  //   const signInUser = (email, password) => {
  //     setLoading(true);
  //     return signInWithEmailAndPassword(auth, email, password);
  //   };

  const signInUser = (userLogdIn) => {
    console.log(userLogdIn);
    setUser({
      _id: userLogdIn._id,
      name: userLogdIn.name,
      email: userLogdIn.email,
      password: userLogdIn.password,
      photo: userLogdIn.photo,
      role: userLogdIn.role,
    });
  };
  console.log(user);

  // const logOut = () => {
  //   setUser({
  //     _id: "",
  //     name: "",
  //     email: "",
  //     password: "",
  //     photo: "",
  //     role: "",
  //   });
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
