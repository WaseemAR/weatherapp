import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
import { locOptions, LOC_URL } from '../../apiConstants';

 const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    const loadOptions = (inputValue) => {
        console.log("Input Value =", inputValue)
        return fetch(`${LOC_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, locOptions)
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city) => {
                  return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                  };
                })
            }
        })
        .catch(err => console.error(err));
    };

    return (
        <AsyncPaginate 
            placeholder="Search city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions} />
    )
}

export default Search;