import hero from "../assets/images/hero.svg";
import InfoSection from "../components/InfoSection";
import Popular from "../components/Popular";

const Home = () => {
  return (
    <div className="mx-[5%]">
      <div className="flex flex-col justify-center items-center">
        <img src={hero} alt="" className="mt-2" />
      </div>
      <InfoSection />
      <Popular/>
    </div>
  );
};

export default Home;
