import bg4 from "./images/bg-first-section4.jpg";
import Header from "./components/Header";
import HeroOne from "./components/HeroOne";
import Services from "./components/HeroTwo";
import About from "./components/HeroThree";
import Projects from "./components/HeroFive";
import Testimonials from "./components/HeroSix";
import Contacts from "./components/HeroSeven";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="firstDiv">
                <img src={bg4} alt="bg picture" />
                <Header />
                <HeroOne />
            </div>

            <Services />

            <div className="secondDiv">
                <Projects />
            </div>

            <About />
            <Testimonials />
            <Contacts />
            <Footer />
        </>
    );
}

export default App;
