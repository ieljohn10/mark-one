import HomePage from "../pages/home/home";
import { useRoutes } from 'react-router-dom';
import AboutPage from "../pages/about/about";
import ContactPage from "../pages/contact/contact";
import ShopPage from "../pages/shop/shop";
import CartPage from "../pages/cart/cart";

const RoutesPage = () => {
    const routes = useRoutes([
        {
            path : '/',
            element : <HomePage />
        },
        {
            path : '/about',
            element : <AboutPage />
        },
        {
            path : '/shop',
            element : <ShopPage />
        },
        {
            path : '/cart',
            element : <CartPage />
        },
        {
            path : '/contact',
            element : <ContactPage />
        }
    ]);

    return routes;
}

export default RoutesPage;