import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Layout from "./layout/Layout";
import TimeTrackerTable from "./components/timetracker/TimeTrackerTable";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/profile/username" element={<TimeTrackerTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
