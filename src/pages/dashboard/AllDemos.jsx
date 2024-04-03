import { useState } from "react";
import SearchDemo from "../../components/SearchDemo";
import useFetchDemos from "../../hooks/useFetchDemos";
import AddDemo from "./AddDemo";
import AllDemosToDisplay from "./AllDemosToDisplay";

const AllDemos = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchedDemo, setSearchedDemo] = useState();
  const [demos, refetch, isLoading] = useFetchDemos();
  // console.log(demos?.length)
  const demosToDisplay = searchedDemo || demos;

  let content = null;

  if (isLoading) {
    content = (
      <div className="md:flex gap-4 max-w-5xl mx-auto h-[69vh] md:h-[55vh]">
        <div className="flex flex-col md:space-y-12 space-y-4 flex-1">
          <div className="skeleton h-10 w-48"></div>
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
        </div>
      </div>
    );
  } else {
    content = (
      <AllDemosToDisplay refetch={refetch} demosToDisplay={demosToDisplay} />
    );
  }

  return (
    <>
      <div className="md:flex justify-between m-3 md:m-10">
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-ghost bg-[#a9a3cf] hover:bg-[#311A36] transform duration-1000 text-white w-full md:w-auto p-2 rounded-md mb-2 md:mb-auto"
          >
            ADD A DEMO
          </button>
          <AddDemo showModal={showModal} setShowModal={setShowModal} />
        </div>
        <div>
          <SearchDemo demos={demos} setSearchedDemo={setSearchedDemo} />
        </div>
      </div>
      {content}
    </>
  );
};

export default AllDemos;
