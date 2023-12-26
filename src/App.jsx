import React, {useState, useEffect} from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom"

import Auth from './auth/Auth.jsx'
import Head from './Head.jsx'

import './App.css'
import styles from './App.module.css'

export default () => {
	const [token, setToken] = useState()
	useEffect(() => { }, [token])

	return (
		<>
			<Router>
				<div className={styles.Body}>
					<Head className={styles.Head} token={token} />
					<Routes>
						<Route path="/auth" element={<Auth setToken={setToken} />} />
					</Routes>
				</div>
			</Router>
		</>
	)
}
