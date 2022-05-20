

import StudentRegistration from './pages/StudentRegistration';
import OrganizationRegistration from './pages/OrganizationRegistration';
import WelcomePage from './pages/WelcomePage';
import StudentDashboard from './pages/StudentDashboard';
import OrganizationDashboard from './pages/OrganizationDashboard';
import IssueCertificate from './pages/IssueCertificate';
import CertificateTransfer from './pages/CertificateTransfer';
import StudentCertificateGallery from './pages/StudentCertificateGallery';
import OrganizationCertificateGallery from './pages/OrganizationCertificateGallery';
import StudentProfile from './pages/StudentProfile';
import OrganizationProfile from './pages/OrganizationProfile';
import OrganizationCertificateRequests from './pages/OrganizationCertificateRequests';
import StudentCertificateRequests from './pages/StudentCertificateRequests';
import Payment from './pages/Payment';

import { Routes, Route, Link } from "react-router-dom";

import './cui-main.css';
import './cui-reset.css';
import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<WelcomePage/>} />

        <Route path="student-registration" element={<StudentRegistration/>} />
        <Route path="organization-registration" element={<OrganizationRegistration/>} />

        <Route path="student-dashboard" element={<StudentDashboard/>} />
        <Route path="organization-dashboard" element={<OrganizationDashboard/>} />

        <Route path="issue-certificate" element={<IssueCertificate/>} />
        <Route path="certificate-transfer" element={<CertificateTransfer/>} />

        <Route path="student-certificate-gallery" element={<StudentCertificateGallery/>} />
        <Route path="organization-certificate-gallery" element={<OrganizationCertificateGallery/>} />

        <Route path="student-profile" element={<StudentProfile/>} />
        <Route path="organization-profile" element={<OrganizationProfile/>} />

        <Route path="organization-certificate-requests" element={<OrganizationCertificateRequests/>} />
        <Route path="student-certificate-requests" element={<StudentCertificateRequests/>} />

        <Route path="payment" element={<Payment/>} />
      </Routes>
        
    </div>
  );
}

export default App;
