//sacado de https://platzi.com/blog/que-es-y-como-funcionan-las-promesas-en-javascript

const fakeApi = async (callback) => {
    return await new Promise((resolve, reject) => {
        setTimeout(
            () => {
               
                return resolve(callback())
            },1000)

        //const number = Math.floor(Math.random() * 10)
        // setTimeout(
        //     () => number > 5
        //         ? resolve(number)
        //         : reject(new Error('Menor a 5')),
        //     1000
        // );
    })
}
export default fakeApi
