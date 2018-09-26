import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import Home from '../routes/home/Home'
import Persons from '../routes/persons/Persons'


export default class Shell extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/persons">Persons</Link>
          </nav>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/persons" component={Persons}/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
