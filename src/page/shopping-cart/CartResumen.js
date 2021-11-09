import { useRef } from "react"
import { fomatCurrency } from "../../helpers/helpers"
import { useApplyDiscount } from "../../hooks/useShoppingCart"
import discountCodes from "../../api/fakeData/discountCodes.json"
const CartResumen = ({ shoppingCart }) => {
    const discountRef = useRef("")
    const applyDiscount = useApplyDiscount()
    const handleClickDiscount = (e) => {
        if (discountRef.current.value === "") {
            return
        }
        let code = discountRef.current.value
        applyDiscount.mutate({ code })
    }

    return (
        <div className="mt-20  flex justify-end">
            <div className="w-full lg:w-96">
                <div className=" p-12 rounded-md bg-gray-100 text-left">
                    <h5 className="text-3xl font-primary"> Resumen del pedido</h5>
                    <div className="mt-5 divide-y divide-gray-200 font-medium text-xl">
                        <div className="flex justify-between py-5  leading-none">
                            <div>Subtotal</div>
                            <div>{fomatCurrency(shoppingCart.sub_total)}</div>
                        </div>
                        {shoppingCart.discount && (
                            <div className="flex justify-between py-5 text-green-500 ">
                                <div>Descuento {shoppingCart.discount.percent}%</div>
                                <div>-{fomatCurrency(shoppingCart.discount.amount)}</div>
                            </div>
                        )}
                        <div className="flex justify-between py-5 ">
                            <div>Total</div>
                            <div>{fomatCurrency(shoppingCart.total)}</div>
                        </div>
                    </div>
                    <button className="btn btn-lg w-full bg-red text-white mt-5">Proceder a pagar</button>
                </div>
                <div className="flex mt-5">
                    <input ref={discountRef} type="text" className="flex-grow" />
                    <button
                        disabled={applyDiscount.isLoading}
                        onClick={handleClickDiscount}
                        className="btn px-5 py-3 bg-yellow-500 text-white ml-3 disabled:opacity-50"
                    >
                        {applyDiscount.isLoading ? "Cargando...." : "Aplicar Cupon"}
                    </button>
                </div>
                <div>
                    {discountCodes.map((item) => (
                        <span className="text-sm text-gray-400 ml-3">{item.code}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CartResumen
