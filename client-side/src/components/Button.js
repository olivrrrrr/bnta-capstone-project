import React from 'react'

const Button = ({clickMethod, name}) => {
    return (
        <button onClick={clickMethod}>{name}</button>
    )
}

export default Button;