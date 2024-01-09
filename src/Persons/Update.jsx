import React, {useState, useEffect, Redirect} from 'react'

import {getGameClass, getRaceClass, getBackgrounds, getAlignments} from '../api/gets.js'
import getPerson from '../api/getPerson.js'
import updatePerson from '../api/updatePerson.js'
import deletePerson from '../api/deletePerson.js'
import {server} from '../api/settings.js'

import {useParams, redirect, useNavigate} from 'react-router-dom'

import {errorAlert, successAlert} from '../alert.js'

import {TextInputRequired, CharacteristicInputRequired, Dropdown, TextAreaInputRequired, ImgInput} from '../Forms/Elements.jsx'

import styles from './Update.module.css'

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
					state={strength} text="Сила"
					name="strength"
					setFunc={setStrength}
					className={styles.num} />
			<CharacteristicInputRequired
					state={dexterity} 
					text="Ловкость"
					name="dexterity"
					setFunc={setDexterity}
					className={styles.num} />
			<CharacteristicInputRequired
					state={constitution} 
					text="Телосложение"
					name="constitution"
					setFunc={setConstitution}
					className={styles.num} />
			<CharacteristicInputRequired
					state={intelegency}
					text="Интелект"
					name="intelegency"
					setFunc={setIntelegency}
					className={styles.num} />
			<CharacteristicInputRequired 
					state={wisdom}
					text="Мудрость"
					name="wisdom"
					setFunc={setWisdom}
					className={styles.num} />
			<CharacteristicInputRequired
					state={charisma}
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

	let param = useParams()

	useEffect(_ => {
		getPerson(token, param.personId).then(d => {
			let data = d[0]
			setName(data.name)
			setDescription(data.description)
			setRace(data.gameRace)
			setGameClass(data.gameClassMain)
			setBackground(data.background)
			setAlignment(data.alignment)
			setStrength(data.strength)
			setDexterity(data.dexterity)
			setConstitution(data.constitution)
			setIntelegency(data.intelegency)
			setWisdom(data.wisdom)
			setCharisma(data.charisma)
			setImg(server+data.img)
			console.log(race)
		})
	}, [])


	const [gameClasses, setGameClasses] = useState([]);
	const [gameRaces, setGameRaces] = useState([]);
	const [backgrounds, setBackgrounds] = useState([]);
	const [alignments, setAlignments] = useState([]);

	const handleSubmit = async e => {
		e.preventDefault()
		updatePerson(
			param.personId,
			token, 
			name, description, 
			strength, dexterity, constitution, intelegency, wisdom, charisma, 
			gameClass, race,
			background,
			alignment,
			img
		).then( _ => {successAlert("Персонаж изменен!"); navigate("../../persons/list")}
		).catch(e => errorAlert(e))
	}
	let navigate = useNavigate()
	const deleteHandle = async e => {
		deletePerson(token, param.personId)
			.then(_=>{successAlert("Персонаж удален!"); navigate("../../persons/list")})
			.catch(e=>errorAlert(e))
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
						<TextInputRequired text="Имя" name="name" setFunc={setName} state={name} className={styles.name} />
						<div className={styles.headerInformationGridWrapper}>
							<Dropdown text="Класс"        dict={classDict}      setFunc={setGameClass}  state={gameClass} className={styles.gameClass} />
							<Dropdown text="Предыстория"  dict={backgroundDict} setFunc={setBackground} state={background} className={styles.background} />
							<Dropdown text="Раса"         dict={raceDict}       setFunc={setRace}       state={race} className={styles.race} />
							<Dropdown text="Мировозрение" dict={alignmentsDict} setFunc={setAlignment}  state={alignment} className={styles.alignment} />
						</div>
					</div>
					<div className={styles.bodyGridWrapper}>
						<TextAreaInputRequired   text="Описание"     name="description"    setFunc={setDescription} state={description} className={styles.num} />
						<div className={styles.bodyNoDescription}>
							<Characteristics
								strength={strength} dexterity={dexterity} constitution={constitution} intelegency={intelegency} wisdom={wisdom} charisma={charisma}
								setStrength={setStrength} setDexterity={setDexterity} setConstitution={setConstitution} setIntelegency={setIntelegency} setWisdom={setWisdom} setCharisma={setCharisma} />
							<div className={styles.Img}>
								<ImgInput text="Изображение" name="img" setFunc={setImg} className={styles.ImgInput} />
								{
									img &&
									img.path != undefined ?
									<img src={img.path} />
									:
									<img src={img} />
								}
							</div>
						</div>
					</div>
				</div>
				<br/>
				<br/>
				<button type="submit">Изменить</button>
				<button type="button" onClick={e=>{confirm("Вы точно хотите удалить персонажа?") ? deleteHandle(e) : _}}>Удалить</button>
			</form>
		</>
	)
}

