import BannerHero from "../../components/BannerHero"
import PageLoading from "../../components/PageLoading"
import PageError from "../../components/PageError"
import usePage from "../../hooks/usePage"
import CardLocation from "./CardLocation"

const Location = () => {
    return (
        <main>
            <BannerHero title="NUESTRAS UBICACIONES" img="/img/locations/banner.jpg" breadcrumb="Home / ubicacion" />
            <div className="container py-content">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <CardLocation
                        title="DOWNTOWN"
                        address="8721 M Central Avenue,los Angeles, CA 90036 Daily 11AM - 10PM"
                        img="/img/locations/img-1.jpg"
                    />
                    <CardLocation
                        title="CENTRAL CITY"
                        address="8721 M Central Avenue,los Angeles, CA 90036 Daily 11AM - 10PM"
                        img="/img/locations/img-2.jpg"
                    />
                    <CardLocation
                        title="HOLLYWOOD"
                        address="8721 M Central Avenue,los Angeles, CA 90036 Daily 11AM - 10PM"
                        img="/img/locations/img-3.jpg"
                    />
                </div>
            </div>
        </main>
    )
}

export default Location
