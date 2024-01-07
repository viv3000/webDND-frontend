import {server} from './settings.js'

export default async (login, password) => {
	return fetch(server+"/api-token-auth/", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: "username="+login+"&password="+password

	}).then(data => data.json()).then(data => data.token);
}

