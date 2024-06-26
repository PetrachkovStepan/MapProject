import axios from "axios";

const apiKey = process.env.REACT_APP_API_URL;


const URL ="https://api.opentripmap.com/0.1/"
const API_KEY ="5ae2e3f221c38a28845f05b64e1da5c77d52a0c0fb4ead7360e4eb9b"

export const getPlaceByName = async (name: string) => {
    console.log(apiKey)
    const $host1 = axios.create({
        baseURL: URL
    })
    let resp = await axios.get(URL + "ru/places/geoname?name=" + name + "&country=RU&apikey=" + API_KEY)
    console.log(resp)
}