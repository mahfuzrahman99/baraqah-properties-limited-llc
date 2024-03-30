import { useState } from "react";
import SearchDemo from "../../components/SearchDemo";
import useFetchDemos from "../../hooks/useFetchDemos";
import AddDemo from "./AddDemo";
import AllDemosToDisplay from "./AllDemosToDisplay";

const AllDemos = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchedDemo, setSearchedDemo] = useState();
  const [demos, refetch] = useFetchDemos();
    // console.log(demos?.length)
  
    const demosToDisplay = searchedDemo || demos;
  // const demosToDisplay = searchedDemo?.length ? searchedDemo : demos;
  // console.log( typeof(demos))
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
          <SearchDemo demos={demos} setSearchedDemo={setSearchedDemo}/>
        </div>
      </div>
      <div>
        <AllDemosToDisplay
          refetch={refetch}
          demosToDisplay={demosToDisplay}
        />
      </div>
    </>
  );
};

export default AllDemos;
