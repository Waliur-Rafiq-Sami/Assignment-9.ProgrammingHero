import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="scroll-smooth">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
