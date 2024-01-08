import React from 'react'
import styles from './elements.module.css'
import InputNumber from 'react-input-number'

let TextInput = ({text, name, setFunc}) => {
	return (
		<>
			<label className={styles.inp}>
				<input
					type="text"
					name={name}
					onChange={e => setFunc(e.target.value)} />
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

let NumberInputRequired = ({text, name, setFunc}) => {
	return (
		<>			
			<label className={styles.inp}>
				<input
					name={name}
					onKeyDown={(event) => {
						console.log(event.key)
						if (!/[0-9]/.test(event.key) && event.key!="Backspace") event.preventDefault();
					}}
					onChange={e => setFunc(e.target.value)} />
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


export {TextInput, TextInputRequired, NumberInputRequired, Dropdown, TextAreaInputRequired}
