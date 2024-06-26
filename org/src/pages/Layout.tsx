import { Outlet } from "react-router";
import AsideComp from "@aside/Aside";
import MapComp from "@map/MapComp";

function Layout() {
    return (
      <div className = "h-screen w-screen flex items-center relative">
        <MapComp/>
        <div className="flex flex-row absolute  bottom-0 left-0">
          <AsideComp/>
          <Outlet/>
        </div>
      </div>
    );
  }
  
  export default Layout;