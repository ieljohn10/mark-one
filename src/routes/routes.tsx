import HomePage from "../pages/home/home";
import { useRoutes } from 'react-router-dom';
import AboutPage from "../pages/about/about";
import ContactPage from "../pages/contact/contact";

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
            path : '/contact',
            element : <ContactPage />
        }
    ]);

    return routes;
}

export default RoutesPage;