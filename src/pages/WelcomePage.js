import React, {useState} from 'react';
import server01 from './../assets/server.png';
import { Link } from "react-router-dom";

export default function StudentRegistration(){
	const [userType, setUserType] = useState(0);

	return(
		<div className="App-container">
			<div className="row">
				<div className="column-left">
					<img src={server01} alt="Server"/>
				</div>
				<div className="column-right">
					<h1 className="App-name">BDACIS</h1>
					<form className="form-control">
						<h2> Welcome </h2>
						<p>Embrancing Blockchain Tech</p>
						<div className="form-input">
						<select
							value={userType}
							onClick={(e)=> {
            console.log("Current Value", userType)
            setUserType(e.target.value)}}>
							<option>Select role </option>
							<option value="/student-registration">Student </option>
							<option value="/organization-registration">Organization </option>
						</select>
						</div>
						<Link to={userType}><input type="submit" className="form-submit" value="Register"/></Link>
						</form>
				</div>
			</div>
		</div>
		)
}