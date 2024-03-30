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
  const [demos] = useFetchDemos();
  const [searchedDemo, setSearchedDemo] = useState(null);

  const demosToDisplay = searchedDemo || demos;

  return (
    <div>
      <Navbar />
      <div className="md:flex justify-between max-w-5xl mx-auto md:mt-16 md:mb-6">
        <div>
          {/* this div for flex between */}
        </div>
        <SearchDemo demos={demos} setSearchedDemo={setSearchedDemo} />
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
