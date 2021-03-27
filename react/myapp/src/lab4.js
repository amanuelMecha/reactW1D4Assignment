export function Students(props) {
    return (
        <div>
            <p align='center'>key={props.Id} Id:{props.Id} fname:{props.fname} lname:{props.lname} Major:{props.Major} email={props.email}</p>
        </div>
    )
}