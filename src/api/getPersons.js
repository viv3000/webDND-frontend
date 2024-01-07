import {server} from './settings.js'

export default async (token) => {
	return fetch(server+"/api/CharLists/", {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': 'Token '+token
		},
	}).then(data => data.json());
}
