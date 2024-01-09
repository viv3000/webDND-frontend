import {server} from './settings.js'

export default async (token, id) => {

	return fetch(server+"/api/CharLists/"+id, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': 'Token '+token
		},
	}).then(data => data.json());
}
