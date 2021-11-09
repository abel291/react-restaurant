import fakeApi from "../fakeApi"

const fetchContact = async (dataForm) => {
    return await fakeApi(() => {
        return "ok"
    })
}

export default fetchContact
