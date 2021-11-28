import { useQuery } from "react-query"

//import fecthPage from "../api/fakeFetch/fetchPage"
import apiClient from "../helpers/apiClient"

const usePage = (page) => {
    return useQuery(["page", page], ()=>fecthPage(page),{ staleTime: Infinity,retry :0})
}
const fecthPage=async(page)=>{
    const response = await apiClient.get('/page/'+page).then((response) => {
        return response.data
    })
    return response
    
}

export default usePage
