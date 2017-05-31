import React, { Component } from 'react'
import { firebaseApp } from '../firebase'
import { Link } from 'react-router'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }
  signup () {
    console.log(this.state)
    const { email, password } = this.state
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error --> ', error)
        this.setState({error})
      })
  }
  render () {
    return (
      <div className="form-inline form-margin">
        <h2>Sign Up</h2>
        <div className="form-group">
          <input className="form-control"
                 type="text"
                 placeholder="email"
                 onChange={event => this.setState({email: event.target.value})}/>
          <input className="form-control"
                 type="password"
                 placeholder="password"
                 onChange={event => this.setState({password: event.target.value})}/>
          <button className="btn btn-primary"
                  type="button"
                  onClick={() => this.signup()}>
            Sign Up
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <hr></hr>
        <div><Link to={'/signin'}>Already a user? Sign in instead</Link></div>
      </div>
    )
  }
}

export default Signup
