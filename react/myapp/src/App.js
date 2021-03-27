import logo from './logo.svg';
import './App.css';
import { Students } from './lab4'
import React from 'react';

class App extends React.Component {
  state = {
    students: [{ Id: 123, fname: "Bipin", "lname": "Regmi", "Major": "MSD", "email": "bregmi@gmail.com" },
    { Id: 456, fname: "Tahir", "lname": "Abafita", "Major": "MSD", "email": "tahir@gmail.com" },
    { Id: 786, fname: "Kasahun", "lname": "Tehon", "Major": "MSD", "email": "kas@gmail.com" }]
  }
  addNewStudent = _ => {
    let oneStudent = { Id: 100, fname: "Luwam", "lname": "Tekle", "Major": "MSD", "email": "luwam@gmail.com" }

    let result = this.state.students;
    result.push(oneStudent)
    this.setState({ students: result })

  }
  render() {
    return (
      <div align='center' >
        {
          this.state.students.map(item => {
            return (<div>
              <Students key={item.Id} Id={item.Id} fname={item.fname} lname={item.lname} Major={item.Major} email={item.email} />

            </div>)
          })
        }
        <button onClick={this.addNewStudent}>addNewStudent</button>
      </div>
    )
  }
  ;
}

export default App;
