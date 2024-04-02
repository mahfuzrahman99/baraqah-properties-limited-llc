/* eslint-disable no-unused-vars */
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import DemoOneCard from "../../components/DemoOneCard";
import SearchDemo from "../../components/SearchDemo";
import useFetchDemos from "../../hooks/useFetchDemos";
import Footer from "./Footer";
import Navbar from "./Navbar";
AOS.init();

const OurWorks = () => {
  const [demos, refetch, isLoading] = useFetchDemos();
  const [searchedDemo, setSearchedDemo] = useState(null);

  const demosToDisplay = searchedDemo || demos;

  let content = null;

  if (isLoading) {
    content = (
      <div className="md:flex gap-4 max-w-5xl mx-auto h-[65vh] md:h-[55vh]">
        <div className="skeleton h-[30vh] md:h-full w-full flex-1 mt-3 md:mt-0"></div>
        <div className="flex flex-col md:space-y-12 space-y-4 flex-1 mt-3 md:mt-0">
          <div className="skeleton h-3 md:h-10 w-16 md:w-28"></div>
          <div className="skeleton h-3 md:h-10 md:w-full"></div>
          <div className="skeleton h-3 md:h-10 md:w-full"></div>
          <div className="skeleton h-3 md:h-10 md:w-full"></div>
          <div className="skeleton h-3 md:h-10 md:w-full"></div>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="max-w-5xl mx-auto">
        {demosToDisplay?.map((demo) => (
          <DemoOneCard key={demo.id} demo={demo} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="md:flex justify-center md:justify-between max-w-5xl mx-auto md:mt-16 md:mb-6">
        <div className="hidden md:block">{/* this div for flex between */}</div>
        <SearchDemo demos={demos} setSearchedDemo={setSearchedDemo} />
      </div>
      {content}
      <Footer />
    </div>
  );
};

export default OurWorks;
