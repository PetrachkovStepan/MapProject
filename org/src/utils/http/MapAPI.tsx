import axios from "axios";


const URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

export const getPlaceByName = async (name: string) => {
    let resp = await axios.get(URL + "geoname?name=" + name + "&apikey=" + API_KEY)
    console.log(resp)
}
export const getPlacesByRadius = async (radius: number, lon: number, lat: number) => {
    let resp = await axios.get(URL + "radius?radius=" + radius + "&lon=" + lon + "&lat=" + lat + "&apikey=" + API_KEY)
    console.log(resp)
}
export const getPlaceInfoById = async (xid: string) => {
    xid = "R4682064"
    let resp = await axios.get(URL + "xid/" + xid + "?apikey=" + API_KEY)
    console.log(resp)
}