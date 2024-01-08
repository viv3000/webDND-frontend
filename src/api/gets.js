import {server} from './settings.js'

let getRaceClass = async () => {
	return await fetch (server+"/api/CharLists/Races").then(e=>e.json());
}

let getGameClass = async () => {
	return await fetch (server+"/api/CharLists/Classes").then(e=>e.json());
}

let getBackgrounds = async () => {
	return await fetch (server+"/api/CharLists/Backgrounds").then(e=>e.json());
}

let getAlignments = async () => {
	return await fetch (server+"/api/CharLists/Alignments").then(e=>e.json());
}


export {getGameClass, getRaceClass, getBackgrounds, getAlignments}
