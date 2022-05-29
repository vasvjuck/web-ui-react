import React, { useEffect, useState } from 'react';
import './MainSection.css';
import './CatalogMainSection.css'
import Items from '../Items/Items';
import SearchIcon from '@mui/icons-material/Search';
import Filter from '../Filter/Filter'
import PrimaryButton from '../PrimaryButton';
import Loader from '../Loader/Loader';
// import { MenuItems } from '../../Data'
import ItemService from '../../API/ItemService.js'

const CatalogMainSection = () => {
    const [data, setData] = useState([])
    const [selectedSort, setSelectedSort] = useState('')
    const [selectedFilter, setSelectedFilter] = useState('All types:')
    const [search, setSearch] = useState('');
    const [isItemLoading, setIsItemLoading] = useState(false);

  async function fetchData() {
        setIsItemLoading(true)
        setTimeout(async () => {
            const items = await ItemService.getAll()
            setData(items)
            setIsItemLoading(false)
        }, 1000)
    }

    const sortData = (sort) => {
        setSelectedSort(sort)
        setData([...data].sort((a, b) => a[sort].localeCompare(b[sort])))
        console.log(sort)
    }

    const typeFilter = [...new Set(data.map((val) => val.type))]

    const filterData = (filter) => {
        setSelectedFilter(filter)
        if (filter === 'All types:') { 
            fetchData()
            // setData(data)
            console.log(filter)
        }
        else {
            setData([...data].filter((item) => item.type === filter))
        }
        
    }
    console.log(data)
    console.log(typeFilter)

   

    const searchEl = () => {
        const element = data.filter(el => el.name.toLowerCase().includes(search.trim().toLowerCase()))
        setData(element)
    }

    // useEffect(() => {
    //     if (search === '') {
    //         setData(MenuItems)
    //     }
    // }, [search])

    useEffect(() => {
        console.log('USE EFFECT')
        if (search === '') {
            fetchData()
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
                        onKeyPress={(e) => e.key === 'Enter' && searchEl()}
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
                            defaultValue="Sort by:"
                            options={[
                                { value: 'name', name: 'By name' },
                                { value: 'price', name: 'By price' }
                            ]}
                        />
                        <Filter
                            value={selectedFilter}
                            onChange={filterData}
                            defaultValue="All types:"
                            options={
                                typeFilter.map((type) => {
                                    return { value: type, name: type }
                                })
                                // [{ value: 'burger', name: 'burger' },
                                // { value: 'pizza', name: 'pizza' },
                                // { value: 'sandwich', name: 'sandwich' },
                                // { value: 'fried', name: 'fried' },
                                // { value: 'sauce', name: 'sauce' }]
                            }
                        />
                        {/* <Filter
                            value={selectedFilter}
                            onChange={filterData}
                            defaultValue="Ingredients feature:"
                            options={[
                                { value: 'vegan', name: 'Vegan' },
                                { value: 'cheese', name: 'With cheese' },
                            ]}
                        /> */}
                    </div>
                    <PrimaryButton>Apply</PrimaryButton>
                </form>

            </div>
            {isItemLoading
                ? <Loader />
                : <div className="main_bottom">
                    {
                        data.map((data) => (
                            <Items data={data} key={data.id} />
                        ))
                    }
                </div>
            }

        </section>
    )
}

export default CatalogMainSection