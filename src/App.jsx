import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Comments from "./components/Comments.jsx";
import WhatWeDo from "./components/WhatWeDo.jsx";
import HowItWork from "./components/HowItWork.jsx";
import WhoWeAre from "./components/WhoWeAre.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import Copyright from "./components/Copyright.jsx";

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Comments />
    <WhatWeDo />
    <HowItWork />
    <WhoWeAre />
    <ContactUs />
    <Footer />
    <Copyright />
    </>
  );
}

export default App