import contactImg from "../../assets/contact_Us.gif";
const ContactUs = () => {
  return (
    <div className="bg-white max-w-5xl mx-auto rounded-lg shadow-lg">
      <h1 className="text-center text-lg md:text-4xl font-bold bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent md:pt-6">
        For any questions please contact Us
      </h1>

      <p className="md:text-center text-justify text-xs md:text-base font-medium mt-3 max-w-2xl mx-auto px-4 md:px-0">
        Contact us now to embark on a journey towards your property maintenance
        goals. Let&apos;s elevate your property experience together.
      </p>
      <div className="md:flex items-center max-w-5xl mx-auto px-4 md:px-0 bg-white rounded-lg mt-3 shadow-md">
        <div>
          <p className="md:text-center text-justify text-xs md:text-base font-medium md:mt-3 max-w-[550px] p-2 md:p-6">
            Contact us today to learn more about our services and how we can
            help you achieve your property maintenance goals. We look forward to
            serving you and exceeding your expectations every step of the way.
          </p>
          <div className="md:flex font-semibold p-2 md:p-6 text-sm md:text-lg">
            <p>Email for contact us:</p>
            <p className=" font-bold ml-2">
              baraqapropertyservices@gmail.com
            </p>
          </div>
        </div>
        <div className="max-w-[400px] hidden md:block">
          <img className="rounded-lg" src={contactImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
