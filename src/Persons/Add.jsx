import React, {useState, useEffect} from 'react'
import getToken from '../api/getToken.js'
import getGameClass from '../api/getGameClass.js'

import {errorAlert, successAlert} from '../alert.js'

import {TextInput, Dropdown} from '../Forms/Elements.jsx'

let setPerson = async () => {
	return undefined;
}

export default ({token}) => {
	const [name, setName] = useState()
	const [description, setDescription] = useState()
	const [race, setRace] = useState()
	const [gameClass, setGameClass] = useState()
	const [background, setBackground] = useState()
	const [alignment, setAlignment] = useState()
	const [strength, setStrength] = useState()
	const [dexterity, setDexterity] = useState()
	const [constitution, setConstitution] = useState()
	const [intelegency, setIntelegency] = useState()
	const [wisdom, setWisdom] = useState()
	const [charisma, setCharisma] = useState()

	const [gameClasses, setGameClasses] = useState([]);

	const handleSubmit = async e => {
		e.preventDefault()
		setPerson(login, password).then(e=>{
			if(e==undefined){
				errorAlert("Что то пошло не так!\nОбратитесь к богу!")
			}else{
				successAlert("Персонаж создан!")
			}
		})
	}

	useEffect(()=>{
		let dict = new Array();
		getGameClass().then(data=>{
			data.map(e=>
				dict.push({
					key:e.id,
					text:e.title,
					description:e.description
				})
			)
			setGameClasses(dict)
		})
	},[])

	let classDict      = gameClasses;
	let raceDict       = [{key:"1", text:"Человек"}, {key:"2", text:"Нелюдь"} ]
	let backgroundDict = [{key:"1", text:"Ровный"}, {key:"2", text:"Попущенный"} ]

	return (
		<>
			<form onSubmit={handleSubmit}>
				<TextInput text="Имя"          name="name"           setFunc={setName} />
				<TextInput text="Описание"     name="description"    setFunc={setDescription} />
				<Dropdown  text="Класс"        dict={classDict} setFunc={setGameClass} />
				<Dropdown  text="Раса"         dict={raceDict} setFunc={setRace} />
				<Dropdown  text="Предыстория"  dict={backgroundDict} setFunc={setBackground} />
				<TextInput text="Сила"         name="strength"       setFunc={setStrength} />
				<TextInput text="Ловкость"     name="dexterity"      setFunc={setDexterity} />
				<TextInput text="Телосложение" name="constitution"   setFunc={setConstitution} />
				<TextInput text="Интелект"     name="intelegency"    setFunc={setIntelegency} />
				<TextInput text="Мудрость"     name="wisdom"         setFunc={setWisdom} />
				<TextInput text="Харизма"      name="charisma"       setFunc={setCharisma} />
				<br/>
				<br/>
				<button type="submit">Добавить</button>
			</form>
		</>
	)
}
