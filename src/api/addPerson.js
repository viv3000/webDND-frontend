import {server} from './settings.js'

export default async (
	token, 
	name, description, 
	strength, dexterity, constitution, intelegency, wisdom, charisma, 
	gameClassMain, gameRace,
	background = null, 
	alignment = null, 
	img = null ) => {
	let optioanalData = `${background == null ? '' : `&background=${background}`}${alignment == null ? '' : `&alignment=${alignment}`}${img == null ? '' : `&img=${img}`}`
	console.log(`
fetch('http://192.168.0.25:8000/api/CharLists/Add', {
		method: 'POST',
		headers: {
			'Authorization': 'Token ${token}',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: 'name=${name}&description=${description}&strength=${strength}&dexterity=${dexterity}&constitution=${constitution}&intelegency=${intelegency}&wisdom=${wisdom}&charisma=${charisma}&gameClassMain=${gameClassMain}&gameRace=${gameRace}${optioanalData}'
`
	);
	return fetch('http://192.168.0.25:8000/api/CharLists/Add', {
		method: 'POST',
		headers: {
			'Authorization': `Token ${token}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: `name=${name}&description=${description}&strength=${strength}&dexterity=${dexterity}&constitution=${constitution}&intelegency=${intelegency}&wisdom=${wisdom}&charisma=${charisma}&gameClassMain=${gameClassMain}&gameRace=${gameRace}${optioanalData}`
	}).then(data => data.json());
}
