import React from 'react'
import ReactDOM from 'react-dom'
import 'sanitize.css'
import Home from './components/Home/Home'
import {Provider} from 'react-redux'
import {store} from './store'

window.store = store

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById('app')
)
