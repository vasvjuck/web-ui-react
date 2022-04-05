import React from 'react'
import './Banner.css';
import { Link} from 'react-router-dom'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='bannerContent'>
                <h3>Hello Ivan</h3>
                <p>Get free discount for every 10% purchase</p>

                <Link to='/#'>Learn More</Link>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
                alt=""
                className="deliveryPic"
            />
        </div>
    )
}

export default Banner