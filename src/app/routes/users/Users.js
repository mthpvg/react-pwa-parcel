import React from 'react'
import {Link} from 'react-router-dom'

import {getUsers} from './services'


export default class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      error: null,
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({isLoading: true})
    getUsers()
      .then(users => this.setState({users, isLoading: false}))
      .catch(error => this.setState({error, isLoading: false}))
  }

  render() {
    this.usersElements = this.state.users.map((user) => {
      const path = `/users/${user.id}`
      return (
        <Link to={path} key={user.id}><div>{user.name}</div></Link>
      )
    })

    if (this.state.isLoading) return (<div>Fetching users...</div>)
    if (this.state.error) return (<div>Error...</div>)
    return (<div>{this.usersElements}</div>)
  }
}
