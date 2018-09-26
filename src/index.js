import React from 'react'
import ReactDOM from 'react-dom'

import Shell from './app/shell/Shell'


console.log(`[APP] running in ${process.env.NODE_ENV} mode.`)
if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        console.log('[SW] service Worker is registered', registration.scope)
      })
      .catch(err => {
        console.error('[SW] service Worker registration failed:', err)
      })
    })
  }
}

ReactDOM.render(<Shell />, document.getElementById('root'))
