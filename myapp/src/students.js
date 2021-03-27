export default function Student(props) {
    return (
        <div>
            <h1 align='center'>Students management system</h1>
            {/* <p>{props.fname}</p> */}
             ID<input />
            Fname<input value={props.fname}/>
             Lname<input  value={props.lname}/>
            Major<input />
            Email<input /> <br />
            <button>List</button>
            <button onClick={props.submit}>Submit</button>
            <button onClick={props.delete}>Delete</button>
        </div>
    )
}