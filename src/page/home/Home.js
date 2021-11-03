import BannerHero from "../../components/BannerHero"
import Button from "../../components/Button"
import ProductItem from "../../components/ProductItem"
import BannerDelivery from "./BannerDelivery"
import Card from "./Card"
import Card2 from "./Card2"
import MenuItem from "./MenuItem"
import MenuList from "./MenuList"

const Home = () => {
    return (
        <main>
            <BannerHero />
            <div className="container ">
                <div className=" py-content">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="md:col-span-6 lg:col-span-5">
                            <Card title="GET YOUR FREE" subTitle="CHEESE FRIES" img="/img/card-banner-2.jpg" path="/" />
                        </div>
                        <div className="md:col-span-6 lg:col-span-7">
                            <Card title="CRISPY CHICKEN" subTitle="BURGER IS BACK!" img="/img/card-banner-1.jpg" path="/" />
                        </div>
                    </div>
                </div>
                <div className=" py-content">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <ProductItem key={item} />
                        ))}
                    </div>
                </div>
            </div>
            <div className=" px-0 mx-3 py-content  ">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                    <div>
                        <Card2 />
                    </div>
                    <div className="lg:col-span-2">
                        <Card2 />
                    </div>
                    <div>
                        <Card2 />
                    </div>
                </div>
            </div>
            <div className="container py-content  ">
                <MenuList title="APERITIVOS" menu={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} img="/img/home-2.jpg" />
                <MenuList title="Pastas y ensaladas" menu={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} img="/img/home-3.jpg" />
            </div>
            <div className=" py-content">
                <BannerDelivery />
            </div>
        </main>
    )
}

export default Home
