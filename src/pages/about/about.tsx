import aboutImg from '../../assets/about/about_img@2x.png';
import CardPage from '../../component/cards/cards';
import './about.scss';

const AboutPage = () => {
    return (
        <div className='aboutPage'>
            <section className='whatSection'>
                <div className="leftSection">
                    <div className="textContainer">
                        <h1 className="aboutTitle">About Us</h1>
                        <p className="aboutDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ut rem recusandae consectetur tempore provident, eaque, natus ea alias nostrum eligendi. Quasi animi eaque reprehenderit aspernatur, incidunt a eveniet molestiae.</p>
                        {/* <p className="aboutDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ut rem recusandae consectetur tempore provident, eaque, natus ea alias nostrum eligendi. Quasi animi eaque reprehenderit aspernatur, incidunt a eveniet molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                        <button className='exploreBtn'>Explore</button>
                    </div>
                </div>

                <div className="rightSection">
                    <img className='aboutImg' src={aboutImg} alt='about_img'/>
                </div>
                
                <span className='square'/>
            </section>
            <section className='whoSection'>
                <CardPage />
            </section>
        </div>
    )
}

export default AboutPage;