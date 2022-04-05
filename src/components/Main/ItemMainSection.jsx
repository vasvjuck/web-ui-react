import React, { useEffect, useState } from 'react'
import PrimaryButton from '../PrimaryButton';
import { useParams } from 'react-router-dom'
import './ItemMainSection.css'
import { MenuItems } from '../../Data'

const ItemMainSection = () => {
    const { detailId } = useParams()
    const [data, setData] = useState()

    const findEl = () => {
        const element = MenuItems.find(el => detailId == el.id)
        setData(element)
    }

    useEffect(() => {
        findEl()
    }, [])

    console.log(data)
    return (
        <section className="ItemMainSection">
            <section className='item__description'>
                <img src="https://pngimg.com/uploads/pizza/pizza_PNG43990.png" alt="" />
                <div>
                    <PrimaryButton text="1 characteristic" />;
                    <PrimaryButton text="2 characteristic" />;
                    <h1>Burger</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Praesentium dignissimos sequi itaque minima nihil adipisci repellat,
                        repudiandae alias fugit recusandae magni a, cum exercitationem debitis
                        tempore eos obcaecati amet architecto.
                    </p>
                </div>
            </section>
            <section className="add-to-cart">
                <p>
                    Price:<span> $</span>75.2
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