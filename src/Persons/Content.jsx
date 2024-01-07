import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import getPersons from '../api/getPersons.js'

let PersonCard = ({name, description}) => {
	return (
		<>
			<div>
				<h3>{name}</h3>
				<span>{description}</span>
			</div>
		</>
	)
}


export default ({token}) => {
	const [persons, setPersons] = useState();

	useEffect(() => {
		getPersons(token).then(data=>{setPersons(data); console.log(data);})
	}, [])

	return (
		<>
			{persons ? 
				persons.map(person => 
					<PersonCard name={person.name} description={person.description}/>
				)
				:
				<></>
			}
		</>
	)
}

