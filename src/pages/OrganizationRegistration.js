import server from './../assets/server.png';
import { 
	MdHowToReg,
	MdLock,
	MdLockOutline,
	MdAccountCircle,
	MdCalendarToday,
	MdPerson,
	MdOutlineLaptopMac
} from "react-icons/md";
import { Link } from "react-router-dom";

export default function StudentRegistration(){
	return(
		<div className="App-container">
			<div className="row">
				<div className="column-left">
					<img src={server} alt="Server"/>
				</div>
				<div className="column-right">
				<h1 className="App-name">BDACIS</h1>
					<form className="form-control">
						<h3> Organization Registration</h3>
						<div className="form-input">
						<span className="icon"><MdPerson/></span>
						<input className="input" type="text" placeholder="Enter Organization Name"/>
						</div>

						<div className="form-input">
						<span className="icon"><MdOutlineLaptopMac/></span>
						<input className="input" type="text" placeholder="Enter Network Admin Name"/>
						</div>

						<div className="form-input">
						<span className="icon"><MdLockOutline/></span>
						<input className="input" type="password" placeholder="Enter Password"/>
						</div>

						<div className="form-input">
						<span className="icon"><MdLock/></span>
						<input className="input" type="password" placeholder="Confirm Password"/>
						</div>

						<Link to="/organization-dashboard"><input type="submit" className="form-submit" value="Register"/></Link>
						</form>
				</div>
			</div>
		</div>
		)
}