import React from 'react'
import '../Main/MainSection.css';

const Items = ({ data }) => {
    return (
        <div key={data.id} className="bottom_content">
            <img src={data.imgSrc} alt='pizza' />
            <div className="bottom_text">
                <p>{data.name}</p>
                <p><span>$</span>75.4</p>
                <button href="">Order now</button>
            </div>
        </div>
    )
}

export default Items