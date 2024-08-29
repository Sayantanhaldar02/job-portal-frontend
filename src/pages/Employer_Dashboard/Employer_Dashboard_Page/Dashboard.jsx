import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupIcon from '@mui/icons-material/Group';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import ReportIcon from '@mui/icons-material/Report';
import JobApplicationTable from '../Job_application_page/Job_application';
const Dashboard = () => {
    return (
        <>
            <div className="p-6 py-10">
                <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
                {/* Here you can add charts or tables for applications */}
                <div >
                    <div className="grid grid-cols-2 gap-4 py-10">
                        <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Total Jobs</h3>
                                <p className="text-2xl">150</p>
                            </div>
                            <span className='text-[40px]'><BusinessCenterIcon fontSize='inherit' /></span>
                        </div>
                        <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Total Applications</h3>
                                <p className="text-2xl">150</p>
                            </div>
                            <span className='text-[40px]'><GroupIcon fontSize='inherit' /></span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Pending Applications</h3>
                                <p className="text-2xl">75</p>
                            </div>
                            <span className='text-[40px]'><InsertDriveFileIcon fontSize='inherit' /></span>
                        </div>
                        <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Accepted Applications</h3>
                                <p className="text-2xl">50</p>
                            </div>
                            <span className='text-[40px]'><FileDownloadDoneIcon fontSize='inherit' /></span>
                        </div>
                        <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Rejected Applications</h3>
                                <p className="text-2xl">25</p>
                            </div>
                            <span className='text-[40px]'><ReportIcon fontSize='inherit' /></span>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Dashboard;