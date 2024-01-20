import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {server} from '../api/settings.js'

import styles from './Content.module.css'

import getPersons from '../api/getPersons.js'
import { getGameClass, getGameRace, getAlignment, getBackground } from '../api/gets.js'

import Alignment from '../assets/alignments/alignment.jsx'

import unknow from '../assets/races/unknow.svg'

let ApiSvg = ({id, getApi, defaultValue}) => {
	const [img, setImg] = useState(defaultValue);
	const [title, setTitle] = useState();

	useEffect(_=>{
		getApi(id).then(e=>{
			setImg(server+e[0].img)
			setTitle(e[0].title)
		})
	}, [])

	return (
		<>
			<img src={img} alt="" title={title}/> 
		</>)
}

let PersonCard = ({person}) => {
	const [titleAlignment, setTitleAlignment] = useState();
	useEffect(() => {
		getAlignment(person.alignment)
			.then(e=>{
				console.log(e)
				setTitleAlignment(e[0].title)
			})
	}, [titleAlignment] )



	return (
		<Link to={"/persons/"+person.id} className={styles.PersonCard}>
			<img src={server+person.img} />
			<h3>{person.name}</h3>
			<span>{person.description}</span>
			<div className={styles.StatusBar}>
				<ApiSvg id={person.gameClassMain} getApi={getGameClass} defaultValue={unknow}/>
				<Alignment number={person.alignment-1} title={titleAlignment}/>
				<ApiSvg id={person.background} getApi={getBackground} defaultValue={unknow}/>
				<ApiSvg id={person.gameRace} getApi={getGameRace} defaultValue={unknow}/>
			</div>
		</Link>
	)
}


export default ({token}) => {
	const [persons, setPersons] = useState();

	useEffect(() => {
		getPersons(token).then(data => setPersons(data))
	}, [token])

	return (
		<div className={styles.Content}>
			{persons && 
			persons.map(person => 
				<PersonCard person={person}/>
			)
			}
		</div>
	)
}

