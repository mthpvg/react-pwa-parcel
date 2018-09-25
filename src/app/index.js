import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'


export function bootstrap() {

  class HelloMessage extends React.Component {
    render() {
      return <div>Hello {this.props.name}</div>
    }
  }

  ReactDOM.render(
    <HelloMessage name='mthpvg' />,
    document.getElementById('root')
  )

}
