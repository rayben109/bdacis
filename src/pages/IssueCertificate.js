import server from './../assets/server.png'
import rubik from './../assets/rubik.png'
import { FaUser, FaImage, FaCertificate } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function IssueCertificate(){
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
						<Link to="/organization-profile"><span><FaUser/></span><span>Profile</span>
						<span>
						</span></Link>
					</li>
					<li>
						<Link to="/organization-certificate-gallery"><span><AiOutlinePicture/></span><span>Certificate Gallery</span>
						<span>
						</span></Link>
					</li>
					<li>
						<Link to="/issue-certificate" className="active"><span><FaCertificate /></span><span>Issue Certificate</span>
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
				<h3>Issue Certificate</h3>
				<form className="form-control bgWhite ic">
						<input className="input" type="text" placeholder="Enter Issuer"/>
						<input className="input" type="text" placeholder="Enter Recepient's First Name"/>
						<input className="input" type="text" placeholder="Enter Recepient's Middle Name"/>
						<input className="input" type="text" placeholder="Enter Recepient's Last Name"/>
						<input className="input" type="text" placeholder="Enter Certificate Number"/>
						<input className="input" type="text" placeholder="Enter Recepient's Certificate Name"/>
						<input className="input" type="date" placeholder="Enter Month and Date"/>
						<input type="submit" className="form-submit" value="Submit"/>
						</form>
			</main>
		</div>
	</div>
)
}