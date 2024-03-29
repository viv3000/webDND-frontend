import React from 'react'
import {Link} from "react-router-dom"

import styles from './Head.module.css'
import dndDice from './assets/dnd-dice.svg'


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
			<Link to="/"><img src={dndDice} width="100" height="100" alt="Web--DnD" /></Link>
			<div></div>
			<Topnav token={token}/>
		</div>
	)
}

