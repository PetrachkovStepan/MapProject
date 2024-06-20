import { Outlet } from "react-router";
import AsideComp from "../components/Aside/Aside";
import MapComp from "../components/MapComp/MapComp";

function Layout() {
    return (
      <div className = "h-screen w-screen flex items-center">
        <AsideComp></AsideComp>
        <Outlet></Outlet>
        <MapComp ></MapComp>
      </div>
    );
  }
  
  export default Layout;