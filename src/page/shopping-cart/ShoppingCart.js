import BannerHero from "../../components/BannerHero"
import PageLoading from "../../components/PageLoading"
import PageError from "../../components/PageError"
import { useShoppingCart } from "../../hooks/useShoppingCart"
import CartItem from "./CartItem"
import CartResumen from "./CartResumen"
import Form from "./Form"

const ShoppingCart = () => {
    const { isLoading, error, data: shoppingCart } = useShoppingCart()

    if (isLoading) return <PageLoading />

    if (error) return <PageError />
    
    return (
        <main>
            <BannerHero title="Carrito de compras" img="/img/shopping-cart/banner.jpg" breadcrumb="home / carrtio de compra" />
            <div className="container ">
                <div className="py-content max-w-5xl mx-auto">
                    {shoppingCart.products.length === 0 ? (
                        <div className="text-center text-2xl font-primary">No tienes articulos en el carrito</div>
                    ) : (
                        <>
                            <div>
                                <h2 className="font-primary text-4xl">Lista de productos</h2>
                                <div className=" mx-auto divide-y divide-gray-200 mt-10">
                                    {shoppingCart.products.map((product) => (
                                        <CartItem key={product.id} product={product} />
                                    ))}
                                </div>
                            </div>
                            <div className="mt-24">
                                <h2 className="font-primary text-4xl">Resumen y Datos de envio</h2>
                                <div className="grid lg:grid-cols-12 gap-8 mt-10">
                                    <div className="lg:col-span-7">
                                        <Form />
                                    </div>
                                    <div className="lg:col-span-5">
                                        <CartResumen />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    )
}

export default ShoppingCart
