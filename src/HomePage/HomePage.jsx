import QuickInfo from "./QuickInfo";
import Header from "./../SharedStyle/Header";

const HomePage = () => {
  return (
    <div className="">
      <div className="mb-1 shadow-gray-400 shadow">
        <div className="container mx-auto">
          <QuickInfo></QuickInfo>
        </div>
      </div>
      <Header></Header>
    </div>
  );
};

export default HomePage;
