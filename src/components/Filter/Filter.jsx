import React from 'react'

const Filter = ({data, defaultValue}) => {
  return (
    <select>
        <option disabled value="">{defaultValue}</option>
        {data.map(options=>
            <option value={options.value}>
                {data.name}
            </option>
            )}
    </select>
  )
}

export default Filter