import React, {useState, useEffect} from 'react'

import {useNavigate} from 'react-router-dom'

import {getGameClasses, getGameRaces, getBackgrounds, getAlignments} from '../api/gets.js'
import addPerson from '../api/addPerson.js'

import {errorAlert, successAlert} from '../alert.js'

import {TextInputRequired, CharacteristicInputRequired, Dropdown, TextAreaInputRequired, ImgInput, CharacteristicsHardInput} from '../Forms/Elements.jsx'

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

let Characteristics2 = ({
	strength, dexterity, constitution, intelegency, wisdom, charisma,
	setStrength, setDexterity, setConstitution, setIntelegency, setWisdom, setCharisma
}) => {
	const [score, setScore] = useState(27);

	return (
		<>
			<CharacteristicsHardInput
				text="Сила"
				name="strength"
				score={score} setScore={setScore}
				char={strength} setChar={setStrength} />
			<CharacteristicsHardInput
				text="Ловкость"
				name="dexterity"
				score={score} setScore={setScore}
				char={dexterity} setChar={setDexterity}
				className={styles.num} />
			<CharacteristicsHardInput
				text="Телосложение"
				name="constitution"
				score={score} setScore={setScore}
				char={constitution} setChar={setConstitution}
				className={styles.num} />
			<CharacteristicsHardInput
				text="Интелект"
				name="intelegency"
				score={score} setScore={setScore}
				char={intelegency} setChar={setIntelegency}
				className={styles.num} />
			<CharacteristicsHardInput
				text="Мудрость"
				name="wisdom"
				score={score} setScore={setScore}
				char={wisdom} setChar={setWisdom}
				className={styles.num} />
			<CharacteristicsHardInput
				text="Харизма"
				name="charisma"
				score={score} setScore={setScore}
				char={charisma} setChar={setCharisma}
				className={styles.num} />
			<p>{score}</p>
		</>
	)
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
	const [race, setRace] = useState(null)
	const [gameClass, setGameClass] = useState(null)
	const [background, setBackground] = useState(null)
	const [alignment, setAlignment] = useState(null)

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

	const navigate = useNavigate();

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
		).then( _ => successAlert("Персонаж создан!"), navigate("../list")
		).catch(e => errorAlert(e))
	}

	useEffect(createDisclousureApiDictLambda(getGameClasses, setGameClasses), [])
	useEffect(createDisclousureApiDictLambda(getGameRaces,   setGameRaces),   [])
	useEffect(createDisclousureApiDictLambda(getBackgrounds, setBackgrounds), [])
	useEffect(createDisclousureApiDictLambda(getAlignments,  setAlignments),  [])

	let classDict      = gameClasses
	let raceDict       = gameRaces
	let backgroundDict = backgrounds
	let alignmentDict  = alignments

	return (
		<>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.gridWrapper}>
					<div className={styles.headGridWrapper}>
						<TextInputRequired text="Имя" name="name" setFunc={setName} className={styles.name} />
						<div className={styles.headerInformationGridWrapper}>
							<Dropdown text="Класс"        dict={classDict}      setFunc={setGameClass}  state={gameClass} className={styles.gameClass} />
							<Dropdown text="Предыстория"  dict={backgroundDict} setFunc={setBackground} state={background} className={styles.background} />
							<Dropdown text="Раса"         dict={raceDict}       setFunc={setRace}       state={race} className={styles.race} />
							<Dropdown text="Мировозрение" dict={alignmentDict} setFunc={setAlignment}  state={alignment} className={styles.alignment} />
						</div>
					</div>
					<div className={styles.bodyGridWrapper}>
						<TextAreaInputRequired   text="Описание"     name="description"    setFunc={setDescription}  className={styles.num} />
						<div className={styles.bodyNoDescription}>
							<Characteristics2
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

