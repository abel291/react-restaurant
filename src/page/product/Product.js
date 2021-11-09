import { useEffect } from "react"
import { useParams } from "react-router"
import BannerHero from "../../components/BannerHero"
import PageLoading from "../../components/PageLoading"
import useProduct from "../../hooks/useProduct"

import Description from "./Description"

import Feature from "./Feature"
import Images from "./Images"

import RelatedProducts from "./RelatedProducts"

const Product = () => {
    const { categorySlug, productSlug } = useParams()

    const { isLoading, error, data } = useProduct(categorySlug, productSlug)
    
    if (isLoading) return <PageLoading />

    if (error) return "error"

    return (
        <main>
            <BannerHero title={data.product.name} img={data.product.banner} />
            <div className="container  max-w-7xl">
                <div className="py-content">
                    <div className="flex flex-wrap ">
                        <div className="w-full lg:w-7/12">
                            <Images img={data.product.img} images={data.product.images} />
                        </div>
                        <div className="w-full lg:w-5/12 lg:pl-10 mt-12 lg:mt-0">
                            <Feature product={data.product} />
                        </div>
                    </div>
                </div>
                <div className="py-content">
                    <Description />
                </div>
            </div>
            <div className="pt-content">
                <RelatedProducts products={data.relateProducts} />
            </div>
        </main>
    )
}

export default Product
