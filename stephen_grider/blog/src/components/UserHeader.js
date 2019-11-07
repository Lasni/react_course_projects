import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId)
  // }

  render() {
    
    // const user = this.props.users.find((user) => user.id === this.props.userId)
    const { user } = this.props

    if (!user) {
      return null
    }
    return (
      <div className='header'>{user.name}</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);

// section 15 lecture 180
// UserHeader component is nested inside of each post in PostList
// UserHeader gets passed in a userId prop
// we make a fetchUser action creator that fetches the user with the matching userId
// in UserHeader component, at componentDidMount point we call the fetchUser action creator with the userId prop
// we make a usersReducer that updates and returns a new list of users with the user we went looking for
// we combine the usersReducer in the combineReducers method (index.js) and assign it a key 'users'
// in UserHeader in mapStateToProps we map the state.users (coming from usersReducer) with a new key 'users' that is now available via props
// in render we traverse the users prop, and for each user compare its id with the userId prop that was originally fed into UserHeader component 