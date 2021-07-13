import React from 'react'

export default function Button({title,onClick,style}) {
    
    return (
        <button className="button" style={style} onClick={onClick}>
            {title}
        </button>
    )
}
