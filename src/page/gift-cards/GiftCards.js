import BannerHero from "../../components/BannerHero"
import PageLoading from "../../components/PageLoading"
import PageError from "../../components/PageError"
import usePage from "../../hooks/usePage"
import GiftCardsItem from "./GiftCardsItem"

const GiftCards = () => {
    const { isLoading, error, data } = usePage("gift-cards")

    if (isLoading) return <PageLoading />

     if (error) return <PageError />
    return (
        <main>
            <BannerHero title="TARJETAS  DE REGALO" img="/img/gift-cards/banner.jpg" />
            <div className="container">
                <div className="max-w-xl mx-auto text-center py-content">
                    <h3 className="title-section">SELECCIONA TU TARJETA</h3>
                    <p className="font-light text-lg mt-5">
                        Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius
                        magna
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-content">
                    {data.cards.map((card) => (
                        <GiftCardsItem key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default GiftCards
