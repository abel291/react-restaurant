import BannerHero from "../../components/BannerHero"
import usePage from "../../hooks/usePage"
import GalleryImagesList from "./GalleryImagesList"
import PageLoading from "../../components/PageLoading"

const Gallery = () => {

    const { isLoading, error, data: pageData } = usePage("gallery")

    if (isLoading) return <PageLoading />

    if (error) return "error"
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
