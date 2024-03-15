import { useState } from "react";
import useFetchDemos from "../../hooks/useFetchDemos";
import AddDemo from "./AddDemo";
import AllDemosToDisplay from "./AllDemosToDisplay";

const AllDemos = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchedDemo, setSearchedDemo] = useState();
  const [demos, refetch] = useFetchDemos();
    console.log(demos.length)
  const handleSearchBlog = (e) => {
    e.preventDefault();
    const enteredSearchValue = e.target.search.value.toLowerCase();
    e.target.reset();

    const filteredDemo = demos?.filter(
      (demo) => demo.demoName.toLowerCase() === enteredSearchValue
    );

    setSearchedDemo(filteredDemo);
  };
  const demosToDisplay = searchedDemo?.length ? searchedDemo : demos;
  // console.log( houses)
  return (
    <>
      <div className="flex justify-between m-3 md:m-10">
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-ghost bg-[#a9a3cf] hover:bg-[#311A36] transform duration-1000 text-white p-2 rounded-md"
          >
            ADD A DEMO
          </button>
          <AddDemo showModal={showModal} setShowModal={setShowModal} />
        </div>
        <div>
          <form onSubmit={handleSearchBlog} className="join">
            <input
              type="text"
              name="search"
              className="hover:border-none px-5 join-item outline-none"
              placeholder="Search a demo..."
            />
            <button className="btn join-item rounded-r-md bg-[#a9a3cf] hover:bg-[#311A36] transform duration-1000 text-white p-2">
              SEARCH
            </button>
          </form>
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
