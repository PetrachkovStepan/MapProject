import { useTypeSelector } from "@//hooks/useTypeSelector"
import { SET_ROTE } from "@//store/routeReduser"
import targetImg from "@assets/Target.svg"
import { useEffect } from "react";
import { useDispatch } from "react-redux"

function RouteButton() {
    const dispatch = useDispatch()
    const state = useTypeSelector(state => state.place)
    const routeState = useTypeSelector(state => state.route)
    useEffect(() => {
        localStorage.setItem("isRoute", "false")
        dispatch({type: SET_ROTE, routeInfo: false})
    },[]);
    const buildRoute = () => {
        localStorage.setItem("destLat", state.item.point.lat.toString())
        localStorage.setItem("destLng", state.item.point.lon.toString())
        localStorage.setItem("isRoute", "true")
        dispatch({type: SET_ROTE, routeInfo: true})
        console.log(routeState);
        

    }
    return (
        <button className=" flex justify-between items-center h-[40px] sm:w-[132px] rounded-[6px] px-[25px] bg-blue"
            onClick={buildRoute}>
            <img src={targetImg} alt="" className=" h-[20px] w-[15px]"/>
            <div className="text-white text-[0px] sm:text-[14px]">Маршрут</div>
        </button>
    );
}
  
export default RouteButton;