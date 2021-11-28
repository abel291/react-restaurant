import BannerHero from "../../components/BannerHero"
import PageLoading from "../../components/PageLoading"
import PageError from "../../components/PageError"
import usePage from "../../hooks/usePage"
import FaqItem from "./FaqItem"

const Faq = () => {
    
    return (
        <main>
            <BannerHero title="PREGUNTAS FRECUENTES" img="/img/faq/banner.jpg" />
            <div className="container py-content">
                <div className="grid grid-cols-1 md:grid-cols-2   gap-x-6 gap-y-8 md:gap-y-12 ">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <FaqItem item={item} />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Faq
