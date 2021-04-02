import Student from './student'
import React from 'react'
import axios from 'axios'
export default class Students extends React.Component {
    state = { students: [] }
    fetchState = () => {
        let headers = { 'Authorization': this.props.tokenValue }
        axios.get('http://localhost:5000/api/v1/students', { headers: headers })
            .then(result => {
                console.log('Frey', result.data.result)
                if (result.data.status === 'success') {
                    this.setState({ students: result.data.result })
                }
            })
            .catch(err => { console.log(err) })
    }
    deleteFunction = (id) => {
        let headers = { 'Authorization': this.props.tokenValue }
        axios.delete('http://localhost:5000/api/v1/students/' + id, { headers: headers })
            .then(result => {
                //alert('one student removed from the db')
                console.log(result)
            })
        this.fetchState()
    }
    render() {
        let students = null
        if (this.state.students) {
            students = (
                this.state.students.map((item, index) => {
                    return (<Student key={item.Id} Id={item.Id} fname={item.fname} lname={item.lname}
                        major={item.Major} email={item.email} delete={() => {
                            this.deleteFunction(item.Id)
                        }} fnameUpdate={(event, index) => { this.props.fnameUpdate(event, index) }}

                    />)
                })
            )

        }
        return (

            <div>
                <h4 align='center'>List of students</h4>
                <b>Token<input onChange={this.props.token}></input></b>
                <button onClick={this.fetchState}>Enter</button>
                {students}
            </div>


        )
    }
}
