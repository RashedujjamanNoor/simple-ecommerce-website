import hero from "../assets/images/hero.svg";
import InfoSection from "../components/InfoSection";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div className="mx-[5%]">
      <div className="flex flex-col justify-center items-center">
        <img src={hero} alt="" className="mt-2" />
      </div>
      <InfoSection />
      <Trending />
    </div>
  );
};

export default Home;
