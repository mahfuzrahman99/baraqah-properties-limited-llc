import Lottie from "lottie-react";
import techSphere from "../../../public/TechSphere.json";

const WhyCoosUs = () => {
  return (
    <div>
      <div className="mt-16">
        <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-indigo-500 via-[#3a3271] to-pink-500 bg-clip-text text-transparent">
          Why Choose Baraqa Properties?
        </h1>
        <p className="text-center font-medium mt-3">
          At Baraqa Properties, we&apos;re more than just a gardening company –
          we&apos;re your partners in creating
          <br /> the outdoor paradise you&apos;ve always envisioned. Here&apos;s
          why you should choose us
        </p>
      </div>
      <div className="md:grid grid-cols-2 gap-3 max-w-6xl mx-auto mb-16 mt-6 px-3 md:px-0">
        <div className="col-span-1">
          <Lottie
            animationData={techSphere}
            width={350}
            height={550}
            loop={true}
          />
        </div>
        <div className="col-span-1 space-y-2 md:mt-7">
          <p>
            <span className="font-bold">Expertise: </span> Our team comprises
            seasoned professionals with a wealth of experience in landscaping
            and garden design.
          </p>
          <p>
            <span className="font-bold">Personalized Approach: </span>We take
            the time to understand your unique preferences and tailor our
            services to bring your vision to life
          </p>
          <p>
            <span className="font-bold">Quality Assurance: </span> From the
            selection of plants to the execution of every detail, we maintain
            the highest standards of quality craftsmanship.
          </p>
          <p>
            <span className="font-bold">Customer Satisfaction:</span> Your
            satisfaction is our priority. We strive to exceed your expectations
            and ensure that you&apos;re delighted with the results.
          </p>
          <p>
            <span className="font-bold">Creative Solutions:</span> Our team
            thrives on innovation, offering creative solutions to maximize the
            potential of your outdoor space and bring fresh ideas to your
            project.
          </p>
          <p>
            <span className="font-bold">Transparent Communication: </span>We
            believe in open and transparent communication every step of the way.
            You&apos;ll be kept informed and involved throughout the process,
            ensuring a smooth and collaborative experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyCoosUs;
