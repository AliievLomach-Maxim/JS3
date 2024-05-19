import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// console.log('CreatePosts :>> ', CreatePosts());

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
// ReactDOM.createRoot(document.getElementById('root')).render(Wrapper())
// ReactDOM.createRoot(document.getElementById('root')).render(CreatePosts())
// ReactDOM.createRoot(document.getElementById('root')).render(<CreatePosts/>)
