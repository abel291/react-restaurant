import LinkProduct from "../../components/LinkProduct"
import { fomatCurrency } from "../../helpers/helpers"
import { useAddProductToCart, useRemoveProductToCart } from "../../hooks/useShoppingCart"
import SelectValues from "../product/SelectValues"

const CartItem = ({ product }) => {
    const addProductToCart = useAddProductToCart()
    const removeProductToCart = useRemoveProductToCart()

    const handleChangeQuantity = (e) => {
        let quantity = e.target.value
        let slug = product.slug
        addProductToCart.mutate({ slug, quantity })
    }

    const handleClickRemoveItem = () => {
        removeProductToCart.mutate({ slug: product.slug })
    }

    return (
        <div className={"grid grid-cols-12 gap-y-8  py-4 " + ((removeProductToCart.isLoading || addProductToCart.isLoading) && "opacity-25")}>
            <div className="col-span-4 lg:col-span-2 min-h-16 ">
                <img src={product.img} alt="dd" className=" max-h-20 mx-auto" />
            </div>

            <div className="col-span-8 lg:col-span-6 ">
                <div className="my-auto">
                    <LinkProduct product={product}>
                        <h5 className="font-primary text-2xl">{product.name}</h5>
                    </LinkProduct>
                    <p className="font-light text-sm md:text-base mt-2">{product.description_min}</p>
                </div>
            </div>

            <div className=" col-span-6 lg:col-span-2 ">
                <div className="flex flex-col justify-between h-full">
                    <div className="w-auto">
                        <SelectValues value={product.quantity} product={product} onChange={handleChangeQuantity} />
                    </div>
                    {product.quantity > 1 && <div className="text-sm text-gray-500 mt-2">1 x {fomatCurrency(product.price)}</div>}
                </div>
            </div>

            <div className=" col-span-6 lg:col-span-2 text-right">
                <div className="flex flex-col justify-between h-full">
                    <div className="font-primary text-2xl ">{fomatCurrency(product.quantity * product.price)}</div>
                    <button className="text-sm text-blue-500 mt-2 font-medium text-right " onClick={handleClickRemoveItem}>
                        Remover
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
