import { ShoppingBagIcon } from "@heroicons/react/outline"
import { useState } from "react"
import Stars from "../../components/Stars"
import { useAddProductToCart } from "../../hooks/useShoppingCart"
import { fomatCurrency } from "../../helpers/helpers"
import SelectValues from "./SelectValues"

const Feature = ({ product }) => {
    const [quantity, setquantity] = useState(1)
    const handleChangeQuantity = (e) => {
        setquantity(e.target.value)
    }

    const addProductToCart = useAddProductToCart()

    const handlehandleClickAddProductToCart = (e) => {
        let slug = product.slug
        addProductToCart.mutate({ slug, quantity })
    }

    return (
        <div className="space-y-3 lg:space-y-5">
            <h1 className="title-section">{product.name}</h1>
            <div>
                <Stars quantity={product.quantity_start} />
            </div>
            <div className="text-3xl  lg:text-4xl font-primary">
                {product.price_old>0 && <span className="  text-gray-400 line-through">{fomatCurrency(product.price_old)}</span>}
                <span className=" text-yellow-400 ml-4">{fomatCurrency(product.price)}</span>
            </div>

            <p className="font-light text-lg">{product.descripction_min}</p>

            <div className="divide-y divide-gray-200">
                {product.portion_size && (
                    <div className="flex items-center justify-between py-3">
                        <div className="font-bold">Tamaño de porcion</div>
                        <div>{product.portion_size}</div>
                    </div>
                )}
                {product.calories && (
                    <div className="flex items-center justify-between py-3">
                        <div className="font-bold">Calorias</div>
                        <div>{product.calories}</div>
                    </div>
                )}
                {product.allergies && (
                    <div className="flex items-center justify-between py-3">
                        <div className="font-bold">Alergias</div>
                        <div>{product.allergies}</div>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="">
                    <SelectValues value={quantity} product={product} onChange={handleChangeQuantity} />
                </div>

                <button
                    className=" flex items-center bg-yellow-400 py-3 px-8 rounded  justify-center md:justify-start"
                    onClick={handlehandleClickAddProductToCart}
                    disabled={addProductToCart.isLoading}
                >
                    {addProductToCart.isLoading && <span className=" leading-none font-bold ml-2">agregando....</span>}

                    {!addProductToCart.isLoading && (
                        <>
                            <ShoppingBagIcon className="h-5 w-5  " />
                            <span className=" leading-none font-bold ml-2">Añadir al carrito</span>
                        </>
                    )}
                </button>
            </div>
            <div className="">
                <ul className="font-light list-disc  space-y-1 text-md mt-6 lg:mt-10 ml-4">
                    <li>Aceptamos tarjetas de crédito o efectivo a mensajería</li>
                    <li>El costo de envío es de $ 2 (Gratis desde $ 35)</li>
                    <li>Pedido antes del mediodía para envío el mismo día</li>
                </ul>
            </div>
        </div>
    )
}

export default Feature
