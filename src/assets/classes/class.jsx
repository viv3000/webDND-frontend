import React from 'react'

import Artificer from './Artificer.svg'
import Barbarian from './Barbarian.svg'
import Bard from './Bard.svg'
import Cleric from './Cleric.svg'
import Druid from './Druid.svg'
import Fighter from './Fighter.svg'
import Monk from './Monk.svg'
import Paladin from './Paladin.svg'
import Ranger from './Ranger.svg'
import Rogue from './Rogue.svg'
import Sorcerer from './Sorcerer.svg'
import Warlock from './Warlock.svg'
import Wizard from './Wizard.svg'

export default ({number}) => {
	let d = [
Fighter, Bard, Barbarian, Wizard, Druid, Cleric, Artificer, Warlock, Monk, Paladin, Rogue, Ranger, Sorcerer,
	]

	return (
		<img src={d[number]} />
	)
}

