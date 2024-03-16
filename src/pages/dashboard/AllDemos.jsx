import { useState } from "react";
import useFetchDemos from "../../hooks/useFetchDemos";
import AddDemo from "./AddDemo";
import AllDemosToDisplay from "./AllDemosToDisplay";

const AllDemos = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchedDemo, setSearchedDemo] = useState();
  const [demos, refetch] = useFetchDemos();
    // console.log(demos?.length)
    const handleSearchBlog = (e) => {
      e.preventDefault();
      const enteredSearchValue = e.target.search.value.toLowerCase();
      e.target.reset();
  
      if (enteredSearchValue?.length >= 1) {
        const filteredDemo = demos?.filter(
          (demo) => demo?.demo_category.toLowerCase().includes(enteredSearchValue)
        );
  
        setSearchedDemo(filteredDemo);
      } else {
        // Clear the search results if less than 3 characters are entered
        setSearchedDemo(null);
      }
    };
  
    // const demosToDisplay = searchedDemo || demos;
  const demosToDisplay = searchedDemo?.length ? searchedDemo : demos;
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
          <form onSubmit={handleSearchBlog} className="join">
            <input
              type="text"
              name="search"
              className="hover:border-none px-5 join-item outline-none w-full md:w-[250px]"
              placeholder="Search a demo by category..."
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
