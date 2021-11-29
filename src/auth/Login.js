import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import BannerHero from "../components/BannerHero"
import InputLabel from "../components/InputLabel"
import NotificationError from "../components/NotificationError"
import SpinnerLoad from "../components/SpinnerLoad"
import { useLogin, useUser } from "../hooks/useAuth"

const Login = () => {
    const history = useHistory()
    const location = history.location
    const { data: user } = useUser()
    const loginMutator = useLogin()

    let { from } = location.state || { from: { pathname: "/" } }

    const [dataForm, setDataForm] = useState({
        email: "example@exmaple.com",
        password: "123123",
        remember: true,
    })
    const handleChangle = (e) => {
        let target = e.target
        let value = target.type === "checkbox" ? target.checked : target.value
        setDataForm({ ...dataForm, [target.name]: value })
    }

    useEffect(() => {
        if (user) history.replace(from)
    }, [user, history, from])

    const handleSubmit = async (e) => {
        e.preventDefault()
        loginMutator.mutate(dataForm)
    }

    return (
        <main>
            <BannerHero title="Inicio de sesion" img="/img/auth/login.jpg" breadcrumb="" />
            <div className="flex items-center justify-center pb-content">
                <div className="max-w-md w-full space-y-8">
                    <h2 className="font-primary text-xl text-center px-5">Inicie sesión con su correo electrónico y contraseña</h2>
                    {loginMutator.error && <NotificationError error={loginMutator.error} />}
                    <form onSubmit={handleSubmit} className="space-y-7">
                        <div>
                            <InputLabel
                                require={true}
                                onChange={handleChangle}
                                name="email"
                                value={dataForm.email}
                                label={"Email *"}
                                type="email"
                            />
                        </div>
                        <div>
                            <InputLabel
                                require={true}
                                onChange={handleChangle}
                                type="password"
                                name="password"
                                value={dataForm.password}
                                label={"Contraseña *"}
                            />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <input
                                    name="remember"
                                    type="checkbox"
                                    className="h-4 w-4 rounded text-red"
                                    checked={dataForm.remember}
                                    onChange={handleChangle}
                                />
                                <label htmlFor="remember" className="ml-2 block ">
                                    Recordarme
                                </label>
                            </div>

                            <div>
                                <Link to="/" className="font-medium text-orange-600 hover:text-orange-500">
                                    Olvidaste tu contraseña?
                                </Link>
                            </div>
                        </div>
                        <button disabled={loginMutator.isLoading} className="w-full py-3 btn btn-red disabled:opacity-50  ">
                            {loginMutator.isLoading ? (
                                <span className="flex items-center justify-center">
                                    <SpinnerLoad /> cargando...
                                </span>
                            ) : (
                                "Ingresar"
                            )}
                        </button>
                    </form>
                    <div>
                        <p className="mt-2 text-center text-sm ">
                            <span>¿No tienes cuenta? </span>
                            <Link to="/register" className="font-bold text-orange-600 hover:text-orange-500">
                                Registrarte
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login
