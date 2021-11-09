import { useQuery } from "react-query"

import fecthPage from "../api/fakeFetch/fetchPage"

const usePage = (page) => {
    return useQuery(["page", page], ()=>fecthPage(page))
}

export default usePage
