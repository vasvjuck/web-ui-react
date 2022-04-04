import React from 'react'
import './Items.css';

const Items = ({ data }) => {
    return (
        <div key={data.id} className="bottom_content">
            <img src={data.imgSrc} alt={data.itemId} />
            <div className="bottom_text">
                <p>{data.name}</p>
                <p><span>$</span>{data.price}</p>
                <button href="">Order now</button>
            </div>
        </div>
    )
}

export default Items