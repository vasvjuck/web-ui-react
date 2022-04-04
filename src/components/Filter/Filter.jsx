import React, { useEffect, useState } from 'react'

const Filter = ({ data, defaultValue }) => {
  const [optionValue, setOptionValue] = useState("Filter by name:")
  console.log(data)

  const handleChange = (e) => {
    setOptionValue(e.target.value)
    console.log(optionValue)
  }

  return (
    <select onChange={handleChange} value={optionValue}>
      <option>Filter by name:</option>
      {
        data.map((options) => (
          <option value={options.name}>
            {options.name}
          </option>
        ))
      }

    </select>
  )
}

export default Filter