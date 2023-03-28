import style from './navbar.module.scss';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    const mainNav = (e:any) => {
        e.preventDefault();
        navigate('/');
    }

    const aboutNav = (e:any) => {
        e.preventDefault();
        navigate('/about');
    }

    const shopNav = (e:any) => {
        e.preventDefault();
        navigate('/shop');
    }

    const carttNav = (e:any) => {
        e.preventDefault();
        navigate('/cart');
    }

    const contactNav = (e:any) => {
        e.preventDefault();
        navigate('/contact');
    }

    return (
        <div className={style.navBar}>
            <h3 className={style.navLogo} onClick={mainNav}>Logo Here</h3>
            <nav className={style.navContainer}>
                <ul className={style.navWrapper}>
                    <li className={style.navItem} onClick={aboutNav}>About</li>
                    <li className={style.navItem} onClick={shopNav}>Shop</li>
                    <li className={style.navItem} onClick={carttNav}>Cart</li>
                    <li className={style.navItem} onClick={contactNav}>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;