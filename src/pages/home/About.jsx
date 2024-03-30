import Footer from "./Footer";
import Navbar from "./Navbar";
import aboutLogo from "../../assets/logo.png";
import { TiTick } from "react-icons/ti";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mb-10 p-4 md:p-0">
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
            <ul className="r p-2 shadow-xl rounded-md h-[270px]">
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Lawn mowing</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Hedge trimming</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Tree pruning and removal</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Weed control</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Mulching</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Planting and flower bed maintenance</span>
              </li>
            </ul>
          </p>
          <p>
            <span className="font-bold">2. Plumbing Services:</span>
            <ul className="r p-2 shadow-xl rounded-md h-[270px]">
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Repairing leaks and drips</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Unclogging drains and toilets</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Fixture installation and repair</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Water heater maintenance and installation</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Pipe repair and replacement</span>
              </li>
            </ul>
          </p>
          <p>
            <span className="font-bold">3. Electrical Services:</span>
            <ul className="r p-2 shadow-xl rounded-md h-[270px]">
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Wiring and rewiring</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Lighting installation and repair</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Outlet and switch repair</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Circuit breaker panel upgrades</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Ceiling fan installation</span>
              </li>
            </ul>
          </p>
          <p>
            <span className="font-bold">4. HVAC Services:</span>
            <ul className="r p-2 shadow-xl rounded-md h-[270px]">
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Air conditioning repair and installation</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Heating system repair and installation</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>HVAC system maintenance</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Duct cleaning and repair</span>
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                <span>Thermostat installation and repair</span>
              </li>
            </ul>
          </p>
          <p>
            <span className="font-bold">5. Roofing Services:</span>
            <ul className="r p-2 shadow-xl rounded-md h-[270px]">
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Roof inspection
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Roof repair and replacement
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Shingle replacement
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Gutter cleaning and repair
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Flashing repair
              </li>
            </ul>
          </p>
          <p>
            <span className="font-bold">6. Carpentry Services:</span>
            <ul className="r p-2 shadow-xl rounded-md h-[270px]">
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Deck repair and construction
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Fence repair and installation
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Trim and molding installation
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Door and window repair
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Siding repair and replacement
              </li>
            </ul>
          </p>
          <p>
            <span className="font-bold">7. Appliance Services:</span>
            <ul className="r p-2 shadow-xl rounded-md h-[270px]">
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Appliance installation
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Refrigerator repair
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Washer and dryer repair
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Oven and stove repair
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Dishwasher repair
              </li>
            </ul>
          </p>
          <p>
            <span className="font-bold">8. Painting Services:</span>
            <ul className="r p-2 shadow-xl rounded-md h-[270px]">
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Interior painting
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Exterior painting
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Drywall repair and painting
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Trim painting
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Cabinet painting and refinishing
              </li>
            </ul>
          </p>
          <p>
            <span className="font-bold">9. General Maintenance Services:</span>
            <ul className="r p-2 shadow-xl rounded-md h-[270px]">
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Property inspections
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Cleaning services
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Trash removal
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Pressure washing
              </li>
              <li className="flex gap-1 items-center p-2 shadow-md rounded-md">
                <span>
                  <TiTick />
                </span>
                Winterization and snow removal
              </li>
            </ul>
          </p>
        </div>
        <div>
          <p className="text-center font-semibold md:mt-14">
            Emergency Services: 24/7 emergency repairs
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
