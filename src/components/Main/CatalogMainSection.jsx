import React, { useEffect, useState } from 'react';
import './MainSection.css';
import './CatalogMainSection.css'
import Items from '../Items/Items';
import SearchIcon from '@mui/icons-material/Search';
import Filter from '../Filter/Filter'
import PrimaryButton from '../PrimaryButton';
import { MenuItems } from '../../Data'

const CatalogMainSection = () => {
    const [data, setData] = useState(MenuItems)
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [search, setSearch] = useState('');

    const sortData = (sort) => {
        setSelectedSort(sort);
        setData([...data].sort((a, b) => a[sort].localeCompare(b[sort])))
        console.log(sort)
    }

    const searchEl = () => {
        const element = MenuItems.filter(el => search === el.name)
        setData(element)
    }

    useEffect(() => {
        if (search === '') {
            setData(MenuItems)
        }
    }, [search])

    return (
        <section className="item__filter">
            <div className='topbox'>
                <div className="searchBox">
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="Search..."
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                    />
                    <button className="searchButton" href="#">
                        <SearchIcon onClick={searchEl} />
                    </button>
                </div>
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
                    <PrimaryButton text="Apply" />
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