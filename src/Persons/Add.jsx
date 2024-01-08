import React, {useState, useEffect} from 'react'

import {getGameClass, getRaceClass, getBackgrounds, getAlignments} from '../api/gets.js'
import addPerson from '../api/addPerson.js'

import {errorAlert, successAlert} from '../alert.js'

import {TextInputRequired, NumberInputRequired, Dropdown, TextAreaInputRequired} from '../Forms/Elements.jsx'

import styles from './Add.module.css'

let createDisclousureApiDictLambda = (getApi, setFunc) => {
	return ()=>{
		let dict = new Array();
		getApi().then(data=>{
			data.map(e=>
				dict.push({
					key:e.id,
					text:e.title,
					description:e.description
				})
			)
			setFunc(dict)
		})
	}
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
	const [img, setImg] = useState()

	const [gameClasses, setGameClasses] = useState([]);
	const [gameRaces, setGameRaces] = useState([]);
	const [backgrounds, setBackgrounds] = useState([]);
	const [alignments, setAlignments] = useState([]);

	const handleSubmit = async e => {
		e.preventDefault()
		addPerson(
			token, 
			name, description, 
			strength, dexterity, constitution, intelegency, wisdom, charisma, 
			gameClass, race,
			background,
			alignment,
			img
		).then(e=>{
			if(e.ok=='False'){
				errorAlert("Что то пошло не так!\nОбратитесь к богу!")
			}else{
				successAlert("Персонаж создан!")
			}
		})
	}

	useEffect(createDisclousureApiDictLambda(getGameClass, setGameClasses),[])
	useEffect(createDisclousureApiDictLambda(getRaceClass, setGameRaces),[])
	useEffect(createDisclousureApiDictLambda(getBackgrounds, setBackgrounds),[])
	useEffect(createDisclousureApiDictLambda(getAlignments, setAlignments),[])

	let classDict      = gameClasses
	let raceDict       = gameRaces
	let backgroundDict = backgrounds
	let alignmentsDict = alignments

	return (
		<>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.gridWrapper}>
					<div className={styles.headGridWrapper}>
						<TextInputRequired text="Имя" name="name" setFunc={setName} className={styles.name} />
						<div className={styles.headerInformationGridWrapper}>
							<Dropdown text="Класс"        dict={classDict}      setFunc={setGameClass}  className={styles.gameClass} />
							<Dropdown text="Предыстория"  dict={backgroundDict} setFunc={setBackground} className={styles.background} />
							<Dropdown text="Раса"         dict={raceDict}       setFunc={setRace}       className={styles.race} />
							<Dropdown text="Мировозрение" dict={alignmentsDict} setFunc={setAlignment}  className={styles.alignment} />
						</div>
					</div>
					<div className={styles.bodyGridWrapper}>
						<TextAreaInputRequired   text="Описание"     name="description"    setFunc={setDescription}  className={styles.num} />
						<div className={styles.bodyCharacteristicsGridWrapper}>
							<NumberInputRequired text="Сила"         name="strength"       setFunc={setStrength}     className={styles.num} />
							<NumberInputRequired text="Ловкость"     name="dexterity"      setFunc={setDexterity}    className={styles.num} />
							<NumberInputRequired text="Телосложение" name="constitution"   setFunc={setConstitution} className={styles.num} />
							<NumberInputRequired text="Интелект"     name="intelegency"    setFunc={setIntelegency}  className={styles.num} />
							<NumberInputRequired text="Мудрость"     name="wisdom"         setFunc={setWisdom}       className={styles.num} />
							<NumberInputRequired text="Харизма"      name="charisma"       setFunc={setCharisma}     className={styles.num} />
						</div>
					</div>
				</div>
				<br/>
				<br/>
				<button type="submit">Добавить</button>
			</form>
		</>
	)
}

