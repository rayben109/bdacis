import server from './../assets/server.png';
import rubik from './../assets/rubik.png';
import { FaUser, FaImage, FaCertificate } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function CertificateTransfer(){
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
						<Link to="/issue-certificate"><span><FaCertificate /></span><span>Issue Certificate</span>
						<span>
						</span></Link>
					</li>
					<li>
						<Link to="/certificate-transfer" className="active"><span className="las la-sync"></span><span>Certificate Transfer</span>
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
				<h3>Certificate Transfer</h3>
				<form className="form-control bgWhite ic">
						<input className="input" type="text" placeholder="Enter Certificate Number"/>
						<input type="submit" className="form-submit" value="Check Verification"/>
						</form>
			</main>
		</div>
	</div>
)
}