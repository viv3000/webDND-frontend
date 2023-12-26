import React, {useState, useEffect} from 'react'

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom"

import './App.css'
import Auth from './auth/Auth.jsx'

import Head from './Head.jsx'


export default () => {
	const [token, setToken] = useState()
	useEffect(() => { }, [token])

	return (
		<>
			<Router>
				<Head token={token} />
				<Routes>
					<Route path="/auth" element={<Auth setToken={setToken} />} />
				</Routes>
			</Router>
		</>
	)
}
