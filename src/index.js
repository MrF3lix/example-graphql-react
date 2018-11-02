import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './store.jsx'
import MainRouter from './main-router.jsx'
import * as serviceWorker from './serviceWorker'

import './assets/sass/app.scss'

ReactDOM.render(
    <Provider store={Store}>
        <Router>
            <MainRouter/>
        </Router>
    </Provider>,
document.getElementById('root')
)

serviceWorker.unregister()
