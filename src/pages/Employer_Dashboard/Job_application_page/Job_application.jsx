import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Button, Paper, Tooltip, } from '@mui/material';
import { useApplicationStatusUpdateMutation, useGetJobApplicationsEmployerQuery } from '../../../reducers/ApiReducers/JoApplicationApi/jobApplicationApi';
import DownloadIcon from '@mui/icons-material/Download';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';
import { image_base_url } from '../../../Constant/constant';


const JobApplicationTable = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { data, isSuccess, refetch } = useGetJobApplicationsEmployerQuery()

  // console.log(data && data.all_job_application)
  useEffect(() => {
    refetch()
  }, [data, isSuccess])


  const [statusUpdate, updateResponse] = useApplicationStatusUpdateMutation()
  
 
  const handleStatusUpdate = async ({ id, status }) => {
    await statusUpdate({ id, status })

    // console.log({ id, status });
  }

  useEffect(() => {
    if (updateResponse.isSuccess) {
      refetch()
    }
  }, [updateResponse.isSuccess])

  return (
    <>

      <div className="container mx-auto p-4 mt-10">
        <div className='w-full flex items-center justify-between'>
          <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
        </div>
        <TableContainer component={Paper} className='border-2 border-green-400 h-[500px] myTable'>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell style={{ borderBottom: '2px solid #4ade80' }}><strong>Job Title</strong></TableCell>
                <TableCell style={{ borderBottom: '2px solid #4ade80' }}><strong>Candidate Name</strong></TableCell>
                <TableCell style={{ borderBottom: '2px solid #4ade80' }}><strong>Candidate Email</strong></TableCell>
                <TableCell style={{ borderBottom: '2px solid #4ade80' }}><strong>Contact Number</strong></TableCell>
                <TableCell style={{ borderBottom: '2px solid #4ade80' }}><strong>Applied Date</strong></TableCell>
                <TableCell style={{ borderBottom: '2px solid #4ade80' }} align='center'><strong>Resume</strong></TableCell>
                <TableCell style={{ borderBottom: '2px solid #4ade80' }} align='center'><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isSuccess && data && [...data.all_job_application].reverse()
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((application) => <ApplicationTableBody application={application} key={application._id} handleStatusUpdate={handleStatusUpdate} />)}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data && data.all_job_application.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>

    </>
  );
};

export default JobApplicationTable;


function ApplicationTableBody({ application, handleStatusUpdate }) {

  const handelGetStatusValue = (e, id) => {
    const status = e.currentTarget.value
    handleStatusUpdate({ id, status })
  }
  return (
    <>
      <TableRow key={application._id}>
      <TableCell>{application.job_title}</TableCell>
        <TableCell>
          <Link >
            <button value="profile_view" onClick={(e) => handelGetStatusValue(e, application._id)}>
              {`${application.first_name} ${application.last_name}`}
            </button>
          </Link>
        </TableCell>
        <TableCell>{application.email}</TableCell>
        <TableCell>{application.phone_number}</TableCell>
        <TableCell>{new Date(application.createdAt).toLocaleDateString()}</TableCell>
        <TableCell align='center'>
          <Tooltip title="Download Resume">
            <a href={`${image_base_url}${application.resume}`} download={`${application.first_name} ${application.last_name}_resume`} target='_blank' rel="noopener noreferrer">
              <button className='font-semibold text-[20px]' value="view_resume" onClick={(e) => handelGetStatusValue(e, application._id)} >
                <span className='text-green-500' ><DownloadIcon fontSize='inherit' /></span>
              </button>
            </a>
          </Tooltip>
        </TableCell>
        <TableCell >
          <div className='flex items-center justify-center  gap-3'>
            {
              application.status === "accepted" ? (
                <span className='text-green-700 capitalize font-semibold px-3 py-1 rounded-[5px] bg-green-200'>{application.status}</span>
              ) : application.status === "rejected" ? (
                <span className='text-pink-700 capitalize font-semibold px-3 py-1 rounded-[5px] bg-pink-200'>{application.status}</span>
              ) : (
                <>
                  <Tooltip title="Accept">
                    <button className='font-semibold text-[20px]' value="accepted" onClick={(e) => handelGetStatusValue(e, application._id)}>
                      <span className='text-green-500 ' ><DoneRoundedIcon fontSize='inherit' /></span>
                    </button>
                  </Tooltip >
                  <Tooltip title="Reject">
                    <button className='font-semibold text-[20px]' value="rejected" onClick={(e) => handelGetStatusValue(e, application._id)} >
                      <span className='text-pink-500' ><CloseRoundedIcon fontSize='inherit' /></span>
                    </button>
                  </Tooltip>
                </>
              )
            }

          </div>
        </TableCell>
      </TableRow>
    </>
  )
}
