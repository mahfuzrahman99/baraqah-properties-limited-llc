import axios from "axios";
const axiosSecure = axios.create({
    // baseURL: "https://mahfuz-s-portfolio-website-server.vercel.app",
  baseURL: "http://localhost:5000",
});
const useAxiosPublic = () => {
  return axiosSecure;
};

export default useAxiosPublic;
