import logo from './logo.svg';
import './App.css';
import System from './studentSytem'
import React from 'react'
import Exercise from './lab3'

class App extends React.Component {
    state = {
        student: [{ Id: 123, fname: "Bipin", "lname": "Regmi", "Major": "MSD", "email": "bregmi@gmail.com" },
        { Id: 456, fname: "Tahir", "lname": "Abafita", "Major": "MSD", "email": "tahir@gmail.com" },
        { Id: 786, fname: "Kasahun", "lname": "Tehon", "Major": "MSD", "email": "kas@gmail.com" }]
    }
    updatefunction = () => {
        let result = this.state.student.map(item => {
            return { Id: item.Id, fname: item.fname, lname: item.lname, Major: 'history', email: item.email }
        })
        this.setState({ student: result })
    }
    deleteFunction = (id) => {
        console.log('aman,', id)
        let result = this.state.student.filter(item => {
            return item.Id !== id
        })
        this.setState({ student: result })
    }
    editOnlyOne = () => {
        console.log('edit')
    }
    render() {
        return (
            <div>
                {
                    this.state.student.map(item => {
                        return (<div>
                            <Exercise ID={item.Id} fname={item.fname} lname={item.lname} Major={item.Major} email={item.email} editM={() => { this.deleteFunction(item.Id) }} />
                            {/* <button onClick={() => { this.deleteFunction(item.Id) }}>Delete</button>
               */}
                        </div>
                        )


                    })
                }

                {/* <Exercise /> */}
                <button onClick={this.updatefunction}>Update</button>

            </div >
        );
    }
}

export default App;
