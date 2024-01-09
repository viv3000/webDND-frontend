import React from 'react'

export default ({number, title}) => {
	let d = [
		{back: "blue", for: "white", text: "ЗД", textColor: "black"},
		{back: "blue", for: "grey",  text: "ЗН", textColor: "white"},
		{back: "blue", for: "red",   text: "ЗЗ", textColor: "yellow"},
		
		{back: "black", for: "white", text: "НД", textColor: "black"},
		{back: "black", for: "grey", text: "НН", textColor: "white"},
		{back: "black", for: "red",  text: "НЗ", textColor: "yellow"},
		
		{back: "violet", for: "white", text: "ХД", textColor: "black"},
		{back: "violet", for: "grey",  text: "ХН", textColor: "white"},
		{back: "violet", for: "red",   text: "ХЗ", textColor: "yellow"}
	]
	console.log("askjdfhalskdfhlasdkfgasldgkasfdhj");
	console.log(number);
	console.log(d);
	console.log(d[number]);
	let e = d[number];

	return (
		<svg version="1.1"
			width="30" height="30"
			xmlns="http://www.w3.org/2000/svg">
			<rect width="100%" height="100%" fill={e.back} />
			<circle cx="15" cy="15" r="8" fill={e.for} />
			<text x="15" y="15" font-size="9" text-anchor="middle" fill={e.textColor}>{e.text[0]}</text>
			<text x="15" y="22" font-size="9" text-anchor="middle" fill={e.textColor}>{e.text[1]}</text>
		</svg>
	)
}
