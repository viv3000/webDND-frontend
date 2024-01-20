import React from 'react'
import {useState} from 'react'
import styles from './elements.module.css'
import InputNumber from 'react-input-number'

let ImgInput = ({text, name, setFunc}) => {
	let img = {value:null, file:null, data:null};
	return (
		<>
			<label>
				<p>{text}</p>
				<input 
					enctype="multipart/form-data"
					type="file"
					name={name}
					onChange={e => {
						let FR = new FileReader();
						FR.addEventListener("load", function(evt) {
							img.data = e.target.files[0];
							img.file = evt.target.result
							img.path = URL.createObjectURL(e.target.files[0])
							setFunc(img)
						})
						FR.readAsDataURL(e.target.files[0])
					}} />
			</label>
		</>
	)
}

let TextInput = ({state, text, name, setFunc}) => {
	return (
		<>
			<label className={styles.inp}>
				<input
					type="text"
					name={name}
					value={state}
					onChange={e => setFunc(e.target.value) } />
				<span className={styles.label}>{text}</span>
				<span className={styles.focusBg}></span>
			</label>
		</>
	)
}

let TextAreaInputRequired = ({state, text, name, setFunc}) => {
	return (
		<>
			<label className={styles.textarea}>
				<p>{text}</p>
				<textarea
					value={state}
					required
					rows="10"
					type="text"
					name={name}
					onChange={e => setFunc(e.target.value)} />
			</label>
		</>
	)
}

let TextInputRequired = ({state, text, name, setFunc}) => {
	return (
		<>
			<label className={styles.inp}>
				<input
					value={state}
					required
					type="text"
					name={name}
					onChange={e => setFunc(e.target.value)} />
				<span className={styles.label}>{text}</span>
				<span className={styles.focusBg}></span>
			</label>
		</>
	)
}

let CharacteristicInputRequired = ({state, text, name, setFunc}) => {
	const [value, setValue] = useState();
	return (
		<>			
			<label className={styles.inp}>
				<input
					value={state}
					required
					className={styles.inpCharacteristic}
					name={name}
					onKeyDown={(event) => {
						if (!/[0-9]/.test(event.key)  && event.key!="Backspace" && event.key!="Tab") event.preventDefault();
						else if ((parseInt(value*10) + parseInt(event.key)) > 30) event.preventDefault();
					}}
					onChange={e => {
						setFunc(e.target.value) 
						setValue(e.target.value)
					}} />
				<span className={styles.label}>{text}</span>
				<span className={styles.focusBg}></span>
			</label>
		</>
	)
}

let CharacteristicsHardInput = ({text, name, score, setScore, char, setChar}) => {
	let getStep = (ball, positive) => {
		if (positive) {
			if (ball >= -4 && ball <= 4) return 1;
			else if (ball >= 5 && ball <= 10) return 2;
			else if (ball >= 11 && ball <= 22) return 3;
			else return 0;
		}else {
			if (ball >= -3 && ball <= 5) return 1;
			else if (ball >= 6 && ball <= 11) return 2;
			else if (ball >= 12 && ball <= 23) return 3;
			else return 0;
		} 
	}	

	let minus = () => {
		let ball = numToBall(char);
		let step = getStep(ball, false);
		step == 0 ? alert("Минимальное значение 4, максимальное 20") 
			:
		(
			setScore(score+step),
			ball -= step,
			setChar(ballToNum(ball))
		)
	}
	let plus = () => {
		let ball = numToBall(char);
		let step = getStep(ball, true);
		step == 0 ? alert("Минимальное значение 4, максимальное 20") 
			: 
		score-step >= 0 ?
		(
			setScore(score-step),
			ball += step,
			setChar(ballToNum(ball))
		)
		:
			alert("Не хватает баллов!")
		console.log("step: "+step+"score: "+score+"ball: "+ball+"char: "+ballToNum(ball))
	}
	let ballToNum = (ball)  => {
		return ([
			4, 5, 6, 7, 
			8, 9, 10, 11, 12, 13, null, 14, null, 15, null, 
			16, null, null, 17, null, null, 18, null, null, 19, null, null, 20])[ball+4];
	}

	let numToBall = (num)  => {
		return ({
			4: -4, 5: -3, 6: -2, 7: -1, 
			8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9, 
			16: 11, 17: 14, 18: 17, 19: 20, 20: 23 })[num]
	}


	return (
		<>
			<div>
				<label>
					<p>{text}</p>
					<input name={name} readOnly required type="number" value={char}/>
					<button type="button" onClick={_=>{minus()}}>-</button>
					<button type="button" onClick={_=>{plus() }}>+</button>
				</label>
			</div>
		</>
	)
}

let Dropdown = ({state, dict, setFunc}) => {
	if (dict[0] == undefined) return (<select></select>)
	if (state == null){
		setFunc(dict[0].key);
		return (<select></select>)
	}
	return (
		<div className={styles.inp}>
			<select value={state} onChange={e => setFunc(e.target.value)}>
				{
					dict.map(value => 
						parseInt(value.key) == state ?
						<option 
							selected
							key={value.key}
							value={value.key}
							title={value.description}
						>{value.text}</option>
						:
						<option 
							key={value.key}
							value={value.key}
							title={value.description}
						>{value.text}</option>
					)
				}
			</select>
			<hr class="rule"/>
		</div>
	)
}


export {TextInput, TextInputRequired, CharacteristicInputRequired, Dropdown, TextAreaInputRequired, ImgInput, CharacteristicsHardInput}
