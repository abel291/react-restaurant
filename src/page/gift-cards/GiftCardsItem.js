import { useAddProductToCart } from "../../hooks/useShoppingCart"

const GiftCardsItem = ({ card }) => {
    const addProductToCart = useAddProductToCart()

    const handlehandleClickAddProductToCart = (e) => {
        let slug = card.slug
        addProductToCart.mutate({ slug, quantity: 1 })
    }
    return (
        <div className="text-center">
            <img src={card.img} alt="gift-card" className="w-full" />

            <h5 className="mt-6 text-3xl font-primary">${card.price} Gift Card</h5>

            <p className="mt-3 font-light text-lg px-[5%]">{card.description_min}</p>

            <button disabled={addProductToCart.isLoading} onClick={handlehandleClickAddProductToCart} className="btn btn-sm btn-red mt-4">
                {addProductToCart.isLoading ? "..." : "Añadir al carrito"}
            </button>
        </div>
    )
}

export default GiftCardsItem
