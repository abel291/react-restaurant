

const Card2 = () => {
    return (
        <div
            className="pb-12 pt-12 md:pb-12 md:pt-24 lg:pb-12 lg:pt-44 flex flex-col items-center justify-end rounded-lg text-white bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url(/img/home.jpg)" }}
        >
            <h3 className="text-3xl  lg:text-5xl leading-none font-primary">ORDER NOW</h3>
            <p className=" text-base lg:text-lg leading-none  mt-3">Enjoy Testo Burgers at home</p>

            <div className="mt-4">
            <button className="btn btn-red btn-sm">Conoce mas</button>
            </div>
        </div>
    )
}

export default Card2
