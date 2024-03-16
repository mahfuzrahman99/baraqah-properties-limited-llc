/* eslint-disable react/prop-types */

import { PhotoView } from "react-photo-view";

const DemoOneCard = ({ demo }) => {
  const {
    demo_Name,
    demo_before_image,
    demo_after_image,
    demo_description,
    demo_category,
  } = demo || {};
  return (
    <div className="md:hero md:hero-content gap-2 my-2 px-2 md:mb-8 border-8 rounded-2xl h-[520px] bg-[#A9A3CF] ">
      <div className="">
        <div className="relative">
          <div className="md:w-11/12">
            <PhotoView src={demo_after_image}>
              <img
                src={demo_after_image}
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                className=" md:h-[230px] md:w-[390px] w-full shadow-2xl rounded-lg"
                alt=""
              />
            </PhotoView>
          </div>
          <div className="md:w-4/5">
            <PhotoView src={demo_before_image}>
              <img
                src={demo_before_image}
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                className=" md:h-[190px] md:w-[320px] w-full hidden md:block absolute top-[70%] -right-[10%] shadow-2xl border-8 border-white rounded-lg"
                alt=""
              />
            </PhotoView>
          </div>
        </div>
      </div>
      <div
        className="space-y-3 md:w-[450px] md:ml-10"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <h1 className="text-xl md:text-4xl font-bold">{demo_Name}</h1>
        <h1 className="text-base font-normal text-justify">
          {demo_description}
        </h1>
        <h1 className="text-base font-normal text-justify">{demo_category}</h1>
      </div>
    </div>
  );
};

export default DemoOneCard;
