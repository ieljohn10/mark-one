import { useEffect, useState } from 'react';
import './shop.scss';

const ShopPage = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        // https://www.fakeshop-api.com/
        (() => {
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
           setLoading(false)
        })()
       
    },[])
    console.log(data)

    return (        
        <div className='shopPage'>
					<div className="productContainer">
						{data.map((item:any)=>{
							return(
									<div className="productItem" key={item.id}>
										<img className='card-image' src={item.image} alt=''/>
										<div className="productitle">{item.title}</div>
										{/* <div className="heading">{item.description}</div> */}
									</div>
								)
						})}
					</div>
        </div> 
    )
}

export default ShopPage;