import BannerHero from "../../components/BannerHero"
//import PageLoading from "../../components/PageLoading"
//import PageError from "../../components/PageError"
import Promo from "../../components/Promo"
import Subscribe from "../../components/Subscribe"
//import usePage from "../../hooks/usePage"
import Burgers from "./Burgers"
import Section1 from "./Section1"
import Section2 from "./Section2"
const About = () => {
    

    return (
        <main>
            <BannerHero title="Acerca de nosotros" img="/img/about/banner.jpg" breadcrumb="home / acerca de nosotros" />
            <div className="container py-content">
               <Section1/>
            </div>
            <div className="py-content">
                <Burgers />
            </div>
            <div className="container py-content">
                <Section2/>
            </div>
            <div className=" px-0 mx-3 py-content  ">
                <Promo />
            </div>
            <div className="container py-content">
                <Subscribe />
            </div>
        </main>
    )
}

export default About
