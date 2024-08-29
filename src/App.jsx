import React from 'react'
import Home_page from './pages/Home_page/Home_page'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registration'

import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer/Footer'
import Contact_page from './pages/Contact_page/Contact_page'
import JobSearch from './pages/All_jobs_page/All_jobs_page'
import SingleJobDetails from './pages/Single_job_page/Single_job_page'
import Job_seeker_dashboard from './pages/Job_seeker_dashboard/Job_seeker_dashboard'
import Employer_Dashboard from './pages/Employer_Dashboard/Employer_Dashboard_Page/Employer_Dashboard'
import ProtectedRoute from './Protected_Routes/ProtectedRoute'
import Employer_jobs from './pages/Employer_Dashboard/Employers_job/Jobs'
import EmployerProfile_page from './pages/Employer_Dashboard/Employer_Profile/Emp_profile_Page'
import JobApplicationTable from './pages/Employer_Dashboard/Job_application_page/Job_application'
import Employer_Profile_Form from './pages/Employer_Dashboard/Employer_Profile_form/Profile_Form'
import TestImage from '../a'
import Employer_Job_Form from './pages/Employer_Dashboard/Job_Form/Job_Form'
import Job_application_Form from './pages/Job_application_form/Job_application_form'
import Job_application_page from './pages/Employer_Dashboard/Job_application_page/Job_application_page'
import Job_seeker_profile_form from './pages/Job_seeker_profile_form/Job_seeker_profile_form'

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home_page />} />
                <Route path="/contact" element={<Contact_page />} />
                <Route path="/jobs" element={<JobSearch />} />
                <Route path="/single-jobs" element={<SingleJobDetails />} />

                <Route path="/job-seeker-dashboard" element={
                    <ProtectedRoute allowedRoles={['jobseeker']}>
                        <Job_seeker_dashboard />
                    </ProtectedRoute>
                } />

                <Route path="/job-seeker-profile-form" element={
                    <ProtectedRoute allowedRoles={['jobseeker']}>
                        <Job_seeker_profile_form />
                    </ProtectedRoute>
                } />
                <Route path="/job-application-form" element={
                    <ProtectedRoute allowedRoles={['jobseeker']}>
                        <Job_application_Form />
                    </ProtectedRoute>
                } />

                <Route path="/employer-dashboard" element={
                    <ProtectedRoute allowedRoles={['employer']}>
                        <Employer_Dashboard />
                    </ProtectedRoute>
                } />

                <Route path="/employer-jobs" element={
                    <ProtectedRoute allowedRoles={['employer']}>
                        <Employer_jobs />
                    </ProtectedRoute>
                } />
                <Route path="/employer-job-form" element={
                    <ProtectedRoute allowedRoles={['employer']}>
                        <Employer_Job_Form />
                    </ProtectedRoute>
                } />

                <Route path="/employer-profile" element={
                    <ProtectedRoute allowedRoles={['employer']}>
                        <EmployerProfile_page />
                    </ProtectedRoute>
                } />
                <Route path="/employer-profile-form" element={
                    <ProtectedRoute allowedRoles={['employer']}>
                        <Employer_Profile_Form />
                    </ProtectedRoute>
                } />

                <Route path="/employer-job-application" element={
                    <ProtectedRoute allowedRoles={['employer']}>
                        <Job_application_page />
                    </ProtectedRoute>
                } />

                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App