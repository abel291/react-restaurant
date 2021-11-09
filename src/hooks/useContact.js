import { useMutation, useQuery } from "react-query"
import fetchContact from "../api/fakeFetch/fetchContact"

const useContact = () => {
    return useMutation(fetchContact)
}

export default useContact
