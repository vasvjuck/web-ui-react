import React from 'react'

const PrimaryButton = ({ text, clickFunction }) => {
    return (
        <button type="button" onClick={clickFunction}>{text}</button>
    )
}

export default PrimaryButton