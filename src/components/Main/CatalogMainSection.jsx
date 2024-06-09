import React, { useEffect, useState } from 'react';
import './MainSection.css';
import './CatalogMainSection.css';
import Items from '../Items/Items';
import SearchIcon from '@mui/icons-material/Search';
import Filter from '../Filter/Filter';
import PrimaryButton from '../PrimaryButton';
import Loader from '../Loader/Loader';
import ItemService from '../../API/ItemService.js';

const CatalogMainSection = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');
    const [selectedTypeFilter, setSelectedTypeFilter] = useState('Select types:');
    const [selectedVeganFilter, setSelectedVeganFilter] = useState('Select vegan types:');
    const [selectedCheeseFilter, setSelectedCheeseFilter] = useState('Select cheese types:');
    const [search, setSearch] = useState('');
    const [isItemLoading, setIsItemLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        applySearch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    async function fetchData() {
        setIsItemLoading(true);
        setError(null);
        try {
            const items = await ItemService.getAll();
            setData(items);
            setFilteredData(items);
        } catch (error) {
            setError('Failed to fetch data from the server. Please try again later.');
        } finally {
            setIsItemLoading(false);
        }
    }

    const handleSortChange = (sort) => {
        setSelectedSort(sort);
    };

    const handleTypeFilterChange = (filter) => {
        setSelectedTypeFilter(filter);
    };

    const handleVeganFilterChange = (filter) => {
        setSelectedVeganFilter(filter);
    };

    const handleCheeseFilterChange = (filter) => {
        setSelectedCheeseFilter(filter);
    };

    const applySearch = () => {
        let filtered = data;

        if (search) {
            filtered = filtered.filter((el) =>
                el.name.toLowerCase().includes(search.trim().toLowerCase())
            );
        }

        setFilteredData(filtered);
    };

    const applyFiltersAndSort = () => {

        let filtered = [...data]; // Create a new array for filters and sorting

        const filterConfig = {
            type: (item) => {
                // Logic for filtering by type
                return ['Select types:', 'All types', item.type].includes(selectedTypeFilter);
            },
            vegan: (item) => {
                // Logic for filtering by vegan
                return ['Select vegan types:', 'All Omnivorous', item.vegan.toString()].includes(selectedVeganFilter);
            },
            cheese: (item) => {
                // Logic for filtering by cheese
                return ['Select cheese types:', 'Any cheese', item.cheese.toString()].includes(selectedCheeseFilter);
            }
        };

        filtered = filtered.filter((item) => {
            return Object.keys(filterConfig).every((key) => filterConfig[key](item));
        });


        // // Alternative filtering
        // if (selectedTypeFilter !== 'All types' && selectedTypeFilter !== 'Select types:') {
        //     filtered = filtered.filter((item) => item.type === selectedTypeFilter);
        // }

        // if (selectedVeganFilter !== 'All Omnivorous' && selectedVeganFilter !== 'Select vegan types:') {
        //     filtered = filtered.filter((item) => item.vegan.toString() === selectedVeganFilter);
        // }

        // if (selectedCheeseFilter !== 'Any cheese' && selectedCheeseFilter !== 'Select cheese types:') {
        //     filtered = filtered.filter((item) => item.cheese.toString() === selectedCheeseFilter);
        // }

        if (selectedSort && selectedSort !== 'Sort by:') {
            filtered = filtered.slice(); // Create a new array for sorting (for the correct use of mutable array methods)
            filtered.sort((a, b) => {
                if (selectedSort === 'price') {
                    return a[selectedSort] - b[selectedSort];
                }
                return a[selectedSort].localeCompare(b[selectedSort]);
            });
        }

        setFilteredData(filtered);
    };

    return (
        <section className="item__filter">
            <div className='topbox'>
                <div className="searchBox">
                    <input
                        id='search'
                        className="searchInput"
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <button className="searchButton" onClick={applySearch}>
                        <SearchIcon />
                    </button>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); applyFiltersAndSort(); }}>
                    <div className="filter">
                        <Filter
                            value={selectedSort}
                            onChange={handleSortChange}
                            defaultValue="Sort by:"
                            options={[
                                { value: 'name', name: 'By name' },
                                { value: 'price', name: 'By price' }
                            ]}
                        />
                        <Filter
                            value={selectedTypeFilter}
                            onChange={handleTypeFilterChange}
                            defaultValue="Select types:"
                            options={['All types', ...new Set(data.map((val) => val.type))].map(
                                (type) => ({ value: type, name: type })
                            )}
                        />
                        <Filter
                            value={selectedVeganFilter}
                            onChange={handleVeganFilterChange}
                            defaultValue="Select vegan types:"
                            options={[
                                { value: 'All Omnivorous', name: 'All Omnivorous' },
                                { value: 'true', name: 'Vegan' },
                                { value: 'false', name: 'Non-Vegan' }
                            ]}
                        />
                        <Filter
                            value={selectedCheeseFilter}
                            onChange={handleCheeseFilterChange}
                            defaultValue="Select cheese types:"
                            options={[
                                { value: 'Any cheese', name: 'Any cheese' },
                                { value: 'true', name: 'Cheese' },
                                { value: 'false', name: 'Non-Cheese' }
                            ]}
                        />
                    </div>
                    <PrimaryButton type="submit">Apply</PrimaryButton>
                </form>
            </div>
            {isItemLoading ? (
                <Loader />
            ) : error ? (
                <div className="error-message">{error}</div>
            ) : (
                <div className="main_bottom">
                    {filteredData.map((item) => (
                        <Items data={item} key={item.id} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default CatalogMainSection;
