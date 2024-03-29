import React from 'react'
import {Link} from 'react-router-dom'

import styles from './PersonsMenu.module.css'

var MenuItem = ({path, text}) => {
	return (
		<>
			<Link className={styles.MenuItem} to={path}>
				<span>{text}</span>
			</Link>
		</>
	)
}


export default ({token}) => {

	return (
		<div className={styles.TopMenu}>
			<MenuItem     text="Список"      path="/persons/list"/>
			<MenuItem     text="Добавить"    path="/persons/add"/>
		</div>
	)
}

