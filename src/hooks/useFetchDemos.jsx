import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFetchDemos = () => {
  const axiosPublic = useAxiosPublic();

  const { data: demos = [], refetch, isLoading } = useQuery({
    queryKey: ["demos"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/demos");
      return res.data;
    },
  });

  return [demos, refetch, isLoading];
};

export default useFetchDemos;
