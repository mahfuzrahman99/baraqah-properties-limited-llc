/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import useFetchDemos from "../../hooks/useFetchDemos";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=bb5a16f772589f5febc04c57a62be37d`;

const UpdateDemo = ({ showModal, setShowModal, demo, refetch }) => {
  // const [demos] = useFetchDemos();
  const axiosPublic = useAxiosPublic();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const {
    _id,
    demo_Name,
    demo_before_image,
    demo_after_image,
    demo_description,
    demo_category,
  } = demo || {};

  const onSubmit = async (data) => {
    // image upload to imgbb and then get an url
    const imageFile = { image: data.demo_before_image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const imageFile1 = { image: data.demo_after_image[0] };
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
        demo_description: data.demo_description,
        demo_category: data.demo_category,
      };
      console.log(demoItem);
      const demoRes = await axiosPublic.patch(`/api/demos/${_id}`, demoItem);
      console.log("console from patch request", demoRes.data);
      if (demoRes.data.modifiedCount) {
        reset();
        refetch();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${data?.demo_Name} is updated successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        setShowModal(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to update the project. Please try again.",
        });
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
              className="flex justify-center"
            >
              <div className="max-w-3xl w-full bg-[#A9A3CF] p-8 rounded shadow-lg">
                <div className="md:grid grid-cols-2 gap-2">
                  <h2 className="text-lg md:text-2xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent col-span-2">
                    Update Demo
                  </h2>

                  {/* Demo Name */}
                  <div className="mb-4 col-span-1">
                    <label className="block bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent text-xs font-bold">
                      Project Name:
                    </label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1 outline-none"
                      defaultValue={demo_Name}
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
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1 outline-none"
                      defaultValue={demo_category}
                      {...register("demo_category", {
                        required: "Project Name is required",
                      })}
                    />
                    {/* <select
                      defaultValue={demo_category}
                      {...register("demo_category", {
                        required: "Please select a category",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1 outline-none"
                    >
                      <option value="">Select Category...</option>
                      {demos?.map(demo => (
                        <option key={demo.demo_category} value={demo.demo_category}>{demo.demo_category}</option>
                      ))}
                    </select> */}
                    {errors.demo_category && (
                      <p className="text-red-500">
                        {errors.demo_category.message}
                      </p>
                    )}
                  </div>

                  {/* DEMO DESCRIPTION */}
                  <div className="mb-4 col-span-2">
                    <label className="block  bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent text-xs font-bold">
                      Demo Description:
                    </label>
                    <textarea
                      defaultValue={demo_description}
                      {...register("demo_description", {
                        required: "Live link URL is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1 outline-none"
                    />
                    {errors.demo_description && (
                      <p className="text-red-500">
                        {errors.demo_description.message}
                      </p>
                    )}
                  </div>

                  {/* Before Image */}
                  <div className="columns-1">
                    <label className="block  bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent text-xs font-bold">
                      Before Image:
                    </label>
                    <div>
                      <img
                        className="rounded-md md:h-[170px] md:w-[340px] h-[120px] w-[230px] mb-2"
                        src={demo_before_image}
                        alt=""
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="file"
                        accept="image/*"
                        className=" text-xs md:text-base"
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
                  </div>

                  {/* After Image */}
                  <div>
                    <label className="block  bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent text-xs font-bold">
                      After Image:
                    </label>
                    <div>
                      <img
                        className="rounded-md md:h-[170px] md:w-[340px] h-[120px] w-[230px] mb-2"
                        src={demo_after_image}
                        alt=""
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="file"
                        accept="image/*"
                        className=" text-xs md:text-base"
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
                </div>
                <div className="w-[110px] mx-auto bg-[#0B0633] rounded">
                  <button
                    type="submit"
                    className=" bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent transform duration-1000 font-bold py-2 px-4 rounded "
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button
                  onClick={() => setShowModal(false)}
                  className="btn  bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent font-bold text-lg"
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

export default UpdateDemo;
