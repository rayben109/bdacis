import server from './../assets/server.png';
import rubik from './../assets/rubik.png';
import cert1 from './../assets/cert1.jpg';
import cert2 from './../assets/cert2.jpg';
import cert3 from './../assets/cert3.jpg';

import { FaUser, FaImage, FaCertificate } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function StudentCertificateGallery(){
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
						<Link to="/student-profile"><span className="las la-user"></span><span>Profile</span>
						<span>
						</span></Link>
					</li>
					<li>
						<Link to="/student-certificate-gallery"  className="active"><span className="las la-image"></span><span>Certificate Gallery</span>
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
			<div className="recent-card">
				<div className="recent-card-header">
								<h3>Certificate Gallery</h3>
								<button>See all <span className="las la-arrow-right"></span></button>
							</div>
				<div className="row-gallery">
					<img src={cert1} alt="logo"/>
					<img src={cert2} alt="logo"/>
					<img src={cert3} alt="logo"/>
					<img src={cert1} alt="logo"/>
				</div>
				</div>
			</main>
		</div>
	</div>
)
}