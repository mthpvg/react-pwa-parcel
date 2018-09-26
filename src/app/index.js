import React from 'react'
import ReactDOM from 'react-dom'

import Shell from './shell/Shell'


export function bootstrap() {
  ReactDOM.render(<Shell />, document.getElementById('root'))
}
