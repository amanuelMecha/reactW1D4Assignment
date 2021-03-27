import logo from './logo.svg';
import './App.css';
import System from './studentSytem'
import React from 'react'
import Exercise from './lab3'
import Lab4 from './lab4'
import Lab4New from './lab4NewComponent'

class App extends React.Component {
    state = {
        student: [{ Id: 123, fname: "Bipin", "lname": "Regmi", "Major": "MSD", "email": "bregmi@gmail.com" },
        { Id: 456, fname: "Tahir", "lname": "Abafita", "Major": "MSD", "email": "tahir@gmail.com" },
        { Id: 786, fname: "Kasahun", "lname": "Tehon", "Major": "MSD", "email": "kas@gmail.com" }]
    }
    // updatefunction = () => {
    //   let result = this.state.student.map(item => {
    //     return { Id: item.Id, fname: item.fname, lname: item.lname, Major: 'history', email: item.email }
    //   })
    //   this.setState({ student: result })
    // }
    // deleteFunction = (id) => {
    //   console.log('aman,', id)
    //   let result = this.state.student.filter(item => {
    //     return item.Id !== id
    //   })
    //   this.setState({ student: result })
    // }
    addNewStudent = () => {
        let OneStudent = { Id: 100, fname: "Luwam", lname: "Abafita", Major: "MSD", email: "luwam@gmail.com" }
        let result = this.state.student;
        result.push(OneStudent)

        this.setState({ student: result })
    }
    render() {
        return (
            <div>
                {this.state.student.map(item => {
                    return (//Id={item.Id} fname={item.fname} lname={item.lname} Major={item.Major} email={item.email}
                        <div>
                            <Lab4 Id={item.Id} fname={item.fname} lname={item.lname} Major={item.Major} email={item.email} />

                        </div>

                    )
                })}
                <Lab4New button={() => { this.addNewStudent() }} />
            </div >
        );
    }
}

export default App;
