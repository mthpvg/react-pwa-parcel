import * as serviceWorker from './service-worker/index.js'
import * as app from './app/index.js'


console.log(`[APP] running in ${process.env.NODE_ENV} mode.`)
if (process.env.NODE_ENV === 'production') serviceWorker.register()

app.bootstrap()
