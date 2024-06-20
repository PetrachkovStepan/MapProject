import { Outlet } from "react-router";
import AsideComp from "../components/Aside/Aside";
import MapComp from "../components/MapComp/MapComp";

function Layout() {
    return (
      <div className = "h-screen w-screen flex items-center relative">
        <MapComp ></MapComp>
        <div className="flex flex-row absolute  bottom-0 left-0">
          <AsideComp></AsideComp>
          <Outlet></Outlet>
        </div>
      </div>
    );
  }
  
  export default Layout;