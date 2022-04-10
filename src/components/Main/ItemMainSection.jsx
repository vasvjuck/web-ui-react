import React, { useEffect, useState } from 'react'
import PrimaryButton from '../PrimaryButton';
import { useParams, Link } from 'react-router-dom'
import './ItemMainSection.css'
import { MenuItems } from '../../Data'

const ItemMainSection = () => {
    const { detailId } = useParams()
    const [data, setData] = useState({})

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
                <img src={data.imgSrc} alt="" />
                <div>
                    <PrimaryButton>1 characteristic</PrimaryButton>
                    <PrimaryButton>2 characteristic</PrimaryButton>
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
                    <Link className="button" to="/catalog"><PrimaryButton>Go back</PrimaryButton></Link>
                    <PrimaryButton>Add to cart</PrimaryButton>
                </div>
            </section>
        </section>
    )
}

export default ItemMainSection