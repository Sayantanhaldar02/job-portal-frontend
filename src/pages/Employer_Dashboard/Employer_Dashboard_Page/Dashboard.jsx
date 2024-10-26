import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupIcon from '@mui/icons-material/Group';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import ReportIcon from '@mui/icons-material/Report';
import JobApplicationTable from '../Job_application_page/Job_application';
import { useGetAllJobsQuery } from '../../../reducers/ApiReducers/jobApi/jobApi';
import { useGetJobApplicationsEmployerQuery } from '../../../reducers/ApiReducers/JoApplicationApi/jobApplicationApi';
const Dashboard = () => {
    const { data: allJobs } = useGetAllJobsQuery();
    const { data: allJobApplication } = useGetJobApplicationsEmployerQuery();
    const pending_application = allJobApplication && allJobApplication.all_job_application && allJobApplication.all_job_application.filter(app =>app.status === 'pending')
    const accepted_application = allJobApplication && allJobApplication.all_job_application && allJobApplication.all_job_application.filter(app =>app.status === 'accepted')
    const rejected_application = allJobApplication && allJobApplication.all_job_application && allJobApplication.all_job_application.filter(app =>app.status === 'rejected')
    // console.log(allJobApplication.all_job_application)
    return (
        <>
            <div className=" bg-gray-100 min-h-[100vh] p-10">
                <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
                {/* Here you can add charts or tables for applications */}
                <div >
                    <div className="grid grid-cols-2 mq900:grid-cols-1 gap-4 py-10">
                        <div className="bg-white shadow rounded-xl p-10 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Total Jobs</h3>
                                <p className="text-2xl">{allJobs && allJobs.length}</p>
                            </div>
                            <span className='text-[40px] text-primary_color'><BusinessCenterIcon fontSize='inherit' /></span>
                        </div>
                        <div className="bg-white shadow rounded-xl p-10 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Total Applications</h3>
                                <p className="text-2xl">{allJobApplication && allJobApplication.all_job_application && allJobApplication.all_job_application.length}</p>
                            </div>
                            <span className='text-[40px] text-primary_color'><GroupIcon fontSize='inherit' /></span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 mq900:grid-cols-1 gap-4">
                        <div className="bg-white shadow rounded-xl p-10 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Pending Applications</h3>
                                <p className="text-2xl">{pending_application && pending_application.length}</p>
                            </div>
                            <span className='text-[40px] text-yellow-500'><InsertDriveFileIcon fontSize='inherit' /></span>
                        </div>
                        <div className="bg-white shadow rounded-xl p-10 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Accepted Applications</h3>
                                <p className="text-2xl ">{accepted_application && accepted_application.length}</p>
                            </div>
                            <span className='text-[40px] text-primary_color'><FileDownloadDoneIcon fontSize='inherit' /></span>
                        </div>
                        <div className="bg-white shadow rounded-xl p-10 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Rejected Applications</h3>
                                <p className="text-2xl ">{rejected_application && rejected_application.length}</p>
                            </div>
                            <span className='text-[40px] text-pink-500'><ReportIcon fontSize='inherit' /></span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Dashboard;