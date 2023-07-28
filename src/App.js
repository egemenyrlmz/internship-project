import React from "react"
import Login from "./Login.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./Dashboard.jsx"
import MyClasses from "./pages/MyClasses.js"
import MyStudents from "./pages/MyStudents.js"
import Announcements from "./pages/Announcements.js"
import MyProfile from "./pages/MyProfile.js"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const App = () => {   
  console.log("APP.js");
  const queryClient = new QueryClient();

  
  return(
    <QueryClientProvider client={queryClient}>
      <Router>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/MyClasses" element={<MyClasses/>}/>
        <Route path="/MyStudents" element={<MyStudents/>}/>
        <Route path="/Announcements" element={<Announcements/>}/>
        <Route path="/MyProfile" element={<MyProfile/>}/>
      </Routes>
      </Router>
      </QueryClientProvider>
  );
};

export default App;
