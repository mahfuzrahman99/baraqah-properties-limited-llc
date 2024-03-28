import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import WhyCoosUs from "./WhyCoosUs";


const Home = () => {
    return (
        <div>
            <div>
                <Banner/>
            </div>
            <div>
                <WhyCoosUs/>
            </div>
            <div className=" my-4 md:my-12">
                <ContactUs/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;