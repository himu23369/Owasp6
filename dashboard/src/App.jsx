import { useState } from "react";

import Dashboard from "./Dashboard/Dashboard";
import AppointmentPage from "./Appointment/appointment";
import UserState from "./context/users/userState";
// import './App.css'

import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";

import AddUserDetails from "./AddUserDetails/AddUserDetails";
import LandingPage from "./LandingPage/LandingPage";
import Admin from "./Admin/Admin";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Caretaker from "./Caretaker/Caretaker";
import Guardian from "./Guardian/Guardian";
import PatientRegistration from "./PatientRegistration/PatientRegistration";

import Alerts from "./Alerts/Alerts";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

import { Provider } from "react-redux";
import PatientRegistrationData from "./PatientRegistrationData/PatientRegistrationData";
import VideoStream from "./VideoStream/VideoStream";
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <UserState>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signIn" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />

            <Route path="/appointment" element={<AppointmentPage />}></Route>
            <Route path="/dashboard" element={<Dashboard />}>
              {" "}
            </Route>

            <Route path="/alerts" element={<Alerts />}></Route>
            <Route path="/reports" element={<AddUserDetails />}></Route>

            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/caretaker" element={<Caretaker />}></Route>
            <Route path="/guardian" element={<Guardian />}></Route>

            <Route path="/guardianReports" element={<Dashboard />}></Route>
            <Route path="/contactGuardian" element={<Form />}></Route>

            <Route path="/addPatient" element={<PatientRegistration />}></Route>
            <Route path="/vid" element={<VideoStream />}></Route>

            {/* <Route path='/addReport' element={<AddUserDetails />}></Route> */}
          </Routes>
        </div>
      </Router>
    </UserState>
  );
}

export default App;
