import { useState } from "react"

const Form = () => {
    const [dataAdress, setDataAdress] = useState({
        name: "user",
        address: "cl 44-556 UE19",
        phone: "344-567-7789",
        email: "user@user.com",
        city: "Mexico",
        postalCode: "112233",
        note: "",
    })
    const handleSubmit = () => {}
    const handleChangle = (e) => {
        let target = e.target
        let value = target.value
        setDataAdress({ ...dataAdress, [target.name]: value })
    }

    return (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="text-sm font-medium block">
                    Nombre
                </label>
                <input  className="w-full" type="text" name="name" required onChange={handleChangle} value={dataAdress.name} />
            </div>
            <div className=" md:col-span-2 ">
                <label htmlFor="email" className="text-sm font-medium block">
                    Direccions
                </label>
                <input className="w-full" type="text" name="address" required onChange={handleChangle} value={dataAdress.address} />
            </div>

            <div className=" ">
                <label htmlFor="email" className="text-sm font-medium block">
                    Telefono
                </label>
                <input className="w-full" type="text" name="phone" required onChange={handleChangle} value={dataAdress.phone} />
            </div>

            <div className=" ">
                <label htmlFor="email" className="text-sm font-medium block">
                    Email
                </label>
                <input className="w-full" type="email" name="email" required onChange={handleChangle} value={dataAdress.email} />
            </div>

            <div className=" ">
                <label htmlFor="email" className="text-sm font-medium block">
                    Ciudad
                </label>
                <input className="w-full" type="text" name="city" required onChange={handleChangle} value={dataAdress.city} />
            </div>

            <div className=" ">
                <label htmlFor="email" className="text-sm font-medium block">
                    Codigo Postal
                </label>
                <input className="w-full" type="text" name="postalCode" required onChange={handleChangle} value={dataAdress.postalCode} />
            </div>

            <div className="md:col-span-2 ">
                <label htmlFor="email" className="text-sm font-medium block">
                    Nota
                </label>
                <textarea name="note" onChange={handleChangle} className="mt-1 w-full text-sm px-4 py-3" rows="5" value={dataAdress.note} />
            </div>

            
        </form>
    )
}

export default Form
