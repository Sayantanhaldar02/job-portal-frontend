import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TablePagination } from '@mui/material';
import Profile from './Profile';
import { useState } from 'react';

const JobApplications = ({ data }) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className="p-4 h-[100vh]">
            <Typography variant="h4" component="h2" gutterBottom>
                Job Applications
            </Typography>
            <TableContainer component={Paper} className='border-2 border-green-400 max-h-[500px] myTable'>
                <Table className='border-2 bg-white bg-opacity-20 shadow backdrop-blur-sm border-white border-opacity-30 ' stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }} align="left"><strong>Job Titlte</strong></TableCell>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }} align="left"><strong>Company Name</strong></TableCell>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }} align="left"><strong>Job Location</strong></TableCell>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }} align="left"><strong>Salary</strong></TableCell>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }} align="left"><strong>Applied Date</strong></TableCell>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }} align="left"><strong>Application Status</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && [...data].reverse().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((application, index) => (
                            <TableRow key={index}>
                                <TableCell align="left" >{application.job_title}</TableCell>
                                <TableCell align="left">{application.company_name}</TableCell>
                                <TableCell align="left">{application.job_location}</TableCell>
                                <TableCell align="left">{application.salary}</TableCell>
                                <TableCell align="left">{new Date(application.createdAt).toLocaleDateString()}</TableCell>
                                <TableCell align="" >
                                    {
                                        application.status === 'pending' ? (
                                            <span className='text-yellow-700 capitalize font-semibold px-3 py-1 rounded-[5px] bg-yellow-200 ml-6'>{application.status}</span>
                                        ) : application.status === 'accepted' ? (
                                            <span className='text-green-700 capitalize font-semibold px-3 py-1 rounded-[5px] bg-green-200 ml-6'>{application.status}</span>
                                        ) : application.status === 'rejected' ? (
                                            <span className='text-pink-700 capitalize font-semibold px-3 py-1 rounded-[5px] bg-pink-200 ml-6'>{application.status}</span>
                                        ) : application.status === 'view_resume' ? (
                                            <span className='text-blue-700 capitalize font-semibold px-3 py-1 rounded-[5px] bg-blue-200 ml-6'>view resume</span>
                                        ) : application.status === 'profile_view' ? (
                                            <span className='text-blue-700 capitalize font-semibold px-3 py-1 rounded-[5px] bg-blue-200 ml-6'>profile viewed</span>
                                        ) : ""
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data && data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default JobApplications;