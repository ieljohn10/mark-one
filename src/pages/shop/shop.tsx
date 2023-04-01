import axios from 'axios';
import { useEffect, useState } from 'react';
import './shop.scss';

const ShopPage = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get('https://fakestoreapi.com/products')
		.then(response => setData(response.data))
		.catch(error => console.log(error));
		
	},[])
	console.log(data);

	return (        
		<div className='shopPage'>			
			<div className="card-container">
				{data.map((item:any) => {
					return(
						<div className="card-item" key={item.id}>
							<div className="image-container">
								<img src={item.image} alt={item.title} />
							</div>
							<div className="card-desc-container">
								<h4 className="title">{item.title}</h4>
								{/* <p className="desc">{item.description}</p> */}
							</div>
						</div>
					)
				})}
			</div>
		</div> 
	)
}
export default ShopPage;