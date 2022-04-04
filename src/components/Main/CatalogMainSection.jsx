import React, { useState } from 'react';
import './MainSection.css';
import Items from '../Items/Items';
import SearchIcon from '@mui/icons-material/Search';
import Filter from '../Filter/Filter'
import { MenuItems } from '../../Data'

const CatalogMainSection = () => {
    const [data, setData] = useState(MenuItems)

    return (
        <div>
            <section className="item__filter">
                <div className="searchBox">
                    <input className="searchInput" type="text" placeholder="Search" />
                    <button className="searchButton" href="#">
                        <SearchIcon />
                    </button>
                </div>
                <form>
                    <div className="filter">
                        <Filter
                            defaultValue="Filter by:"
                            data={data}
                        // options={[
                        //     { value: data, name: 'By name' }
                        // ]}
                        />
                        <select name="" id="">
                            <option value="value0">Filter 1</option>
                            <option value="value1">By name</option>
                            <option value="value2">By price</option>
                            <option value="value3">By id</option>
                        </select>
                    </div>

                </form>

            </section>
            <div className="main_bottom">
                {
                    data.map((data) => (
                        <Items data={data} key={data.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default CatalogMainSection