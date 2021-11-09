import About from "../page/about/About"
import Contact from "../page/contact/Contact"
import Faq from "../page/faq/Faq"
import Gallery from "../page/gallery/Gallery"
import GiftCards from "../page/gift-cards/GiftCards"
import Home from "../page/home/Home"
import Location from "../page/location/Location"
import Menu from "../page/menu/Menu"
import Product from "../page/product/Product"
import ShoppingCart from "../page/shopping-cart/ShoppingCart"
import Team from "../page/team/Team"
import Terms from "../page/terms/Terms"

const routes = {
    home: {
        name: "Inicio",
        path: "/",
        component: Home,
    },
    menu: {
        name: "Menu",
        path: "/menu",
        component: Menu,
    },
    about: {
        name: "Acerca de Nosotros",
        path: "/about",
        component: About,
    },
    gallery: {
        name: "Galeria",
        path: "/gallery",
        component: Gallery,
    },
    // blog: {
    //     name: "Blog",
    //     path: "/blog",
    //     component:Home
    // },
    hours: {
        name: "Horario y hubicacion",
        path: "/location",
        component: Location,
    },
    team: {
        name: "Nuestro equipo",
        path: "/team",
        component: Team,
    },
    faqs: {
        name: "Preguntas Frecuentes",
        path: "/faq",
        component: Faq,
    },
    terms: {
        name: "Termino y condiciones",
        path: "/terms",
        component: Terms,
    },
    giftCards: {
        name: "Targeta de regalo",
        path: "/gift-cards",
        component: GiftCards,
    },
    contacts: {
        name: "Contáctenos",
        path: "/contact",
        component: Contact,
    },
    product: {
        name: "product",
        //path: "/product/:slug",
        path: "/product/:categorySlug/:productSlug",
        component: Product,
    },
    shoppingCart: {
        name: "Carrtio de compras",
        path: "/shopping-cart",
        component: ShoppingCart,
    },
}
export default routes
