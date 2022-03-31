import React from 'react'
import '../Main/MainSection.css';

const Items = ({ img, name, price }) => {
    return (
        <div className="bottom_content">
            <img src={img} alt='pizza' />
            <div className="bottom_text">
                <p>{name}</p>
                <p><span>$</span>{price}</p>
                <button href="">Order now</button>
            </div>
        </div>
    )
}

export default Items