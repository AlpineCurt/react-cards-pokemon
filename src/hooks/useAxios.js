import {useState} from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);
    const getRequest = async (restOfUrl=null) => {
        let url = baseUrl;
        if (restOfUrl) url += restOfUrl;
        const resp = await axios.get(url);
        setData([...data, {...resp.data, id: uuid()}]);
    }
    return [data, getRequest];
}

export default useAxios;