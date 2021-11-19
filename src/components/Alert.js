import React from 'react'

export default function Alert(props) {

    const capitalize = (word)=>{
        let string = word;
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mx-20`} role="alert">
            <p><strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}</p>
        </div>
    )
}
