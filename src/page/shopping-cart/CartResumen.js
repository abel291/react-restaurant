import { XCircleIcon, XIcon } from "@heroicons/react/solid"
import { useRef } from "react"
import { useQuery } from "react-query"
import SpinnerLoad from "../../components/SpinnerLoad"
import apiClient from "../../helpers/apiClient"
import { fomatCurrency } from "../../helpers/helpers"
import { useApplyDiscount, useRemoveDiscount, useShoppingCart } from "../../hooks/useShoppingCart"

const CartResumen = () => {
    const discountRef = useRef("")
    const applyDiscount = useApplyDiscount()
    const removeDiscount = useRemoveDiscount()

    const { isLoading, error, data: shoppingCart } = useShoppingCart()

    ///
    const discount_availables = useQuery(
        "discount_availables",
        async () => {
            const response = await apiClient.get("discount-availables").then((res) => {
                return res.data
            })
            return response
        },
        {
            staleTime: Infinity,
        }
    )
    ///

    if (isLoading) return "..."
    if (error) return "error"

    const handleClickDiscount = (e) => {
        
        if (discountRef.current.value === "") {
            return
        }
        let code = discountRef.current.value
        applyDiscount.mutate({ code })
        discountRef.current.value=''
    }

    const handleClickRemoveDiscount = (code) => {
        removeDiscount.mutate({code})
    }

    return (
        <div>
            <div className=" p-12 rounded-md bg-gray-100 text-left relative">
                {(removeDiscount.isLoading || applyDiscount.isLoading) && (
                    <div className="flex items-center absolute inset-0 justify-center">
                        <div className="absolute inset-0 bg-gray-300 filter brightness-125 opacity-50"></div>
                        <SpinnerLoad styleClass="h-7 w-7" />
                    </div>
                )}

                <h5 className="text-3xl font-primary"> Pedidos</h5>
                <div className="mt-5 divide-y divide-gray-200 font-medium ">
                    <div className="flex justify-between py-4  leading-none">
                        <div>Subtotal</div>
                        <div>{fomatCurrency(shoppingCart.meta.sub_total)}</div>
                    </div>
                    <div className="flex justify-between py-4  leading-none">
                        <div>Shipping</div>
                        <div>{fomatCurrency(shoppingCart.meta.shipping)}</div>
                    </div>
                    <div className="flex justify-between py-4  leading-none">
                        <div>Tax ({shoppingCart.meta.tax_percent} %)</div>
                        <div>{fomatCurrency(shoppingCart.meta.tax_amount)}</div>
                    </div>
                    {shoppingCart.meta.discount_apply && (

                        <div className="flex justify-between py-4 text-green-500 ">
                            <div className="flex items-center">
                                <button onClick={()=>handleClickRemoveDiscount(shoppingCart.meta.discount_apply.code)}>
                                    <XIcon className="h-5 w-5 text-gray-400" />
                                </button>
                                <div className="ml-2">Descuento {shoppingCart.meta.discount_apply.percent}%</div>
                            </div>
                            <div>-{fomatCurrency(shoppingCart.meta.discount_apply.amount)}</div>
                        </div>
                    )}
                    <div className="flex justify-between py-5 text-xl font-bold ">
                        <div>Total</div>
                        <div>{fomatCurrency(shoppingCart.meta.total)}</div>
                    </div>
                </div>
                <button className="btn btn-lg w-full bg-red text-white mt-5">Proceder a pagar</button>
            </div>
            <div className="flex mt-5">
                <input ref={discountRef} type="text" className="flex-grow" />
                <button
                    disabled={applyDiscount.isLoading}
                    onClick={handleClickDiscount}
                    className="btn px-5 py-3 bg-yellow-500 text-white ml-3 disabled:opacity-50 "
                >
                    {applyDiscount.isLoading ? "Cargando...." : "Aplicar Cupon"}
                </button>
            </div>
            <span className="text-sm text-red">{applyDiscount.error && applyDiscount.error.message}</span>

            {discount_availables.isLoading && "..."}
            {discount_availables.data && (
                <div className="space-x-3 mt-2">
                    {discount_availables.data.map((item) => (
                        <span key={item.code} className="text-sm text-gray-400 ">
                            {item.code}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CartResumen
