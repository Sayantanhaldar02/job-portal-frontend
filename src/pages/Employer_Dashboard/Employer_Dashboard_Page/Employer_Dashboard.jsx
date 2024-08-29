// src/Dashboard.js
import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Dashboard from './Dashboard';
import { useGetEmployeeProfileQuery } from '../../../reducers/ApiReducers/EmpProfileApi/EmpProfileApi';
import { useDispatch } from 'react-redux';
import { setEmployeeDetails } from '../../../reducers/employerSlice/employerSlice';
import JobApplicationTable from '../Job_application_page/Job_application';

const Employer_Dashboard = () => {
    // const { data, isError, isSuccess, error, isLoading } = useGetEmployeeProfileQuery()
    // const profile_details = useGetEmployeeProfileQuery()
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     if (isSuccess) {
    //       dispatch(setEmployeeDetails(data && data.emp_profile))
    //     }
    //   }, [isSuccess])
    return (
        <>
            {/* <Navbar /> */}
            <div className="h-[100vh] mb-[140px]">
                <Dashboard />
                {/* <JobApplicationTable/> */}
            </div>
            {/* <Footer /> */}
        </>
    );
};




export default Employer_Dashboard;
