import React, { useEffect, useState } from 'react'
import './MainSection.css';
import SquareIcon from '@mui/icons-material/Square';
import Items from '../Items/Items';
import { MenuItems } from '../../Data'
import { Link } from 'react-router-dom'

const MainSection = () => {
    const [data, setData] = useState([])
    const [dataAll, setDataAll] = useState(false)

    const addProduct = () => {
        setData(MenuItems)
        setDataAll(true)
    }

    useEffect(() => {
        setData(MenuItems.slice(0, 3))
    }, [])

    return (
        <main>
            <div className="main_top">
                <SquareIcon className="one" />
                <div className="top_text">
                    <h3 className="top__subtitle">
                        What We Serve
                    </h3>
                    <h2 className="top_title">
                        Your Favourite Food Delivery Partner
                    </h2>
                </div>
                <SquareIcon className="two" />
            </div>
            <div className="main_bottom">
                {
                    data && data.map((dataItem) => (
                        <Link to={`/catalog/detail/${dataItem.id}`} key={dataItem.id}>
                            <Items dataItem={dataItem} />
                        </Link>
                    ))
                }
            </div>
            {
                !dataAll ?
                    (<button className='btn' onClick={addProduct}>View More...</button>) :
                    (<div><SquareIcon className="one" /><span className="allGoods">It's all goods</span><SquareIcon className="two" /></div>)
            }
        </main>
    )
}

export default MainSection