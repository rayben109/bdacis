import server from './../assets/server.png';
import rubik from './../assets/rubik.png';
import { FaUser, FaImage, FaCertificate } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function StudentProfile(){
	return(
		<div className="App-dashboard">
		

	<input type="checkbox" name="" id="nav-toggle"/>
		<div className="sidebar">
			<div className="sidebar-brand">
			<span><img src={rubik} alt="logo"/></span>
				<h2> <span className="App-name"></span> <span>Dashboard</span></h2>
			</div>


			<div className="sidebar-menu">
				<ul>
					<li>
						<Link to="/student-profile"  className="active"><span className="las la-user"></span><span>Profile</span>
						<span>
						</span></Link>
					</li>
					<li>
						<Link to="/student-certificate-gallery"><span className="las la-image"></span><span>Certificate Gallery</span>
						<span>
						</span></Link>
					</li>
					<li>
						<Link to="/student-certificate-requests"><span className="las la-certificate"></span><span>Certificate Request</span>
						<span>
						</span></Link>
					</li>
					<li>
						<Link to="/payment"><span className="las la-credit-card"></span><span>Payment</span>
						<span>
						</span></Link>
					</li>
				</ul>
			</div>
		</div>

		<div className="main-content">
			<main>
				<h3>User Profile</h3>
				<form className="form-control ic bgWhite">
						<h4> Edit User Information</h4>
						<input className="input" type="text" placeholder="Enter Full Name"/>
						<input className="input" type="text" placeholder="Enter Reg No"/>
						<input className="input" type="text" placeholder="Enter Graduation Year"/>

						<h4> Change Password</h4>
						<input className="input" type="password" placeholder="Enter Old Password"/>
						<input className="input" type="password" placeholder="Enter New Password"/>
						<input className="input" type="password" placeholder="Confirm New Password"/>
						<input type="submit" className="form-submit" value="Save Changes"/>
						</form>
			</main>
		</div>
	</div>
)
}