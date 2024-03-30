
import choosVideo from "../../assets/Why_choos_us.mp4";
const WhyCoosUs = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="md:mt-16 mt-6 px-2 md:px-0 ">
        <h1 className="text-center text-xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent">
          Why Choose Baraqa Property Services LLC?
        </h1>
        <p className="md:text-center text-justify text-xs md:text-base font-medium mt-3 max-w-4xl mx-auto px-4 md:px-0 ">
          Top notch quality coupled with unwavering
          reliability makes Baraqa Property Services LLC your trusted partner in
          property maintenance. We aim to build long term relationships with our
          customer focused approach to services and our team of professionals
          are meticulous about every detail serving with integrity and
          professionalism.
        </p>
      </div>
      <div className="md:grid grid-cols-2 items-center gap-3 max-w-6xl mx-auto mb-6 md:mb-16 mt-6 px-3 md:px-0">
        <div className="col-span-1">
          {/* video div */}
          <video className="md:mt-5" id="choosVideo" autoPlay loop muted>
            <source src={choosVideo} type="video/mp4" />
          </video>
        </div>
        <div className="col-span-1 space-y-2 md:mt-7 text-sm md:text-base font-normal px-4 md:px-0">
          <p>
            <span className="font-bold">Expertise and Excellence: </span>
            <br />
            With years of industry experience and a team of skilled
            professionals, Baraqa Property Services LLC brings unparalleled
            expertise to every project. From routine maintenance tasks to
            complex repairs and renovations, we deliver excellence in every
            aspect of property. maintenance
          </p>
          <p>
            <span className="font-bold">Comprehensive Solutions: </span>
            <br />
            Our comprehensive range of services covers all aspects of property.
            maintenance, including plumbing, electrical work, landscaping,
            walls, roofing, flooring, HVAC maintenance, and more. Whatever your
            property needs, we have the skills and resources to handle them with
            precision and efficiency
          </p>
          <p>
            <span className="font-bold">Prompt and Reliable Service: </span>
            <br />
            At Baraqa, we understand the importance of prompt and reliable
            service. We prioritize your needs and ensure timely responses to
            service requests, minimizing downtime, and maximizing property
            value.
          </p>
          <p>
            <span className="font-bold">Quality Craftsmanship:</span>
            <br />
            We take pride in our workmanship and are committed to delivering
            superior results on every project. With attention to detail and a
            focus on quality, we guarantee long-lasting solutions that exceed
            expectations.
          </p>
        </div>
        <div className="col-span-2 space-y-2 md:mt-7 text-sm md:text-base font-normal px-4 md:px-0">
          <p>
            <span className="font-bold">Transparent Communication:</span> <br />
            Communication is key to our success. We believe in transparency and
            open communication with our clients, keeping you informed at every
            stage of the project and ensuring your peace of mind.
          </p>
          <p>
            <span className="font-bold">Customized Approach: </span>
            We understand that every property is unique, which is why we tailor
            our services to meet your specific needs and preferences. Whether
            you require ongoing maintenance or a one-time repair, we work
            closely with you to develop a customized solution that fits your
            budget and exceeds your expectations.
          </p>
          <p>
            <span className="font-bold">Customer Satisfaction Guarantee: </span>
            <br />
            Your satisfaction is our top priority. We are dedicated to
            delivering exceptional service and building long-lasting
            relationships with our clients based on trust, reliability, and
            integrity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyCoosUs;
