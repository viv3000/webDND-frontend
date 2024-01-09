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

let TextInput = ({text, name, setFunc}) => {
	return (
		<>
			<label className={styles.inp}>
				<input
					type="text"
					name={name}
					onChange={e => setFunc(e.target.value) } />
				<span className={styles.label}>{text}</span>
				<span className={styles.focusBg}></span>
			</label>
		</>
	)
}

let TextAreaInputRequired = ({text, name, setFunc}) => {
	return (
		<>
			<label className={styles.textarea}>
				<p>{text}</p>
				<textarea
					required
					rows="10"
					type="text"
					name={name}
					onChange={e => setFunc(e.target.value)} />
			</label>
		</>
	)
}

let TextInputRequired = ({text, name, setFunc}) => {
	return (
		<>
			<label className={styles.inp}>
				<input
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

let CharacteristicInputRequired = ({text, name, defaultValue, setFunc}) => {
	const [value, setValue] = useState();
	return (
		<>			
			<label className={styles.inp}>
				<input
					required
					className={styles.inpCharacteristic}
					name={name}
					value={defaultValue}
					onKeyDown={(event) => {
						if (!/[0-9]/.test(event.key)  && event.key!="Backspace" && event.key!="Tab") event.preventDefault();
						else if ((parseInt(value*10) + parseInt(event.key)) > 20) event.preventDefault();
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

let Dropdown = ({text, dict, setFunc}) => {
	if (dict[0] != undefined)
		setFunc(dict[0].key);
	return (
		<div className={styles.inp}>
			<select onChange={e => setFunc(e.target.value)}>
				{
					dict.map(value => 
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


export {TextInput, TextInputRequired, CharacteristicInputRequired, Dropdown, TextAreaInputRequired, ImgInput}
