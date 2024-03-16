import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import useFetchDemos from "../../hooks/useFetchDemos";
import DemoOneCard from "../../components/DemoOneCard";
import Footer from "./Footer";
import { useState } from "react";
AOS.init();

const OurWorks = () => {
  const [demos] = useFetchDemos();
  const [searchedDemo, setSearchedDemo] = useState();
  
  const handleSearchBlog = (e) => {
    e.preventDefault();
    const enteredSearchValue = e.target.search.value.toLowerCase();
    e.target.reset();

    if (enteredSearchValue.length >= 1) {
      const filteredDemo = demos?.filter(
        (demo) => demo?.demo_category.toLowerCase().includes(enteredSearchValue)
      );

      setSearchedDemo(filteredDemo);
    } else {
      // Clear the search results if less than 3 characters are entered
      setSearchedDemo(null);
    }
  };

  const demosToDisplay = searchedDemo || demos;

  return (
    <div>
      <Navbar />
      <div className="md:flex justify-between max-w-5xl mx-auto md:mt-16 md:mb-6">
        <div></div>
        <div>
        <form onSubmit={handleSearchBlog} className="join">
          <input
            type="text"
            name="search"
            className="hover:border-none px-5 join-item outline-none w-[250px]"
            placeholder="Search a demo by category..."
          />
          <button className="btn join-item rounded-r-md bg-[#a9a3cf] hover:bg-[#311A36] transform duration-1000 text-white p-2">
            SEARCH
          </button>
        </form>
      </div>
      </div>
      <div className="max-w-5xl mx-auto">
        {demosToDisplay?.map((demo) => (
          <DemoOneCard key={demo._id} demo={demo} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default OurWorks;
