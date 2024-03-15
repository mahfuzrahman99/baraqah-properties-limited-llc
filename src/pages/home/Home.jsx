import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import WhyCoosUs from "./WhyCoosUs";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <Banner/>
            </div>
            <div>
                <WhyCoosUs/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;