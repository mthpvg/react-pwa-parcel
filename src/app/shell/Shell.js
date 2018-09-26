import './index.scss'

import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import Home from '../routes/home/Home'
import Users from '../routes/users/Users'
import User from '../routes/user/User'


export default class Shell extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
          </nav>
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path="/users" component={Users}/>
            <Route path="/users/:userId" component={User}/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
