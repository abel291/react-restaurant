import { ShoppingBagIcon, StarIcon } from "@heroicons/react/outline"

const ProductItem = () => {
    const item = {
        name: "CRISPY CHICKEN",
        start: 3,
        description: "American cheese, tomato relish, avocado, lettuce, red onion",
        img: "/img/burger.jpg",
        price: "$9.75",
    }
    return (
        <div className="rounded-lg overflow-hidden  border border-gray-200">
            <div className=" ">
                <img src={item.img} alt="dd" className="object-cover w-full h-60" />
            </div>
            <div className="py-6 px-5 space-y-3">
                <div className="flex space-x-2">
                    <StarIcon className=" h-5 w-5 text-yellow-400 leading-none" />
                    <StarIcon className=" h-5 w-5 text-yellow-400 leading-none" />
                    <StarIcon className=" h-5 w-5 text-yellow-400 leading-none" />
                    <StarIcon className=" h-5 w-5 text-yellow-400 leading-none" />
                </div>
                <h5 className="text-3xl lg:text-2xl font-primary text-gray-900 ">{item.name}</h5>
                <p className="font-light lg:text-sm text-gray-600">{item.description}</p>
                <div className="flex items-center justify-between">
                    <div className="bg-yellow-900 inline-block rounded py-2 px-3 ">
                        <h5 className=" text-yellow-400 font-primary font-bold text-2xl lg:text-xl leading-none">{item.price}</h5>
                    </div>
                    <div className="bg-yellow-400 flex items-end rounded py-2 px-3   text-gray-800 ">
                        <ShoppingBagIcon
                            className="h-5 w-5 lg:h-4 lg:w-4 mr-1 "
                        />
                        <div className="text-base lg:text-sm font-bold leading-none">Agregar</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
