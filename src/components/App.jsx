import React, { Component } from 'react'
import { firebaseApp } from '../firebase'
import { connect } from 'react-redux'
import '../App.css'
import AddGoal from './AddGoal'
import GoalList from './GoalList'
import CompleteGoalList from './CompleteGoalList'

class App extends Component {
  signOut () {
    firebaseApp.auth().signOut()
  }
  render () {
    return (
      <div className="app">
        <h3>Goal Coach</h3>
        <AddGoal></AddGoal>
        <hr></hr>
        <h4>Goals</h4>
        <GoalList></GoalList>
        <hr></hr>
        <h4>Complete Goals</h4>
        <CompleteGoalList></CompleteGoalList>
        <button className="btn btn-danger"
                onClick={() => this.signOut()}>
          Sign Out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, null)(App)
