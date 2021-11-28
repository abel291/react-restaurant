import BannerHero from "../../components/BannerHero"
import PageLoading from "../../components/PageLoading"
import PageError from "../../components/PageError"
import usePage from "../../hooks/usePage"
import MenuSectionList from "./MenuSectionList"

const Menu = () => {
    const { isLoading, error, data } = usePage("menu")

    if (isLoading) return <PageLoading />

    if (error) return <PageError />

    return (
        
        <main>
            <BannerHero img="/img/menu/banner-1.jpg" title="MENU" breadcrumb="/ Menu" />
            <div className="container ">
                {data.menu.map((category) => (
                    <MenuSectionList key={category.id} category={category} />
                ))}
            </div>
        </main>
    )
}

export default Menu
