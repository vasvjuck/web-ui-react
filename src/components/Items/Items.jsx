import React from 'react'
import PrimaryButton from '../PrimaryButton';
import './Items.css';
import { Link } from 'react-router-dom'

const Items = ({ data }) => {

    return (
        <div id="el" key={data.id} className="bottom_content">
            <img src={data.imgSrc} alt={data.itemId} />
            <div className="bottom_text">
                <p>{data.name}</p>
                <p><span>$</span>{data.price}</p>
                <Link to={`/catalog/detail/${data.id}`}> <PrimaryButton text="Order" /></Link>
            </div>
        </div>
    )
}

export default Items