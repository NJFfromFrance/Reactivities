import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-widgets/dist/css/react-widgets.css'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import App from './app/layout/App'
import * as serviceWorker from './serviceWorker'
import ScrollToTop from './app/layout/ScrollToTop'
import dateFnsLocalizer from 'react-widgets-date-fns'

dateFnsLocalizer()

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>
  , document.getElementById('root'))

serviceWorker.unregister()
