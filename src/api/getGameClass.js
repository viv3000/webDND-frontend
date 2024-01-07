import {server} from './settings.js'

export default async () => {
	return await fetch (server+"/api/CharLists/Classes").then(e=>e.json());
}
