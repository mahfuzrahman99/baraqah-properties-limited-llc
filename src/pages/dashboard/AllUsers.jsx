import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import UsersRow from "./UsersRow";
import useFetchUsers from "../../hooks/useFetchUsers";
import Register from "../Register";
import { useState } from "react";

const AllUsers = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, refetch] = useFetchUsers();
  console.log(users);
  const axiosPublic = useAxiosPublic();

  const handleRemove = async (id, user) => {
    console.log(id);
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to remove him!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove him!",
    });
    if (confirmed.isConfirmed) {
      try {
        const res = await axiosPublic.delete(`/api/users/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Removed!",
            text: `${user?.name} has been Removed from users lists.`,
            icon: "success",
          });
        }
      } catch (error) {
        console.error("Error removing user:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while Removing User.",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto w-[95vw] md:w-auto h-[85vh]">
      <div className="mt-5 md:mt-20">
        <button
          onClick={() => setShowModal(true)}
          className="btn btn-ghost bg-[#a9a3cf] hover:bg-[#311A36] transform duration-1000 text-white p-2 rounded-md w-[120px]"
        >
          ADD USER
        </button>
        <Register showModal={showModal} setShowModal={setShowModal} />
      </div>
      <div className=" bg-white mt-2 md:mt-5">
        <div className=" p-4 ">
          <h1 className="text-xl md:text-3xl font-bold  bg-gradient-to-r from-indigo-500 via-[#3a3271] to-[#E91E63] bg-clip-text text-transparent">
            Total Users: {users.length}
          </h1>
          <div
            className=" overflow-x-auto h-[60vh] md:h-[69vh] overflow-y-auto"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#a9a3cf #f1f1f1",
            }}
          >
            <table className="min-w-full bg-white overflow-x-auto">
              <thead className="rounded-t-xl bg-[#A9A3CF]">
                <tr className="rounded-t-xl bg-[#A9A3CF]">
                  <th className="py-2 px-4 border-b">NO</th>
                  <th className="py-2 px-4 border-b">IMAGE</th>
                  <th className="py-2 px-4 border-b">NAME</th>
                  <th className="py-2 px-4 border-b">EMAIL</th>
                  <th className="py-2 px-4 border-b">ROLE</th>
                  <th className="py-2 px-4 border-b">EDIT</th>
                  <th className="py-2 px-4 border-b">REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, i) => (
                  <UsersRow
                    key={user._id}
                    handleRemove={handleRemove}
                    refetch={refetch}
                    user={user}
                    i={i}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
