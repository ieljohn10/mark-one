import homeImg from '../../assets/global/shop_img.jpg';
import facebookLogo from '../../assets/home/facebook.png';
import twitterLogo from '../../assets/home/twitter.png';
import linkedInLogo from '../../assets/home/linkedIn.png';
import instagramLogo from '../../assets/home/instagram.png';
import style from './home.module.scss';

const HomePage = () => {
    return (
        <div className={style.homePage}>
            <div className={style.leftContent}>
                <div className={style.textContainer}>
                    <h1 className={style.homeTitle}>Shop Here</h1>
                    <h3 className={style.subTitle}>You want something? We got you!</h3>
                    <p className={style.homeDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ut deleniti officiis exercitationem totam!</p>
                </div>

                <div className={style.socialNetworks}>
                    <ul>
                        <li>
                            <img src={facebookLogo} alt='facebook logo'/>
                        </li>
                        <li>
                            <img src={twitterLogo} alt='facebook logo'/>
                        </li>
                        <li>
                            <img src={linkedInLogo} alt='facebook logo'/>
                        </li>
                        <li>
                            <img src={instagramLogo} alt='facebook logo'/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.rightContent}>
                <img className={style.shopImg} src={homeImg} alt='home shop image'/>
            </div>
        </div>
    )
}

export default HomePage;