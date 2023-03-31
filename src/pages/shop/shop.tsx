import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import './shop.scss';

const ShopPage = () => {
    const [data, setData] = useState([]);


		useEffect(() => {
			axios.get('https://fakestoreapi.com/products')
			.then(response => setData(response.data))
			.catch(error => console.log(error));
		}, [])

    return (        
        <div className='shopPage'>			

        </div> 
    )
	}
export default ShopPage;