import React, {useState, useEffect} from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom"

import Auth from './auth/Auth.jsx'
import Head from './Head.jsx'
import Persons from './Persons/Persons.jsx'

import './App.css'
import styles from './App.module.css'

export default () => {
	const [token, setToken] = useState("ae25917ba4d6a4667f0cefbdcc4438052c945156")
	useEffect(() => { }, [])

	return (
		<>
			<Router>
				<div className={styles.Body}>
					<Head className={styles.Head} token={token} />
					<Routes>
						<Route path="/auth" element={<Auth setToken={setToken} />} />
						<Route path="/persons" element={<Persons token={token} />} />
					</Routes>
				</div>
			</Router>
		</>
	)
}
