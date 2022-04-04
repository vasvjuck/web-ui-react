import React, { useState } from 'react';
import './MainSection.css';
import './CatalogMainSection.css'
import Items from '../Items/Items';
import SearchIcon from '@mui/icons-material/Search';
import Filter from '../Filter/Filter'
import { MenuItems } from '../../Data'

const CatalogMainSection = () => {
    const [data, setDataFilter] = useState(MenuItems)
    const [selectedSort, setSelectedSort] = useState('')

    const sortData = (sort) => {
        setSelectedSort(sort)
        console.log(sort)
    }

    return (


        <section className="item__filter">
            <div className='topbox'>
                <form>
                    <div className="filter">
                        <Filter
                            value={selectedSort}
                            onChange={sortData}
                            defaultValue="Filter by:"
                            options={[
                                { value: 'name', name: 'By name' },
                                { value: 'price', name: 'By price' },
                                { value: 'id', name: 'By id' }
                            ]}
                        />
                        <Filter
                            value={selectedSort}
                            onChange={sortData}
                            defaultValue="Filter by:"
                            options={[
                                { value: 'name', name: 'By name' },
                                { value: 'price', name: 'By price' },
                                { value: 'id', name: 'By id' }
                            ]}
                        />
                        <Filter
                            value={selectedSort}
                            onChange={sortData}
                            defaultValue="Filter by:"
                            options={[
                                { value: 'name', name: 'By name' },
                                { value: 'price', name: 'By price' },
                                { value: 'id', name: 'By id' }
                            ]}
                        />
                    </div>
                    <div className="searchBox">
                        <input className="searchInput" type="text" placeholder="Search" />
                        <button className="searchButton" href="#">
                            <SearchIcon />
                        </button>
                    </div>
                </form>
            </div>

            <div className="main_bottom">
                {
                    data.map((data) => (
                        <Items data={data} key={data.id} />
                    ))
                }
            </div>
        </section>
    )
}

export default CatalogMainSection