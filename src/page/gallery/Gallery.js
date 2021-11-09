import BannerHero from "../../components/BannerHero"
import usePage from "../../hooks/usePage"
import GalleryImagesList from "./GalleryImagesList"
import PageLoading from "../../components/PageLoading"
import PageError from "../../components/PageError"

const Gallery = () => {

    const { isLoading, error, data: pageData } = usePage("gallery")

    if (isLoading) return <PageLoading />

     if (error) return <PageError />
    return (
        <main>
            <BannerHero title="Galeria de imagenes" img="img/galleries/banner.jpg" breadcrumb="home / galeria" />
            <div className="container ">
                {pageData.menus.map((menu) => (
                    <GalleryImagesList title={menu.name} images={menu.images} />
                ))}
            </div>
        </main>
    )
}

export default Gallery
