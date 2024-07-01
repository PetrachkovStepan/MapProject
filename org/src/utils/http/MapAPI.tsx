import axios from "axios";

const URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

export const getPlaceByName = async (name: string, lon: number | undefined, lat: number | undefined) => {
    const resp = await axios.get(URL + "autosuggest?name=" + name + "&radius=10000&lon="+ lon +"&lat=" + lat + "&limit=10&apikey=" + API_KEY)
    console.log(resp)
    return resp.data.features
}
export const getPlacesByRadius = async (radius: number, lon: number | undefined, lat: number | undefined) => {
    const resp = await axios.get(URL + "radius?radius=" + radius + "&lon=" + lon + "&lat=" + lat + "&apikey=" + API_KEY)
    console.log(resp)
    return resp.data.features
}
export const getPlaceInfoById = async (xid: string) => {
    const resp = await axios.get(URL + "xid/" + xid + "?apikey=" + API_KEY)
    console.log(resp)
}