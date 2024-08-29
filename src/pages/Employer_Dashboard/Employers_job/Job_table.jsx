import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, Tooltip, } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import { useGetJobApplicationsEmployerQuery } from '../../../reducers/ApiReducers/JoApplicationApi/jobApplicationApi';
const Job_table = (props) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const handelDelete = (id) => {
        props.deleteHandeler(id)
    }

    const { data: jobApplicationData, isSuccess, refetch } = useGetJobApplicationsEmployerQuery()

    // const [countApplication, setCountApplication] = useState()
    useEffect(() => {
        refetch()
    }, [jobApplicationData, isSuccess])







    return (
        <>
            <TableContainer component={Paper} className='border-2 border-green-400 max-h-[500px] myTable'>
                <Table stickyHeader aria-label="sticky table" >
                    <TableHead >
                        <TableRow className='border-b-2 border-green-400 text-center'>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }}><strong>Sl. No</strong></TableCell>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }}><strong>Job Titl</strong>e</TableCell>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }} align='center'><strong>Job Type</strong></TableCell>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }} align='center'><strong>Vacancy</strong></TableCell>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }} align='center'><strong>Salary Range</strong></TableCell>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }} align='center'><strong>Location</strong></TableCell>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }} align='center'><strong>Posted By</strong></TableCell>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }} align='center'><strong>Update</strong></TableCell>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }} align='center'><strong>Delete</strong></TableCell>
                            <TableCell style={{ borderBottom: '2px solid #4ade80' }} align='center'><strong>Applied Candidates</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    {
                        props.isLoading ?
                            <>
                                <div className='w-full'>
                                    <Animations />
                                </div>
                            </> :
                            <>
                                <TableBody>
                                    {
                                        props.jobs && props.jobs
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .sort((a, b) => new Date(b.createdAt).getMilliseconds() - new Date(a.createdAt).getMilliseconds())
                                            .map((job, index) => (<Table_body job={job} index={index} handelDelete={handelDelete} jobApplicationData={jobApplicationData} />))
                                    }
                                </TableBody>
                            </>
                    }
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={props.jobs && props.jobs.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}

export default Job_table


function Table_body({ job, handelDelete, index, jobApplicationData }) {
    const handel_delete = (id) => {
        handelDelete(id)
    }

    const countApplication = (id) => {
        // console.log(id)
        if (id) {
            const filterData = jobApplicationData && jobApplicationData.all_job_application.filter((job) => job.job_id === id)
            // console.log(filterData.length)
            return filterData && filterData.length;
        }
        // console.log(0)
        return 0;
    }

    return (
        <>
            <TableRow className='border-b-2 border-green-400'>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{job.job_title}</TableCell>
                <TableCell align='center'>{job.job_type}</TableCell>
                <TableCell align='center'>{job.vacancy}</TableCell>
                <TableCell align='center'>{job.salary_range}</TableCell>
                <TableCell align='center'>{`${job.city},${job.state},${job.country}`}</TableCell>
                <TableCell align='center'>{new Date(job.createdAt).toDateString()}</TableCell>
                <TableCell align='center'>
                    <Link to="/employer-job-form" state={job && job}>
                        <button
                            className="text-green-700"
                        >
                            <Tooltip title="Update">
                                <InfoIcon />
                            </Tooltip>
                        </button>
                    </Link>
                </TableCell>
                <TableCell align='center'>
                    <button
                        className='text-red-600'
                        onClick={() => handel_delete(job._id)}
                    >
                        <Tooltip title="Delete">
                            <DeleteIcon />
                        </Tooltip>
                    </button>
                </TableCell>
                <TableCell align='center'>
                    <span className='px-2 py-1 rounded-[5px] text-green-700 capitalize font-semibold bg-green-100 '>{countApplication(job._id)}</span>
                </TableCell>
            </TableRow>
        </>
    )
}


function Animations() {
    return (
        <div className='w-[100%]'>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={true} />
        </div>
    );
}