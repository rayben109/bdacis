import server from './../assets/server.png';
import rubik from './../assets/rubik.png';
import tigo from './../assets/tigo.png';
import mpesa from './../assets/mpesa.png';
import halopesa from './../assets/halopesa.png';
import bitcoin from './../assets/bitcoin.png';

import { FaUser, FaImage, FaCertificate } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Payment(){
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
						<Link to="/payment"   className="active"><span className="las la-credit-card"></span><span>Payment</span>
						<span>
						</span></Link>
					</li>
				</ul>
			</div>
		</div>

		<div className="main-content">
			<main>
				<div className="payment-header">
					<h3>Payment</h3>
					<p>Choose your payment method</p>
				</div>

				<div className="payment-methods">
					<div className="payment-method">
						<a href="https://www.flaticon.com/free-icons/visa" title="visa icons">Visa icons created by Freepik - Flaticon</a>

					</div>

					<div className="payment-method">
						<img src={bitcoin} alt="bitcoin"/>
					</div>
					
					<div className="payment-method">
						<img src={tigo} alt="tigo"/>
					</div>

					<div className="payment-method">
						<img src={mpesa} alt="mpesa"/>
					</div>

					<div className="payment-method">
						<img src={halopesa} alt="halopesa"/>
					</div>
				</div>
			</main>
		</div>
	</div>
)
}