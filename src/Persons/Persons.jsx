import React, {useState, useEffect} from 'react'

import PersonsMenu from './Menu.jsx'
import PersonsContent from './Content.jsx'

import styles from './Persons.module.css'

export default ({token}) => {
	return (
		<div className={styles.Persons}>
			<PersonsMenu token={token} />
			<PersonsContent token={token}/>
		</div>
	)

}
