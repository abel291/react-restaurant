import routes from "../layout/routes"
import Card2 from "../page/home/Card2"

const Promo = () => {
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
            <div>
                <Card2 
                title="CARRERA" 
                subTitle="¿Quieres unirte a nuestro equipo?" 
                path={routes.team.path} 
                img="/img/home/team.jpg" 

                />
            </div>
            <div className="lg:col-span-2">
                <Card2 
                    title="ORDENA AHORA" 
                subTitle="¡Disfruta una Burger en casa!" 
                path={routes.menu.path} 
                img="/img/home/order.jpg" 
                />
            </div>
            <div>
                <Card2
                  title="TARJETAS REGALO" 
                subTitle="¡Regala Yummy!" 
                path={routes.giftCards.path} 
                img="/img/home/gift-card.jpg"  />
            </div>
        </div>
    )
}

export default Promo
