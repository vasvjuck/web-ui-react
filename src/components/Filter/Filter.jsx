import React from 'react'
import './Filter.css';

const Filter = ({ options, defaultValue, value, onChange }) => {
  return (
    <select className='filter'
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      <option value={defaultValue}>{defaultValue}</option>
      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  )
}

export default Filter;