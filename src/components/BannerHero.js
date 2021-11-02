const BannerHero = () => {
    return (
        <div className="pt-48 pb-36 relative ">
            <div className="text-center text-white">
                <div className="mb-3 font-roboto font-bold uppercase">data / data </div>
                <div className="text-7xl font-primary">Home home</div>
            </div>
            <div className="absolute inset-0 overflow-hidden z-[-1] filter brightness-[0.6]">
                <img className=" object-cover w-full" src="/img/home.jpg" alt="" />
            </div>
        </div>
    )
}

export default BannerHero
