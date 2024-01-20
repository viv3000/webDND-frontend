import React from 'react'

export default ({number, title}) => {
	let d = [
		{back: "black", for: "blue", text: "ЗД", textColor: "white"},
		{back: "black", for: "green",  text: "ЗН", textColor: "white"},
		{back: "black", for: "red",   text: "ЗЗ", textColor: "yellow"},
		
		{back: "grey", for: "blue", text: "НД", textColor: "black"},
		{back: "grey", for: "green", text: "НН", textColor: "white"},
		{back: "grey", for: "red",  text: "НЗ", textColor: "yellow"},
		
		{back: "violet", for: "blue", text: "ХД", textColor: "white"},
		{back: "violet", for: "green",  text: "ХН", textColor: "white"},
		{back: "violet", for: "red",   text: "ХЗ", textColor: "yellow"}
	]
	let e = d[number];

	return (
		<a title={title}>
		<svg version="1.1"
			width="30" height="30"
			xmlns="http://www.w3.org/2000/svg">
			<rect width="100%" height="100%" fill={e.back} />
			<circle cx="15" cy="15" r="12" fill={e.for} />
			<text x="15" y="14" fontSize="10" textAnchor="middle" fill={e.textColor}>{e.text[0]}</text>
			<text x="15" y="24" fontSize="10" textAnchor="middle" fill={e.textColor}>{e.text[1]}</text>
		</svg>
		</a>
	)
}
