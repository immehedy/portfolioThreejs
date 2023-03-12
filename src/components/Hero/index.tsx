import LeftContent from "./sections/LeftContent";
import Navbar from "./sections/Navbar";
import RightContent from "./sections/RightContent";

const Hero = () => {
  return (
    <div className="h-screen text-white snap-center w-3/4 mx-auto">
      <Navbar />
      <div className="flex gap-2 items-center justify-around">
        <LeftContent/>
        <RightContent/>
      </div>
    </div>
  );
};

export default Hero;
