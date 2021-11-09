import BannerHero from "../../components/BannerHero"
import ProductItem from "../../components/ProductItem"
import Promo from "../../components/Promo"
import BannerDelivery from "./BannerDelivery"
import Card from "./Card"
import MenuList from "./MenuList"

import usePage from "../../hooks/usePage"
import PageLoading from "../../components/PageLoading"
import PageError from "../../components/PageError"

const Home = () => {
    const { isLoading, error, data: pageData } = usePage("home")

    if (isLoading) return <PageLoading />

    if (error) return <PageError />

    return (
        <main>
            <BannerHero img={pageData.banner.img} title={pageData.banner.title} breadcrumb="" />
            <div className="container ">
                <div className=" py-content">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {pageData.promos.map((promo) => (
                            <div key={promo.title}>
                                <Card title={promo.title} subTitle={promo.sub_title} img={promo.img} path={promo.img} />
                            </div>
                        ))}
                        {/* <div className="md:col-span-6 lg:col-span-5">
                            <Card title="GET YOUR FREE" subTitle="CHEESE FRIES" img="/img/card-banner-2.jpg" path="/" />
                        </div>
                        <div className="md:col-span-6 lg:col-span-7">
                            <Card title="CRISPY CHICKEN" subTitle="BURGER IS BACK!" img="/img/card-banner-1.jpg" path="/" />
                        </div> */}
                    </div>
                </div>
                <div className=" py-content">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pageData.productsFeatured.map((product) => (
                            <ProductItem product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </div>
            <div className=" px-0 mx-3 py-content  ">
                <Promo />
            </div>
            <div className="container   ">
                {pageData.categories_section.map((category) => (
                    <div className="py-content" key={category.id}>
                        <MenuList title={category.name} products={category.products} img={category.img} />
                    </div>
                ))}
            </div>
            <div className=" pt-content">
                <BannerDelivery />
            </div>
        </main>
    )
}

export default Home
