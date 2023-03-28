import homeImg from '../../assets/global/shop_img@2x.jpg';
import facebookLogo from '../../assets/home/facebook@2x.png';
import twitterLogo from '../../assets/home/twitter@2x.png';
import linkedInLogo from '../../assets/home/linkedIn@2x.png';
import instagramLogo from '../../assets/home/instagram@2x.png';
// import style from './home.module.scss';
import './home.scss';

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="leftContent">
                <div className="textContainer">
                    <h1 className="homeTitle">Shop Here</h1>
                    <h3 className="subTitle">You want something?<br/> <span>We got you!</span></h3>
                    <p className="homeDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ut deleniti officiis exercitationem totam!</p>
                    <button className="exploreBtn"><b>Shop Now!</b></button>
                </div>

                <div className="socialNetworks">
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
            <div className="rightContent">
                <img className="shopImg" src={homeImg} alt='home shop image'/>
            </div>
        </div>
    )
}

export default HomePage;