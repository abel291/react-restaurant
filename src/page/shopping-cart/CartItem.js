import { Link } from "react-router-dom"
import { fomatCurrency } from "../../helpers/helpers"
import { useAddProductToCart, useRemoveProductToCart } from "../../hooks/useShoppingCart"
import SelectQuantity from "../product/SelectQuantity"

const CartItem = ({ product }) => {
    const addProductToCart = useAddProductToCart()
    const removeProductToCart = useRemoveProductToCart()

    const handleChangeQuantity = (quantity) => {
        if (quantity === product.stock || quantity <= 0 || addProductToCart.isLoading) {
            return
        }
        let id = product.id
        
        addProductToCart.mutate({ id, quantity })
    }

    const handleClickRemoveItem = () => {
        removeProductToCart.mutate({ id: product.id })
    }

    return (
        <>
            <div
                className={
                    "grid grid-cols-12 gap-y-8  py-4 relative " +
                    (removeProductToCart.isLoading || addProductToCart.isLoading ? "opacity-25" : "")
                }
            >
                <div className="col-span-4 lg:col-span-2 min-h-16 ">
                    <img src={product.img} alt="dd" className=" max-h-20 mx-auto" />
                </div>

                <div className="col-span-8 lg:col-span-6 ">
                    <div className="my-auto">
                        <Link to={"/product/" + product.slug}>
                            <h5 className="font-primary text-2xl">{product.name}</h5>
                        </Link>
                        <p className="font-light text-sm md:text-base mt-2">{product.description_min}</p>
                    </div>
                </div>

                <div className=" col-span-6 lg:col-span-2 ">
                    <div className="flex flex-col justify-between h-full">
                        <div className="w-auto">
                            <SelectQuantity quantity={product.quantity} stock={product.stock} onChange={handleChangeQuantity} />

                            <div>
                                {addProductToCart.error && <span className="text-sm text-red">{addProductToCart.error.message}</span>}
                            </div>
                        </div>
                        {product.quantity > 1 && <div className="text-sm text-gray-500 mt-2">1 x {fomatCurrency(product.price)}</div>}
                    </div>
                </div>

                <div className=" col-span-6 lg:col-span-2 text-right">
                    <div className="flex flex-col justify-between h-full">
                        <div className="font-primary text-2xl ">{fomatCurrency(product.quantity * product.price)}</div>
                        <div className="text-sm text-red mt-2">{removeProductToCart.error && removeProductToCart.error.message}</div>
                        <button className="text-sm text-blue-500 mt-2 font-medium text-right " onClick={handleClickRemoveItem}>
                            Remover
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
