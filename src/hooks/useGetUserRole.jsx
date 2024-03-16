
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";

const useGetUserRole = () => {
  const { user, isLoading } = useContext(AuthContext);
  const email = user?.email;
  const [userRole, setUSerRole] = useState("");
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    if (isLoading) {
      axiosPublic
        .get(`/getUserRole/${email}`)

        .then((res) => {
          setUSerRole(res.data);
        });
    }
  }, [email, axiosPublic, isLoading]);
  return userRole;
};

export default useGetUserRole;
