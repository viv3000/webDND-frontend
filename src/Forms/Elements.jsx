import React from 'react'

let TextInput = ({text, name, setFunc}) => {
	return (
		<>
			<label>
				<p>{text}</p>
				<input type="text" name={name} onChange={e => setFunc(e.target.value)}/>
			</label>
		</>
	)
}

let Dropdown = ({text, dict, setFunc}) => {
	return (
		<>
			<label>
				<p>{text}</p>
				<select onChange={e => setFunc(e.target.value)}>
					{
						dict.map(value => 
							<option value={value.key} title={value.description}>{value.text}</option>
						)
					}
				</select>
			</label>
		</>
	)
}

export {TextInput, Dropdown}
