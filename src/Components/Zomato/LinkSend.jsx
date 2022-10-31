import React from 'react'

function LinkSend(props) {

    const handleChecked = () => {
        props.setSendType(props.name);
    }    

    return (
        <label>
            <input checked={props.name === 'Email' ? props.sendType === 'Email' ? true : false : props.sendType === 'Phone' ? true : false } onChange={handleChecked} className='sendRadio' name='sendRadio' type='radio' />
            {props.name}
        </label>
    )
}

export default LinkSend;