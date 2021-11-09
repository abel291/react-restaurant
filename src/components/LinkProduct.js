import { Link } from "react-router-dom"

const LinkProduct = ({ product, children }) => {
    return <Link to={"/product/" + product.category + "/" + product.slug}>{children}</Link>
}

export default LinkProduct
