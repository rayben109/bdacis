import server from './../assets/server.png';
import rubik from './../assets/rubik.png';
import { FaUser, FaImage, FaCertificate } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function StudentDashboard(){
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
						<Link to="/certificate-gallery"><span className="las la-image"></span><span>Certificate Gallery</span>
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
				<div className="cards">
					<div className="card-container">
						<div className="card">	
							<div className="card-icon">
								<span className="las la-user"></span>
							</div>
							<div className="card-title">
								<h1>01</h1>	
							</div>
						</div>
						<button className="card-btn"> View</button>
					</div>

					<div className="card-container">
						<div className="card">	
							<div className="card-icon">
								<span className="las la-certificate"></span>
							</div>
							<div className="card-title">
								<h1>01</h1>	
							</div>
						</div>
						<button className="card-btn"> View</button>
					</div>

					<div className="card-container">
						<div className="card">	
							<div className="card-icon">
								<span className="las la-credit-card"></span>
							</div>
							<div className="card-title">
								<h1>Pending</h1>	
							</div>
						</div>
						<button className="card-btn"> View</button>
					</div>
				</div>

				<div className="recent-grid">
					<div className="projects">
						<div className="recent-card">
							<div className="recent-card-header">
								<h3>Notice</h3>
								<button>See all <span className="las la-arrow-right"></span></button>
							</div>
							<div className="recent-card-body">
								<div className="table-responsive">
								
								<table width="100%">
									<thead>
										<tr>
											<td>S/N</td>
											<td>First Name</td>
											<td>Middle Name</td>
											<td>Last Name</td>
											<td>Certificate Number</td>
											<td>Certificate Status</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>001</td>
											<td>Juma</td>
											<td>Kassim</td>
											<td>Mazula</td>
											<td>69034</td>
											<td>
												<span className="status purple"></span>
												Transfered
											</td>
											</tr>
									</tbody>
								</table>
								</div>
							</div>

						</div>
						
					</div>

				</div>
			</main>
		</div>
	</div>
)
}