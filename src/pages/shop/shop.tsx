import axios from 'axios';
import { useEffect, useState } from 'react';
import './shop.scss';

const ShopPage = () => {
    const [data, setData] = useState([])
    // const [loading, setLoading] = useState(true)
		const [searchVal, setSearchVal] = useState('');

		useEffect(() => {
			axios.get('https://fakestoreapi.com/products')
			.then(response => setData(response.data))
			.catch(error => console.log(error));
		}, [])

		const handleInput = (e:any) => {
			setSearchVal(e.target.value);
			// console.log(e.target.value)
		}

		const handleFilter = () => {
			console.log(searchVal)
			const dataFiltered = data.filter((item:any) => {
				// return item.includes(searchVal);
			});
			console.log(dataFiltered)
		}



    return (        
        <div className='shopPage'>
					<input 
						onChange={handleInput}
						placeholder="Search Products"
					/>
					<button onClick={handleFilter}>Search</button>
					<div className="productContainer">
					{/* <ul>
          {data.map((product:any) => {
            return <li key={product} className='list-item'><a href='#'>{product}</a></li>
          })}
        </ul> */}
					</div>
        </div> 
    )
}

export default ShopPage;