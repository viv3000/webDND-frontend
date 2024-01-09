import {server} from './settings.js'
import axios from "axios";

export default async (
	token, 
	name, description, 
	strength, dexterity, constitution, intelegency, wisdom, charisma, 
	gameClassMain, gameRace,
	background = null, 
	alignment = null, 
	img = null ) => {

	let data = new FormData();
	data.append("name", name)
	data.append("description", description)
	data.append("strength", strength)
	data.append("dexterity", dexterity)
	data.append("constitution", constitution)
	data.append("intelegency", intelegency)
	data.append("wisdom", wisdom)
	data.append("charisma", charisma)
	data.append("gameClassMain", gameClassMain)
	data.append("gameRace", gameRace)
	background && data.append("background", background)
	alignment && data.append("alignment", alignment)
	img.data && data.append("img", img.data)

	return axios({
		method: 'POST',
		url: `${server}/api/CharLists/Add`,
		headers: {
			Authorization: `Token ${token}`,
		},
		data
	}).then(response => response.json)
}


