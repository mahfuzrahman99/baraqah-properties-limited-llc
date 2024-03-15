import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFetchDemos = () => {
  const axiosPublic = useAxiosPublic();

  const { data: demos = [], refetch } = useQuery({
    queryKey: ["demos"],
    queryFn: async () => {
      const res = await axiosPublic.get("/demos");
      return res.data;
    },
  });

  return [demos, refetch];
};

export default useFetchDemos;
