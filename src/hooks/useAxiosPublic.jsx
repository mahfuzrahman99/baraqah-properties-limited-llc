import axios from "axios";
// const url = import.meta.env.DEV ? "http://localhost:5000": "https://baraqa-properties-server.vercel.app"

const axiosSecure = axios.create({
    // baseURL: url,
    // baseURL: "http://localhost:5000",
    baseURL: "https://baraqa-properties-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosSecure;
};

export default useAxiosPublic;
