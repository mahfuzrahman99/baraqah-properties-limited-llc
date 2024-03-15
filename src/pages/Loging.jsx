/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import loginImg from "../assets/login.jpg";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Login = () => {
  const { signInUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = {
      email: email,
      password: password,
    };

    const result = await axiosPublic.get("/login", user);

    console.log( result)
    signInUser(result);
    if (result._id) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Login successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
  };

  console.log(user);

  return (
    <div
      className="bg-black bg-opacity-60 h-[100vh] flex items-center "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${loginImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" flex flex-col bg-[#a9a3cf] bg-opacity-30 p-4 rounded-xl  md:w-[450px] mx-auto">
        <h1 className="text-2xl font-bold text-center py-4 text-white">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
          <div className="flex flex-col mt-2 col-span-2">
            <label htmlFor="email" className="text-white">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="p-2 rounded-md bg-white text-black"
              placeholder="Input your valid email here"
            />
          </div>
          <div className="flex flex-col mt-2 col-span-2">
            <label htmlFor="password" className="text-white">
              Password:
            </label>
            <input
              type="text"
              name="password"
              className="p-2 rounded-md bg-white text-black"
              placeholder="Input your password here"
            />
          </div>
          <div className="flex justify-center w-2/4 mx-auto mt-2 col-span-2">
            <button
              type="submit"
              className="btn btn-ghost bg-white p-2 rounded-md w-full text-xl font-bold uppercase text-[#00938a] hover:text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
