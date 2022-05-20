import server from './../assets/server.png'
import rubik from './../assets/rubik.png'
import { FaUser, FaImage, FaCertificate } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function OrganizationDashboard(){
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
				<div className="cards">
					<div className="card-container">
						<div className="card">	
							<div className="card-icon">
								<span className="las la-certificate"></span>
							</div>
							<div className="card-title">
								<h1>110</h1>	
							</div>
						</div>
						<button className="card-btn"> View</button>
					</div>

					<div className="card-container">
						<div className="card">	
							<div className="card-icon">
								<span className="las la-sync"></span>
							</div>
							<div className="card-title">
								<h1>30</h1>	
							</div>
						</div>
						<button className="card-btn"> View</button>
					</div>

					<div className="card-container">
						<div className="card">	
							<div className="card-icon">
								<span className="las la-th-list"></span>
							</div>
							<div className="card-title">
								<h1>100</h1>	
							</div>
						</div>
						<button className="card-btn"> View</button>
					</div>
				</div>

				<div className="recent-grid">
					<div className="projects">
						<div className="recent-card">
							<div className="recent-card-header">
								<h3>Student Information</h3>
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
											<td>Registration Number</td>
											<td>Graduation Year</td>
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
											<td>2021</td>
											<td>
												<span className="status pink"></span>
												Paid
											</td>
											</tr>
											<tr>
												<td>002</td>
											<td>Juma</td>
											<td>Kassim</td>
											<td>Mazula</td>
											<td>69035</td>
											<td>2021</td>
												<td>
													<span className="status pink"></span>
													Paid
												</td>
											</tr>
											<tr>
												<td>003</td>
											<td>Juma</td>
											<td>Kassim</td>
											<td>Mazula</td>
											<td>69034</td>
											<td>2021</td>
												<td>
													<span className="status orange"></span>
													Pending
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