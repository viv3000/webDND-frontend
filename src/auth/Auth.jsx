import React, {useState, useEffect} from 'react';

var backendServer = "http://127.0.0.1:8000";

var getToken = async (login, password) => {
	return fetch(backendServer+"/api-token-auth/", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: "username="+login+"&password="+password

	}).then(data => data.json()).then(data => data.token);
}

export default ({setToken}) => {
	const [login, setLogin] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async e => {
		e.preventDefault();
		getToken(login, password).then(e=>setToken(e));
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
