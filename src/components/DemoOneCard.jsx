/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { PhotoView } from "react-photo-view";

const DemoOneCard = ({ demo }) => {
  const {
    demo_Name,
    demo_before_image,
    demo_after_image,
    demo_description,
    demo_category,
  } = demo || {};

  useEffect(() => {
    if (window.innerWidth > 768) {
      // Initialize AOS only if screen size is larger than 768px
      import("aos").then((AOS) => {
        AOS.init({
          // Customize AOS options as needed
          duration: 1000,
          delay: 50,
          easing: "ease-in-out",
        });
      });
    }
  }, []);

  return (
    <div className="md:hero md:hero-content gap-2 my-2 px-2 md:mb-8 md:border-8 rounded-2xl h-[870px] md:h-[520px] bg-[#A9A3CF] ">
      <div className="flex justify-center">
        <div className="md:relative rounded-t-lg">
          <div className="md:w-11/12">
            <PhotoView src={demo_before_image}>
              <img
                src={demo_before_image}
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="md:h-[230px] h-[200px] md:w-[390px] w-[300px] shadow-2xl rounded-lg pt-4 md:pt-auto"
                alt=""
              />
            </PhotoView>
          </div>
          <div className="md:w-4/5">
            <PhotoView src={demo_after_image}>
              <img
                src={demo_after_image}
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="md:h-[190px] h-[200px] md:w-[320px] w-[300px] absolute md:top-[70%] md:-right-[10%] shadow-2xl md:border-8 border-white rounded-lg my-2 md:my-auto"
                alt=""
              />
            </PhotoView>
          </div>
        </div>
      </div>
      <div
        className="space-y-3 md:w-[450px] md:ml-10 mt-[230px] md:mt-auto"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <h1 className="text-xl md:text-4xl font-bold">{demo_Name}</h1>
        <h1 className="text-sm md:text-base font-normal text-justify">
          {demo_description}
        </h1>
        <h1 className="text-sm text-justify font-bold">{demo_category}</h1>
      </div>
    </div>
  );
};

export default DemoOneCard;
