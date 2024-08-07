import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import TimeTrackerTable from "./components/timetracker/TimeTrackerTable";
import FreeDemo from "./components/freedemo/FreeDemo";
import ConfirmationPage from "./components/freedemo/ConfirmationPage";
import SignUp from "./components/freedemo/signup/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/profile/username" element={<TimeTrackerTable />} />
          <Route path="/free-demo" element={<FreeDemo />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
