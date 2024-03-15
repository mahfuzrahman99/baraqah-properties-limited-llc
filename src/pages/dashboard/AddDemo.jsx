/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=bb5a16f772589f5febc04c57a62be37d`;

const AddDemo = ({ showModal, setShowModal }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    // image upload to imgbb and then get an url
    const imageFile = { image: data.Before_Screen_Shot[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const imageFile1 = { image: data.After_Screen_Shot[0] };
    const res1 = await axiosPublic.post(image_hosting_api, imageFile1, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success || res1.data.success) {
      const demoItem = {
        demo_Name: data.demo_Name,
        demo_before_image: res.data.data.display_url,
        demo_after_image: res1.data.data.display_url,
        DEMO_DESCRIPTION: data.DEMO_DESCRIPTION,
        category: data.category,
      };
      console.log(demoItem);
      const houseRes = await axiosPublic.post("/demos", demoItem);
      console.log(houseRes.data);
      if (houseRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${data.demo_Name} is added to the projects list`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/owner_Dashboard/allDemos");
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center overflow-x-auto text-black"
            >
              <div className=" w-full md:w-4-xl bg-[#A9A3CF] p-8 rounded shadow-lg">
                <div className=" md:grid grid-cols-2 gap-2">
                  <h2 className="text-lg md:text-2xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent col-span-2">
                    ADD A DEMO
                  </h2>

                  {/* Demo Name */}
                  <div className="mb-4 col-span-1">
                    <label className="block bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent text-xs font-bold">
                      Project Name:
                    </label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      {...register("demo_Name", {
                        required: "Project Name is required",
                      })}
                    />
                    {errors.demo_Name && (
                      <p className="text-red-500">{errors.demo_Name.message}</p>
                    )}
                  </div>

                  {/* Category Dropdown Select */}
                  <div className="mb-4 col-span-1">
                    <label className="block  bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent text-xs font-bold">
                      Select a category:
                    </label>
                    <select
                      {...register("category", {
                        required: "Please select a category",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    >
                      <option value="">Select...</option>
                      <option value="full_stack_based">Full Stack Based</option>
                      <option value="frontend_based">Frontend Based</option>
                      <option value="javascript_based">JavaScript Based</option>
                      <option value="vanilla_css_based">
                        Vanilla CSS Based
                      </option>
                    </select>
                    {errors.category && (
                      <p className="text-red-500">{errors.category.message}</p>
                    )}
                  </div>

                  {/* DEMO DESCRIPTION */}
                  <div className="mb-4 col-span-2">
                    <label className="block  bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent text-xs font-bold">
                      Demo Description:
                    </label>
                    <textarea
                      {...register("DEMO_DESCRIPTION", {
                        required: "Live link URL is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.DEMO_DESCRIPTION && (
                      <p className="text-red-500">
                        {errors.DEMO_DESCRIPTION.message}
                      </p>
                    )}
                  </div>

                  {/* Before Image */}
                  <div className="mb-4">
                    <label className="block  bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent text-xs font-bold">
                      Before Image:
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      {...register("demo_before_image", {
                        required: "Camp Image is required",
                      })}
                    />
                    {errors.demo_before_image && (
                      <p className="text-red-500">
                        {errors.demo_before_image.message}
                      </p>
                    )}
                  </div>

                  {/* After Image */}
                  <div className="mb-4">
                    <label className="block  bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent text-xs font-bold">
                      After Image:
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      {...register("demo_after_image", {
                        required: "Camp Image is required",
                      })}
                    />
                    {errors.demo_after_image && (
                      <p className="text-red-500">
                        {errors.demo_after_image.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-[100px] mx-auto bg-[#0B0633] rounded">
                  <button
                    type="submit"
                    className=" bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent transform duration-1000 font-bold py-2 px-4 rounded "
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
            <div className="modal-action">
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

export default AddDemo;
