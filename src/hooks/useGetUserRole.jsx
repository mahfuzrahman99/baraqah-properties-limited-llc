
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useGetUserRole = () => {
  const { user } = useContext(AuthContext);
  
  return user?.role;
};

export default useGetUserRole;
