//import Login from "../auth/Login"
//import Register from "../auth/Register"
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
        type: "public",
        name: "Inicio",
        path: "/",
        component: Home,
    },
    menu: {
        type: "public",
        name: "Menu",
        path: "/menu",
        component: Menu,
    },
    about: {
        type: "public",
        name: "Acerca de Nosotros",
        path: "/about",
        component: About,
    },
    gallery: {
        type: "public",
        name: "Galeria",
        path: "/gallery",
        component: Gallery,
    },
    // blog: {
    //      type:'public',
    //      name: "Blog",
    //      path: "/blog",
    //      component:Home
    // },
    hours: {
        type: "public",
        name: "Horario y hubicacion",
        path: "/location",
        component: Location,
    },
    team: {
        type: "public",
        name: "Nuestro equipo",
        path: "/team",
        component: Team,
    },
    faqs: {
        type: "public",
        name: "Preguntas Frecuentes",
        path: "/faq",
        component: Faq,
    },
    terms: {
        type: "public",
        name: "Termino y condiciones",
        path: "/terms",
        component: Terms,
    },
    giftCards: {
        type: "public",
        name: "Targeta de regalo",
        path: "/gift-cards",
        component: GiftCards,
    },
    contacts: {
        type: "public",
        name: "Contáctenos",
        path: "/contact",
        component: Contact,
    },
    product: {
        type: "public",
        name: "product",
        //path: "/product/:slug",
        path: "/product/:productSlug",
        component: Product,
    },
    shoppingCart: {
        type: "private",
        name: "Carrtio de compras",
        path: "/shopping-cart",
        component: ShoppingCart,
    },
    //me dio peresa de terminar el login ,el crud para el perfil y todo los demas...
    // login: {
    //     type: "public",
    //     name: "Login",
    //     path: "/login",
    //     component: Login,
    // },
    // register: {
    //     type: "public",
    //     name: "Register",
    //     path: "/register",
    //     component: Register,
    // },
}
export default routes
