import Card2 from "../page/home/Card2"

const Promo = () => {
    return (
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
    )
}

export default Promo
