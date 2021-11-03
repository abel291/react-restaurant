import { Link } from "react-router-dom"

const Button = ({path="/",title="Conoce mas"}) => {
    return (
        <Link to={path} className=" inline-block py-3 px-8 bg-[#e3000e] font-primary text-base text-white leading-none rounded">
            {title}
        </Link>
    )
}

export default Button
