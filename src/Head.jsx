import React from 'react'
import {Link} from "react-router-dom"

import styles from './Head.module.css'


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

var Topnav = ({token}) => {
	return (
		<div className={styles.TopMenu}>
			<MainMenuItem text="Home"  path="/home"/>
			<MenuItem text="Вход"    path="/auth"/>
			{token ? 
				(
					<>
						<MenuItem text="Персонажи" path="/persons"/>
						<MenuItem text="Сессии"    path="/sessions"/>
					</>
				) 
				: 
				(<></>)
			}

		</div>
	)
}

export default ({token}) => {

	return(
		<div className={styles.Head}>
			<Link to="/"><h1>Web--DnD</h1></Link>
			<Topnav token={token}/>

		</div>
	)
}

