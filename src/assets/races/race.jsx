import React from 'react'

import AirGenasi from './AirGenasi.svg'
import Drow from './Drow.svg'
import EarthGenasi from './EarthGenasi.svg'
import Firbolg from './Firbolg.svg'
import FireGenasi from './FireGenasi.svg'
import ForestGnome from './ForestGnome.svg'
import HighElf from './HighElf.svg'
import Human from './Human.svg'
import Tiefling from './Tiefling.svg'
import Triton from './Triton.svg'
import WaterGenasi from './WaterGenasi.svg'
import YuanTi from './Yuan-Ti.svg'
import Orc from './Orc.svg'
import Dwarves from './Dwarf.svg'

export default ({number}) => {
	let d = [
		Human, Dwarves, ForestGnome, HighElf, HighElf, ForestGnome, Orc, 
		EarthGenasi, Drow, FireGenasi, Firbolg, AirGenasi, YuanTi, Triton, Tiefling, WaterGenasi
	]

	return (
		<img src={d[number]} />
	)
}

