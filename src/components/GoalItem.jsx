import React, { Component } from 'react'
import { connect } from 'react-redux'
import { completeGoalRef, goalRef } from '../firebase'

class GoalItem extends Component {
  completeGoal () {
    const { email } = this.props.user
    const { title, serverKey } = this.props.goal
    goalRef.child(serverKey).remove()
    completeGoalRef.push({email, title})
  }
  render () {
    const { email, title } = this.props.goal
    return (
      <div className="goal-holder">
        <div className="goal-title">
          <strong>{title}</strong>
          <span> | submitted by <em>{email}</em></span>
        </div>
        <div>
          <button className="btn btn-sm btn-primary baseline"
                  onClick={() => this.completeGoal()}>
            Complete
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state
  return {
    user
  }
}
export default connect(mapStateToProps, null)(GoalItem)
