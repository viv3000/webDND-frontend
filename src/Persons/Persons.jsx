import React, {useState, useEffect} from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom"

import PersonsMenu from './Menu.jsx'
import PersonsContent from './Content.jsx'
import PersonAdd from './Add.jsx'
import PersonUpdate from './Update.jsx'

import styles from './Persons.module.css'

export default ({token}) => {
	return (
		<div className={styles.Persons}>
			<div className={styles.Menu}>
				<PersonsMenu token={token}/>
			</div>
			<div className={styles.content}>
				<Routes>
					<Route path=""          element={<PersonsContent token={token}/>} />
					<Route path="list"      element={<PersonsContent token={token}/>} />
					<Route path="add"       element={<PersonAdd token={token} />} />
					<Route path=":personId" element={<PersonUpdate token={token}/>} />
				</Routes>
			</div>
		</div>
	)

}
