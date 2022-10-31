

import React from 'react'

function Input(props) {
    return (
        <input placeholder={props.placeholder} className={props.className} type={props.type} disabled={props.disabled} />
    )
}

export default Input
