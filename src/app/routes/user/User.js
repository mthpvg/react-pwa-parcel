import React from 'react'
import {Link} from 'react-router-dom'

import {getUser} from './services'


export default class User extends React.Component {
  constructor(props) {
    super(props)
    this.id = parseInt(props.match.params.userId)
    this.state = {
      user: {},
      error: null,
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    getUser(this.id)
      .then(user => this.setState({user, isLoading: false}))
      .catch(error => this.setState({error, isLoading: false}))
  }

  render() {
    if (this.state.isLoading) return (<div>Fetching user...</div>)
    if (this.state.error) return (<div>Error, try to refresh.</div>)
    return (<div>{this.state.user.name}</div>)
  }
}
