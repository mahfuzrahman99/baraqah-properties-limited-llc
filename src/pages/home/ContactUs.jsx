import Lottie from "lottie-react";
import contactANM from "../../../public/Contact_Us.json";

const ContactUs = () => {
  return (
    <>
      <h1 className="text-center text-xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent">
        For any questions please contact Us
      </h1>

      <p className="text-center text-xs md:text-base font-medium mt-3 max-w-2xl mx-auto">
        Contact us now to embark on a journey towards your property maintenance
        goals. Let&apos;s elevate your property experience together.
      </p>
      <div className="flex items-center max-w-5xl mx-auto">
        <div>
          <p className="text-justify text-xs md:text-base font-medium mt-3 max-w-[550px] p-6">
            Contact us today to learn more about our services and how we can
            help you achieve your property maintenance goals. We look forward to
            serving you and exceeding your expectations every step of the way.
          </p>
          <div className="flex justify-center text-lg font-semibold">
            <p>Email for contact us:</p>
            <p className="text-[] font-bold">
              baraqapropertyservices@gmail.com
            </p>
          </div>
        </div>
        <div className="max-w-[400px]">
          <Lottie
            animationData={contactANM}
            width={250}
            height={350}
            loop={true}
          />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
