/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=bb5a16f772589f5febc04c57a62be37d`;

const Register = ({ showModal, setShowModal }) => {
  const axiosPublic = useAxiosPublic();

  // console.log(createUser);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", e.target.photoURL.files[0]);

    const res = await axiosPublic.post(image_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const photoURL = res.data.data.display_url;
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const userInfo = { name, email, password, photoURL, role: "Admin" };

      if (/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
        axiosPublic.post("/api/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            e.target.reset();
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Login successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      } else {
        Swal.fire(
          "Error",
          "Your Password Must Be 6 character or longer and have atleast a uppercase and a spacial character",
          "error"
        );
        return;
      }
    }
  };

  return (
    <>
      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div
            className="modal-box max-h-[95vh] max-w-[830px] mx-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="register-form flex flex-col bg-[#a9a3cf] p-4 rounded-xl max-w-2xl mx-auto md:w-[450px] w-full">
              <h1 className="text-2xl font-bold text-center py-4 text-white">
                Register A Admin
              </h1>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-2 text-black"
              >
                <div className="flex flex-col mt-2 col-span-2">
                  <label
                    htmlFor="name"
                    className=" block  bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent text-xs font-bold"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="p-2 rounded-md bg-white text-black outline-none"
                    placeholder="Input your Name here"
                  />
                </div>
                <div className="flex flex-col mt-2 col-span-2">
                  <label
                    htmlFor="email"
                    className=" block  bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent text-xs font-bold"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="p-2 rounded-md bg-white text-black  outline-none"
                    placeholder="Input your valid email here"
                  />
                </div>
                <div className="flex flex-col mt-2 col-span-2">
                  <label
                    htmlFor="password"
                    className=" block  bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent text-xs font-bold"
                  >
                    Password:
                  </label>
                  <input
                    type="text"
                    name="password"
                    className="p-2 rounded-md bg-white text-black outline-none"
                    placeholder="Input your password here"
                  />
                </div>
                <div className="mb-4 col-span-2">
                  <label className="block  bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent text-xs font-bold">
                    User Image:
                  </label>
                  <input
                    type="file"
                    name="photoURL"
                    accept="image/*"
                    className="p-2 rounded-md bg-white text-black outline-none w-full"
                  />
                </div>
                <div className="w-[100px] mx-auto bg-[#0B0633] rounded col-span-2 mt-2">
                  <button
                    type="submit"
                    className=" bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent transform duration-1000 font-bold py-2 px-4 rounded "
                  >
                    REGISTER
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-action mt-0">
              <form method="dialog">
                <button
                  onClick={() => setShowModal(false)}
                  className="btn  bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent border-none text-lg font-bold outline-none"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Register;
