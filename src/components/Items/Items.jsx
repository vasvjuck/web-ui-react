// import React from 'react'
// import PrimaryButton from '../PrimaryButton';
// import './Items.css';
// import { Link } from 'react-router-dom'

// const Items = ({ data }) => {

//     return (
//         <div id={"el" + data.id} key={data.id} className="bottom_content">
//             <img src={data.imgSrc} alt={data.itemId} />
//             <div className="bottom_text">
//                 <p>{data.name}</p>
//                 <p><span>$</span>{data.price}</p>
//                 <Link to={`/catalog/detail/${data.id}`}>
//                     <PrimaryButton>Order</PrimaryButton>
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export default Items

import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton';
import './Items.css';

const Items = ({ dataItem }) => {
    const navigate = useNavigate();

    const handleOrderClick = () => {
        navigate(`/catalog/detail/${dataItem.id}`);
    };

    return (
        <div id={"el" + dataItem.id} key={dataItem.id} className="bottom_content">
            <img src={dataItem.imgSrc} alt={dataItem.itemId} />
            <div className="bottom_text">
                <p>{dataItem.name}</p>
                <p><span>$</span>{dataItem.price}</p>
                <PrimaryButton onClick={handleOrderClick}>Order</PrimaryButton>
            </div>
        </div>
    );
};

export default Items;
