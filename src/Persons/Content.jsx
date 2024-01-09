import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {server} from '../api/settings.js'

import styles from './Content.module.css'

import getPersons from '../api/getPersons.js'

import Alignment from '../assets/alignments/alignment.jsx'

let PersonCard = ({person}) => {
	console.log("---------------------------------------------------------");
	console.log(person);
	return (
		<a href="" className={styles.PersonCard}>
			<img src={server+person.img} />
			<h3>{person.name}</h3>
			<span>{person.description}</span>
			<div className={styles.StatusBar}>
				<Alignment number={person.alignment-1} title={person.alignment} />
			</div>
		</a>
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

