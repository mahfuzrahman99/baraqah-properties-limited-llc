import axios from "axios";
const url = import.meta.env.DEV ? "http://localhost:5000": "https://baraqa-properties-server.vercel.app"

const axiosSecure = axios.create({
    baseURL: url,
});
const useAxiosPublic = () => {
  return axiosSecure;
};

export default useAxiosPublic;
