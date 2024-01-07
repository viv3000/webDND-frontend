import React, {useState, useEffect} from 'react'
import getToken from '../api/getToken.js'

import {errorAlert, successAlert} from '../alert.js'

export default ({setToken}) => {
	const [login, setLogin] = useState()
	const [password, setPassword] = useState()

	const handleSubmit = async e => {
		e.preventDefault()
		getToken(login, password).then(e=>{
			if(e==undefined){
				errorAlert("Не верные логин или пароль!")
			}else{
				successAlert("Успешный вход!")
				setToken(e)
			}
		})
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					<p>Login</p>
					<input type="text" name="login" onChange={e => setLogin(e.target.value)}/>
				</label>
				<label>
					<p>Password</p>
					<input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
				</label>
				<button type="submit">Log in</button>
				<button type="button" onClick={() => setToken(null)}>Log out</button>
			</form>
		</>
	)
}
