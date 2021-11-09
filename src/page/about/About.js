import BannerHero from "../../components/BannerHero"
import PageLoading from "../../components/PageLoading"
import PageError from "../../components/PageError"
import Promo from "../../components/Promo"
import Subscribe from "../../components/Subscribe"
import usePage from "../../hooks/usePage"
import Burgers from "./Burgers"
const About = () => {
    const { isLoading, error, data: pageData } = usePage("about")

    if (isLoading) return <PageLoading />

     if (error) return <PageError />

    return (
        <main>
            <BannerHero img={pageData.banner.img} title={pageData.banner.title} breadcrumb="home / acerca de nosotros" />

            <div className="container py-content">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-7 lg:gap-x-10">
                    <div>
                        <img src="/img/about/about-1.png" alt="dd" className="w-full rounded-lg" />
                    </div>
                    <div className="mt-8 lg:mt-12 lg:pr-6">
                        <h2 className="font-primary text-4xl lg:text-5xl lg:leading-tight ">
                            NADA UNE A LA GENTE COMO UNA BUENA HAMBURGUESA
                        </h2>

                        <p className=" leading-normal font-light text-lg mt-8">
                            Semper lacus cursus porta primis ligula risus tempus and sagittis ipsum mauris lectus laoreet purus ipsum tempor
                            enim ipsum porta justo integer ultrice aligula lectus aenean magna and pulvinar purus at pretium gravida
                            <ul className=" ml-4 mt-5 style   list-disc space-y-3">
                                <li>
                                    Fringilla risus, luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor
                                    sapien{" "}
                                </li>
                                <li>Quaerat sodales sapien euismod purus blandit quaerat</li>
                                <li>Nemo ipsam egestas volute turpis dolores ut aliquam sodales sapien undo pretium a purus mauris</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-content">
                <Burgers />
            </div>
            <div className="container py-content">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                    <div>
                        <h2 className="font-primary text-4xl lg:text-5xl lg:mt-12 lg:leading-tight">
                            DESCUBRE EL NUEVO SABOR DE LA HAMBURGUESA
                        </h2>
                        <p className="leading-normal text-lg font-light mt-8 ">
                            Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor an tempus feugiat dolor lacinia
                            cubilia a curae integer orci congue and metus mollislorem primis
                        </p>
                        <img className="rounded  mt-8" src="/img/about/about-2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="rounded mt-8 md:mt-0" src="/img/about/about-3.jpg" alt="" />
                        <p className="leading-normal text-lg font-light mt-8">
                            Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor an tempus feugiat dolor lacinia
                            cubilia a curae integer orci congue and metus mollislorem primis
                        </p>
                    </div>
                </div>
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
