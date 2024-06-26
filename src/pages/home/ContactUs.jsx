import contactImg from "../../assets/contact_Us.gif";
const ContactUs = () => {
  return (
    <div className="bg-white max-w-5xl mx-auto rounded-lg shadow-lg">
      <h1 className="text-center text-lg md:text-4xl font-bold bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent md:pt-6">
        For any questions please email
      </h1>

      <p className="md:text-center text-xs md:text-base font-medium mt-3 max-w-2xl mx-auto px-6 md:px-0">
        Let&apos;s elevate your property experience together.
      </p>
      <div className="md:flex items-center max-w-5xl mx-auto px-4 md:px-0 bg-white rounded-lg mt-3 shadow-md">
        <div>
          <p className="md:text-center text-xs md:text-base font-medium md:mt-3 max-w-[550px] p-2 md:p-6">
            Contact us today to learn more about our services and how we can
            help you achieve your property maintenance goals. We look forward to
            serving you and exceeding your expectations every step of the way.
          </p>
          <div className="md:flex font-semibold p-2 md:p-6 md:text-lg">
            <p>Get in touch with us at:</p>
            <p className=" font-bold md:ml-2">baraqapropertyservices@gmail.com</p>
          </div>
        </div>
        <div className="max-w-[400px]">
          <img className="rounded-lg" src={contactImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
