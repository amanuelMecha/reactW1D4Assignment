import React from 'react'

export default function UpdateFirstName(props) {
    return (
        <div class='Info'>
            <h4>Update first name</h4>
            Id:<input onChange={props.IdOChange}></input>
First Name:<input onChange={props.fnameOChange}></input>
            <button onClick={props.FnameUpdate}>update</button>
        </div>
    )
}