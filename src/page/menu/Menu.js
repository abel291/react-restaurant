import BannerHero from "../../components/BannerHero"
import PageLoading from "../../components/PageLoading"
import PageError from "../../components/PageError"
import usePage from "../../hooks/usePage"
import MenuSectionList from "./MenuSectionList"

const Menu = () => {
    const { isLoading, error, data: pageData } = usePage("menus")

    if (isLoading) return <PageLoading />

     if (error) return <PageError />

    return (
        <main>
            <BannerHero img={pageData.banner.img} title={pageData.banner.title} breadcrumb="/ Menu" />
            <div className="container ">
                {pageData.categories.map((category,index) => (
                    <MenuSectionList key={category.id} title={category.name} products={category.products} />
                ))}
            </div>
        </main>
    )
}

export default Menu
