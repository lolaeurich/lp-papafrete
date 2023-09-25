import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Comments from "./components/Comments.jsx";

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <div className={'w-full drop-shadow-md bg-gray-200 h-[500px]'}>
      <Comments />
    </div>
    </>
  );
}

export default App