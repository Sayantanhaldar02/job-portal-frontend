// src/Dashboard.js
import { useEffect, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import JobApplications from './Job_application';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Profile from './Profile';
import { useDeleteJobseekerProfileMutation, useGetJobseekerProfileQuery } from '../../reducers/ApiReducers/jobseekerProfileApi/jobseekerProfileApi';
import useLogout from '../../service/logoutService';
import { toast } from 'react-toastify';
import { useGetJobApplicationsJobSeekerQuery } from '../../reducers/ApiReducers/JoApplicationApi/jobApplicationApi';

const Job_seeker_dashboard = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { data, isSuccess, isError, error, refetch } = useGetJobseekerProfileQuery()
    // console.log(data);
    useEffect(() => {
        refetch()
    }, [data])

    const [deleteProfile, delete_response] = useDeleteJobseekerProfileMutation()
    const handelDeleteProfile = async (value) => {
        if (value === true) {
            await deleteProfile()
        }
    }
    const { logout } = useLogout()
    useEffect(() => {
        if (delete_response.isSuccess) {
            toast.success('Profile deleted successfully!')
            logout()
        }
    }, [delete_response.isSuccess])



    const { data: jobApplicationData, isSuccess: isApplicationSuccess, isError: isapplicationerror, error: applicationError, refetch: applicationRefetch } = useGetJobApplicationsJobSeekerQuery()
    console.log(jobApplicationData)
    useEffect(() => {
        if (isApplicationSuccess) {
            applicationRefetch()
        }
    }, [jobApplicationData && jobApplicationData.all_job_application])
    return (
        <>
            {/* <Navbar /> */}
            <div className="">
                {/* <h1 className="text-2xl font-bold mb-4">Job Seeker Dashboard</h1> */}
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                    <Tab label="Profile" className='text-primary_color' />
                    <Tab label="Job Applications" />
                </Tabs>
                <div className="mt-3">
                    {value === 0 && <Profile data={isSuccess && data && data.profile} handelDeleteProfile={handelDeleteProfile} isSuccess={isSuccess} />}
                    {value === 1 && <JobApplications data={isApplicationSuccess && jobApplicationData && jobApplicationData.all_job_application} />}
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};




export default Job_seeker_dashboard;
