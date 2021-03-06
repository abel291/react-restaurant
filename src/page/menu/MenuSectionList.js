import ProductItem from "../../components/ProductItem"

const MenuSectionList = ({ category }) => {
    return (
        <div className="py-content">
            <div className="text-center">
                <h3 className="title-section text-red">{category.name}</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-9 lg:mt-16">
                {category.products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default MenuSectionList
