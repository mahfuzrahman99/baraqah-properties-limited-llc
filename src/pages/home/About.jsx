import Footer from "./Footer";
import Navbar from "./Navbar";
import aboutLogo from "../../assets/logo.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto mb-10 p-4 md:p-0">
        <div className="flex justify-center">
          <img
            className="h-[210px] rounded-lg"
            src={aboutLogo}
            alt="Baraqa Property Services LLC Logo"
          />
        </div>
        <h1 className="text-lg font-semibold my-4 text-center">
          At Baraqa Property Services LLC, we are committed to providing
          comprehensive property maintenance solutions to meet all your needs.
          Whether it&apos;s a small repair or a major renovation project, you
          can rely on us for top-quality service and exceptional results.
        </h1>
        <div className="md:grid grid-cols-3 md:gap-9 space-y-2 md:space-y-0 my-8">
          <p>
            <span className="font-bold">1. Landscaping Services:</span>
            <ul style={{ listStyleType: "disc" }}>
              <li>Lawn mowing</li>
              <li>Hedge trimming</li>
              <li>Tree pruning and removal</li>
              <li>Weed control</li>
              <li>Mulching</li>
              <li>Planting and flower bed maintenance</li>
            </ul>
          </p>
          <p>
            <span className="font-bold">2. Plumbing Services:</span>
            <ul style={{ listStyleType: "disc" }}>
              <li>Repairing leaks and drips</li>
              <li>Unclogging drains and toilets</li>
              <li>Fixture installation and repair</li>
              <li>Water heater maintenance and installation</li>
              <li>Pipe repair and replacement</li>
            </ul>
          </p>
          <p>
            <span className="font-bold">3. Electrical Services:</span>
            <ul style={{ listStyleType: "disc" }}>
              <li>Wiring and rewiring</li>
              <li>Lighting installation and repair</li>
              <li>Outlet and switch repair</li>
              <li>Circuit breaker panel upgrades</li>
              <li>Ceiling fan installation</li>
            </ul>
          </p>
          <p>
            <span className="font-bold">4. HVAC Services:</span>
            <ul style={{ listStyleType: "disc" }}>
              <li>Air conditioning repair and installation</li>
              <li>Heating system repair and installation</li>
              <li>HVAC system maintenance</li>
              <li>Duct cleaning and repair</li>
              <li>Thermostat installation and repair</li>
            </ul>
          </p>
          <p>
            <span className="font-bold">5. Roofing Services:</span>
            <ul style={{ listStyleType: "disc" }}>
              <li>Roof inspection</li>
              <li>Roof repair and replacement</li>
              <li>Shingle replacement</li>
              <li>Gutter cleaning and repair</li>
              <li>Flashing repair</li>
            </ul>
          </p>
          <p>
            <span className="font-bold">6. Carpentry Services:</span>
            <ul style={{ listStyleType: "disc" }}>
              <li>Deck repair and construction</li>
              <li>Fence repair and installation</li>
              <li>Trim and molding installation</li>
              <li>Door and window repair</li>
              <li>Siding repair and replacement</li>
            </ul>
          </p>
          <p>
            <span className="font-bold">7. Appliance Services:</span>
            <ul style={{ listStyleType: "disc" }}>
              <li>Appliance installation</li>
              <li>Refrigerator repair</li>
              <li>Washer and dryer repair</li>
              <li>Oven and stove repair</li>
              <li>Dishwasher repair</li>
            </ul>
          </p>
          <p>
            <span className="font-bold">8. Painting Services:</span>
            <ul style={{ listStyleType: "disc" }}>
              <li>Interior painting</li>
              <li>Exterior painting</li>
              <li>Drywall repair and painting</li>
              <li>Trim painting</li>
              <li>Cabinet painting and refinishing</li>
            </ul>
          </p>
          <p>
            <span className="font-bold">9. General Maintenance Services:</span>
            <ul style={{ listStyleType: "disc" }}>
              <li>Property inspections</li>
              <li>Cleaning services</li>
              <li>Trash removal</li>
              <li>Pressure washing</li>
              <li>Winterization and snow removal</li>
            </ul>
          </p>
        </div>
        <div>
          <p className="text-center font-semibold md:mt-14">Emergency Services: 24/7 emergency repairs</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
