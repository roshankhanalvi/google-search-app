import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"
const params = {
    key: "AIzaSyBbqd1LrO5bTlUq5SWfyqvtW0lJPGj4gns",
    cx: "751a18a6ecd99420b"
}

export const fetchDataFromApi = async (payload) => { 
    const {data} = await axios.get(BASE_URL,{params:{...params,...payload}})
    return data
};
