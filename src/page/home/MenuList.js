import MenuItem from "./MenuItem"

const MenuList = ({title,menu,img}) => {
    console.log(menu)
    return (
        <div>
            <div className="text-center">
                <h3 className="font-primary text-red-500 text-4xl lg:text-5xl  ">{title}</h3>
            </div>
            <div className="md:mt-8 lg:mt-16 lg:px-16">
                <div className="grid lg:grid-cols-2  gap-y-0 gap-x-10 md:gap-y-8  divide-y divide-gray-400 divide-dotted md:divide-none">
                    {menu.map((item) => (
                        <div className="py-8 md:py-0 ">
                            <MenuItem key={item} />
                        </div>
                    ))}
                    
                </div>
                <div className="md:mt-8 lg:mt-16">
                    <img src={img} alt="d" className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default MenuList
