/* eslint-disable react/prop-types */
import { useState } from "react";
import { PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import UpdateDemo from "./UpdateDemo";

const AllDemosRow = ({ demo, i, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const [showModal, setShowModal] = useState(false);
  const {
    demo_Name,
    demo_before_image,
    demo_after_image,
    demo_description,
    demo_category,
  } = demo || {};

  const handleDelete = async (id, demo) => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      iconColor: "#A9A3CF",
      showCancelButton: true,
      confirmButtonColor: "#A9A3CF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this!",
    });

    if (confirmed.isConfirmed) {
      try {
        const res = await axiosPublic.delete(`/api/demos/${id}`);
        console.log("console log from hare", res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${demo?.projectName} has been delete from demos lists.`,
            icon: "success",
          });
        }
      } catch (error) {
        console.error("Error deleting demo:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while deleting demo.",
          icon: "error",
        });
      }
    }
  };
  return (
    <>
      <tr className="bg-gray-100 text-xs text-black font-semibold">
        <td className="py-2 px-4 border-b-4">{i + 1}</td>
        <td className="py-2 px-4 border-b-4">
          <PhotoView src={demo_before_image}>
            <img
              className="md:h-12 h-10 md:w-[80px] rounded shadow-lg"
              src={demo_before_image}
              alt={demo_Name}
            />
          </PhotoView>
        </td>
        <td className="py-2 px-4 border-b-4">
          <PhotoView src={demo_after_image}>
            <img
              className="md:h-12 h-10 md:w-[80px] rounded shadow-lg"
              src={demo_after_image}
              alt={demo_Name}
            />
          </PhotoView>
        </td>
        <td className="py-2 px-4 border-b-4">{demo_Name}</td>
        <td className="py-2 px-4 border-b-4">{demo_category}</td>
        <td className="py-2 px-4 border-b-4">
          {demo_description?.slice(0, 10)}
        </td>
        <td className="py-2 px-4 border-b-4 p-1 text-xl w-4">
          <button
            onClick={() => setShowModal(true)}
            className="flex justify-center m-1 p-1 rounded bg-[#a9a3cf] shadow-lg"
          >
            <span className="text-4xl">
              <MdOutlineSecurityUpdateGood />
            </span>
          </button>
          <UpdateDemo
            demo={demo}
            refetch={refetch}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </td>
        <td className="py-2 px-4 border-b-4">
          <button
            onClick={() => handleDelete(demo._id, demo)}
            className="bg-red-500 text-white px-2 py-1 rounded ml-2 shadow-lg"
          >
            <span className="text-3xl">
              <RiDeleteBin6Line />
            </span>
          </button>
        </td>
      </tr>
    </>
  );
};

export default AllDemosRow;
