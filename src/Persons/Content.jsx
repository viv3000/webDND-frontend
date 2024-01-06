import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

let backendServer = 'http://127.0.0.1:8000'

let getPersons = (token) => {
	return fetch(backendServer+"/api/CharLists/", {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': 'Token '+token
		},
	}).then(data => data.json());
}

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
	let PersonLists;

	useEffect(() => {
		getPersons(token).then(data=>setPersons(data))
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

