import React from 'react'
export default class System extends React.Component {
    state = {
        student: [{ Id: 123, fname: "Bipin", "lname": "Regmi", "Major": "MSD", "email": "bregmi@gmail.com" },
        { Id: 456, fname: "Tahir", "lname": "Abafita", "Major": "MSD", "email": "tahir@gmail.com" },
        { Id: 786, fname: "Kasahun", "lname": "Tehon", "Major": "MSD", "email": "kas@gmail.com" }]
    }

    deletFunction = (id) => {
        console.log('delete', id)
        let result = this.state.student.filter(item => {

            return item.Id !== id
        })
        this.setState({ student: result })
    }
    updateFunction = () => {
        let result = this.state.student.map(item => {
            return { Id: item.Id, fname: item.fname, lname: item.lname, Major: "MSD-2021", email: item.email }
        })
        this.setState({ student: result })
    }

    render() {
        return (
            <div>
                {
                    this.state.student.map(item => {
                        return (
                            <div>
                                <p> Id:{item.Id} fname:{item.fname} lname:{item.lname} major:{item.Major} email:{item.email}</p>
                                <button onClick={() => { this.deletFunction(item.Id) }}>Delete</button>
                            </div>
                        )
                    })
                }
                <button onClick={this.updateFunction} >update</button>


            </div >
        )
    }
}