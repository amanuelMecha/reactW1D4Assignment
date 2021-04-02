import React from 'react'
import axios from 'axios'
export default class extends React.Component {
    state = { student: undefined }

    searchFunction = () => {
        let headers = { 'Authorization': this.props.tokenValue }

        axios.get('http://localhost:5000/api/v1/students/' + this.props.id, {
            headers: headers
        })
            .then(result => {
                this.setState({ student: result.data.result })
            })
            .catch(err => {
                console.log(err)
            })
        // this.fetchStateSingle()
    }

    render() {
        let student = null
        if (this.state.student) {
            student = (<div>
                Id {this.state.student.Id} <br />
                 fname {this.state.student.fname} <br />
                lname {this.state.student.lname}  <br />
                 major {this.state.student.major}  <br />
                email {this.state.student.email}  <br />
            </div>)
        }
        return (
            <div>
                <h4>search for a student</h4>
    Id < input onChange={this.props.search} ></input >
                <b>Token<input onChange={this.props.tokenFunction}></input></b>
                <button onClick={(event) => { this.searchFunction(event) }}>search</button>
                {student}


            </div >
        )
    }
}