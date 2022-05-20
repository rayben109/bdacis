import server from './../assets/server.png';
import rubik from './../assets/rubik.png';
import { FaUser, FaImage, FaCertificate } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function OrganizationProfile(){
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
						<Link to="/organization-profile" className="active"><span><FaUser/></span><span>Profile</span>
						<span>
						</span></Link>
					</li>
					<li>
						<Link to="/organization-certificate-gallery"><span><AiOutlinePicture/></span><span>Certificate Gallery</span>
						<span>
						</span></Link>
					</li>
					<li>
						<Link to="/issue-certificate"><span><FaCertificate /></span><span>Issue Certificate</span>
						<span>
						</span></Link>
					</li>
					<li>
						<Link to="/certificate-transfer"><span className="las la-sync"></span><span>Certificate Transfer</span>
						<span>
						</span></Link>
					</li>
					<li>
						<Link to="/organization-certificate-requests"><span className="las la-th-list"></span><span>Certificate Requests</span>
						<span>
						</span></Link>
					</li>
				</ul>
			</div>
		</div>

		<div className="main-content">
			<main>
				<h3>Organization Profile</h3>
				<form className="form-control ic bgWhite">
						<h4> Edit Organization Information</h4>
						<input className="input" type="text" placeholder="Enter Network Admin Name"/>

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