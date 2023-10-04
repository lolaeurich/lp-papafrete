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
    <div className="2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
      <Navbar />
      <Hero />
      <Comments />
      <WhatWeDo />
      <HowItWork />
      <WhoWeAre />
      <ContactUs />
      <Footer />
      <Copyright />
    </div>
    </>
  );
}

export default App