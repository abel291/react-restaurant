import BannerHero from "../../components/BannerHero"
import PageLoading from "../../components/PageLoading"
import PageError from "../../components/PageError"
import usePage from "../../hooks/usePage"
import Form from "./Form"
import Information from "./Information"
import MapFrime from "./MapFrime"

const Contact = () => {
    const { isLoading, error, data: pageData } = usePage("contact")

    if (isLoading) return <PageLoading />

     if (error) return <PageError />
    return (
        <main>
            <BannerHero img={pageData.banner.img} title={pageData.banner.title} />
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
