import cardData from '../../data/carddata/cardData.js';
import './cards.scss';

const CardPage = () => {
	return (
		<div className='cardsPage'>
				<div className="cardContainer">
					{
						cardData.map((item:any) => {
							return(
								<div className="cardItem" key={item.id}>
									<h1 className='cardName'>{item.name}</h1>
									<img className='cardImg' src={item.img} alt={item.alt}/>
									<div className="cardDesc">{item.desc}</div>
								</div>
							)
						})
					}
				</div>
		</div>
	)
}

export default CardPage;