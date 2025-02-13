import QuickInfo from "./QuickInfo";
import Header from "./../SharedStyle/Header";
import ImageSlider from "./imageSlider";
import CardComponents from "./CardComponents";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
      <div className="">
        <div className="bg-gradient-to-r from-[#8be8ffcc] via-[#9d73ff7a] to-[#8dc525d0] ... shadow-2xl">
          <div className="container mx-auto">
            <QuickInfo></QuickInfo>
          </div>
        </div>
        <div>
          <Header></Header>
        </div>
        {/* Image components */}
        <div className="">
          <ImageSlider></ImageSlider>
        </div>
        {/* Card components */}
        <div className="border-y-4 border-[#07ccc2] pb-10">
          <CardComponents></CardComponents>
        </div>
        <div className="">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default HomePage;
