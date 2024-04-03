import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFetchUsers = () => {
  const axiosPublic = useAxiosPublic();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/users");
      return res.data;
    },
    staleTime: 6000 * 1000,
  });

  return [users, refetch];
};

export default useFetchUsers;
