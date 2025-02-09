import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-[#ace4fa28]">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
