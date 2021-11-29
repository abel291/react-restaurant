import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import BannerHero from "../components/BannerHero"
import InputLabel from "../components/InputLabel"

import SpinnerLoad from "../components/SpinnerLoad"
import NotificationError from "../components/NotificationError"
import { useRegister, useUser } from "../hooks/useAuth"

const Register = () => {
    const history = useHistory()
    const { data: user } = useUser()
    let email = "example" + Math.floor(Math.random() * 101) + "@example.com"

    const [dataRegister, setDataRegister] = useState({
        name: "example",
        email: email,
        email_confirmation: email,
        phone: "32244321",
        country: "Mexico",
        city: "Mexico",
        password: "123123",
        password_confirmation: "123123",
    })

    const registerMutator = useRegister()

    const handleChangle = (e) => {
        let target = e.target
        let value = target.type === "checkbox" ? target.checked : target.value
        setDataRegister({ ...dataRegister, [target.name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        registerMutator.mutate(dataRegister)
    }
    useEffect(() => {
        if (user) history.replace("/")
    }, [user, history])

    return (
        <main>
            <BannerHero title="Registro" img="/img/auth/register.jpg" breadcrumb="" />
            <div className="pb-content flex items-center justify-center ">
                <div className="max-w-xl w-full space-y-8">
                    <div className="text-center">
                        <h2 className="font-primary text-xl text-center px-5">Registrate</h2>
                        <span className="text-sm ">Al registrarse, acepta nuestros términos y política</span>
                    </div>
                    {registerMutator.error && <NotificationError error={registerMutator.error} />}
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                            <div>
                                <InputLabel
                                    required={true}
                                    onChange={handleChangle}
                                    name="name"
                                    value={dataRegister.name}
                                    label={"Nombre y Apellido *"}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    required={true}
                                    onChange={handleChangle}
                                    name="phone"
                                    value={dataRegister.phone}
                                    label={"Telefono *"}
                                />
                            </div>

                            <div>
                                <InputLabel
                                    type="email"
                                    required={true}
                                    onChange={handleChangle}
                                    name="email"
                                    value={dataRegister.email}
                                    label={"Email *"}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    type="email"
                                    required={true}
                                    onChange={handleChangle}
                                    name="email_confirmation"
                                    value={dataRegister.email_confirmation}
                                    label={"ConfirmarEmail *"}
                                />
                            </div>

                            <div>
                                <InputLabel
                                    required={true}
                                    onChange={handleChangle}
                                    name="country"
                                    value={dataRegister.country}
                                    label={"Pais *"}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    required={true}
                                    onChange={handleChangle}
                                    name="city"
                                    value={dataRegister.city}
                                    label={"Ciudad *"}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    required={true}
                                    onChange={handleChangle}
                                    type="password"
                                    name="password"
                                    value={dataRegister.password}
                                    label={"Contraseña *"}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    required={true}
                                    onChange={handleChangle}
                                    type="password"
                                    name="password_confirmation"
                                    value={dataRegister.password_confirmation}
                                    label={"Confirmar contraseña *"}
                                />
                            </div>
                        </div>

                        <button disabled={registerMutator.isLoading} className="w-full py-3 btn btn-red disabled:opacity-50  ">
                            {registerMutator.isLoading ? (
                                <span className="flex items-center justify-center">
                                    <SpinnerLoad /> cargando...
                                </span>
                            ) : (
                                "Registrarse"
                            )}
                        </button>

                        <p className="mt-2 text-center text-sm ">
                            <span>¿Ya tienes una cuenta? </span>
                            <Link to="/login" className="font-bold text-orange-600 hover:text-orange-500">
                                Inicia sesión
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Register
