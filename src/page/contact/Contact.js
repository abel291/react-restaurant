import BannerHero from "../../components/BannerHero"
import PageLoading from "../../components/PageLoading"
import PageError from "../../components/PageError"
import usePage from "../../hooks/usePage"
import Form from "./Form"
import Information from "./Information"
import MapFrime from "./MapFrime"

const Contact = () => {
    return (
        <main>
            <BannerHero title="CONTÁCTENOS" img="/img/contact/banner.jpg" />
            <div className="container py-content">
                <div className="py-content">
                    <Information />
                </div>
                <div className="py-content">
                    <MapFrime />
                </div>
                <div className="py-content">
                    <Form />
                </div>
            </div>
        </main>
    )
}

export default Contact
