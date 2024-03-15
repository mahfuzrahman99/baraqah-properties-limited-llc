import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import useFetchDemos from "../../hooks/useFetchDemos";
import DemoOneCard from "../../components/DemoOneCard";
import Footer from "./Footer";
AOS.init();

const OurWorks = () => {
  const [demos] = useFetchDemos();
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto">
        {demos.map((demo) => (
          <DemoOneCard key={demo._id} demo={demo} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default OurWorks;
