import QuickInfo from "./QuickInfo";
import Header from "./../SharedStyle/Header";

const HomePage = () => {
  return (
    <div className="">
      <div className="mb-1 bg-gradient-to-r from-[#8be8ffcc] via-[#9d73ff7a] to-[#8dc525d0] ... shadow-xl">
        <div className="container mx-auto">
          <QuickInfo></QuickInfo>
        </div>
      </div>
      <Header></Header>
    </div>
  );
};

export default HomePage;
