import QuickInfo from "./QuickInfo";
import Header from "./../SharedStyle/Header";
import MainContainer from "./MainContainer";

const HomePage = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-[#8be8ffcc] via-[#9d73ff7a] to-[#8dc525d0] ... shadow-2xl">
        <div className="container mx-auto">
          <QuickInfo></QuickInfo>
        </div>
      </div>
      <div>
        <Header></Header>
      </div>
      {/* main home components */}
      <div className="">
        <MainContainer></MainContainer>
      </div>
    </div>
  );
};

export default HomePage;
