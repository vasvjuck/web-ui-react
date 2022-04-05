import React from 'react'
import PrimaryButton from '../PrimaryButton';
import './ItemMainSection.css'

const ItemMainSection = ({ data }) => {
    return (
        <section className="ItemMainSection">
            <section className='item__description'>
                <img src={data.imgSrc} alt={data.itemId} />
                <div>
                    <PrimaryButton text="1 characteristic" />;
                    <PrimaryButton text="2 characteristic" />;
                    <h1>{data.name}</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Praesentium dignissimos sequi itaque minima nihil adipisci repellat,
                        repudiandae alias fugit recusandae magni a, cum exercitationem debitis
                        tempore eos obcaecati amet architecto.
                    </p>
                </div>
            </section>
            <section className="add-to-cart">
                <p>
                    Price:<span> $</span>{data.price}
                </p>
                <div>
                    <PrimaryButton text="Go back" />;
                    <PrimaryButton text="Add to cart" />;
                </div>
            </section>
        </section>
    )
}

export default ItemMainSection