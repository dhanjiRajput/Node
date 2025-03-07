import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/profile'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import PostJob from '../pages/Post-Job'
import Company from '../pages/Company'
import JobDetails from '../pages/JobDetails'
import User from '../pages/User'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/postJob" element={<PostJob />} />
            <Route path="/job/:id" element={<JobDetails />} />
            <Route path='/company' element={<Company />} />
            <Route path='/job/:jobId/user/:id' element={<User />} />
        </Routes>
    )
}

export default AllRoutes