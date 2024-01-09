import React, {useState, useEffect} from 'react'

import {getGameClass, getRaceClass, getBackgrounds, getAlignments} from '../api/gets.js'
import addPerson from '../api/addPerson.js'

import {errorAlert, successAlert} from '../alert.js'

import {TextInputRequired, CharacteristicInputRequired, Dropdown, TextAreaInputRequired, ImgInput} from '../Forms/Elements.jsx'

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

let Characteristics = ({
	strength, dexterity, constitution, intelegency, wisdom, charisma,
	setStrength, setDexterity, setConstitution, setIntelegency, setWisdom, setCharisma
	}) => {
	return(
		<div className={styles.bodyCharacteristicsGridWrapper}>
			<CharacteristicInputRequired 
					defaultValue={strength} text="Сила"
					name="strength"
					setFunc={setStrength}
					className={styles.num} />
			<CharacteristicInputRequired
					defaultValue={dexterity} 
					text="Ловкость"
					name="dexterity"
					setFunc={setDexterity}
					className={styles.num} />
			<CharacteristicInputRequired
					defaultValue={constitution} 
					text="Телосложение"
					name="constitution"
					setFunc={setConstitution}
					className={styles.num} />
			<CharacteristicInputRequired
					defaultValue={intelegency}
					text="Интелект"
					name="intelegency"
					setFunc={setIntelegency}
					className={styles.num} />
			<CharacteristicInputRequired 
					defaultValue={wisdom}
					text="Мудрость"
					name="wisdom"
					setFunc={setWisdom}
					className={styles.num} />
			<CharacteristicInputRequired
					defaultValue={charisma}
					text="Харизма"
					name="charisma"
					setFunc={setCharisma}
					className={styles.num} />
		</div>
	)
}

export default ({token}) => {
	const [name, setName] = useState()
	const [description, setDescription] = useState()
	const [race, setRace] = useState()
	const [gameClass, setGameClass] = useState()
	const [background, setBackground] = useState()
	const [alignment, setAlignment] = useState()

	const [strength,     setStrength]     = useState(8)
	const [dexterity,    setDexterity]    = useState(8)
	const [constitution, setConstitution] = useState(8)
	const [intelegency,  setIntelegency]  = useState(8)
	const [wisdom,       setWisdom]       = useState(8)
	const [charisma,     setCharisma]     = useState(8)

	const [img, setImg] = useState(null)

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
		).then( _ => successAlert("Персонаж создан!")
		).catch(e => errorAlert(e))
	}

	useEffect(createDisclousureApiDictLambda(getGameClass,   setGameClasses), [])
	useEffect(createDisclousureApiDictLambda(getRaceClass,   setGameRaces),   [])
	useEffect(createDisclousureApiDictLambda(getBackgrounds, setBackgrounds), [])
	useEffect(createDisclousureApiDictLambda(getAlignments,  setAlignments),  [])

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
						<div className={styles.bodyNoDescription}>
							<Characteristics
								strength={strength} dexterity={dexterity} constitution={constitution} intelegency={intelegency} wisdom={wisdom} charisma={charisma}
								setStrength={setStrength} setDexterity={setDexterity} setConstitution={setConstitution} setIntelegency={setIntelegency} setWisdom={setWisdom} setCharisma={setCharisma} />
							<div className={styles.Img}>
								<ImgInput text="Изображение" name="img" setFunc={setImg} className={styles.ImgInput} />
								{
									img &&
									<img src={img.path} />
								}
							</div>
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

