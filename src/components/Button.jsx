import React from 'react'
import "./styles/Button.css"

const Button = ({handleChangeQuote}) => {
    return (
        <button className='__button' onClick={handleChangeQuote}><i className='bx bx-refresh'></i></button>
    )
}

export default Button