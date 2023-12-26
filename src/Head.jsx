import React from 'react'
import {Link} from "react-router-dom"

import styles from './MenuItem.module.css'


var MenuItem = ({path, text}) => {
	return (
		<>
			<Link className={styles.MenuItem} to={path}>
				<span>{text}</span>
			</Link>
		</>
	)
}

var MainMenuItem = ({path, text}) => {
	return (
		<>
			<Link className={`${styles.MainMenuItem} ${styles.MenuItem}`} to={path}>
				<span>{text}</span>
			</Link>
		</>
	)
}

var Topnav = () => {
	return (
		<div className={styles.TopMenu}>
			<MainMenuItem text="Home"  path="/home"/>
			<MenuItem text="Персонажи" path="/persons"/>
			<MenuItem text="Сессии"    path="/sessions"/>
		</div>
	)
}

export default ({token}) => {

	return(
		<div className={styles.Head}>
			<Link to="/"><h1>Web--DnD</h1></Link>
			<Link to="/auth"><h1>Вход</h1></Link>
			{token ? 
				(<Topnav></Topnav>) 
				: 
				(<span>Вы не зарегестрированы!</span>)
			}
		</div>
	)
}

