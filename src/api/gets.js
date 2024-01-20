import {server} from './settings.js'

let getGameRaces = async () => {
	return await fetch (server+"/api/CharLists/Races").then(e=>e.json());
}

let getGameClasses = async () => {
	return await fetch (server+"/api/CharLists/Classes").then(e=>e.json());
}

let getBackgrounds = async () => {
	return await fetch (server+"/api/CharLists/Backgrounds").then(e=>e.json());
}

let getAlignments = async () => {
	return await fetch (server+"/api/CharLists/Alignments").then(e=>e.json());
}

let getGameRace = async (id) => {
	return await fetch (server+"/api/CharLists/Race/"+id).then(e=>e.json());
}

let getGameClass = async (id) => {
	return await fetch (server+"/api/CharLists/Class/"+id).then(e=>e.json());
}

let getBackground = async (id) => {
	return await fetch (server+"/api/CharLists/Background/"+id).then(e=>e.json());
}

let getAlignment = async (id) => {
	return await fetch (server+"/api/CharLists/Alignment/"+id).then(e=>e.json());
}

export {getGameRaces, getGameClasses, getBackgrounds, getAlignments, getGameRace, getGameClass, getBackground, getAlignment}
