import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Root = () => {
  return (
    <div className="root-layout">
      <Navigation />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
