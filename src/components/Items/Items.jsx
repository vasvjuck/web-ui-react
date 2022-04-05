import React from 'react'
import PrimaryButton from '../PrimaryButton';
import './Items.css';

const Items = ({ data }) => {
    return (
        <div key={data.id} className="bottom_content">
            <img src={data.imgSrc} alt={data.itemId} />
            <div className="bottom_text">
                <p>{data.name}</p>
                <p><span>$</span>{data.price}</p>
                <PrimaryButton text="Order" />
            </div>
        </div>
    )
}

export default Items