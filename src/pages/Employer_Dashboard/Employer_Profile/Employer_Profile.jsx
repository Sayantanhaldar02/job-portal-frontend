import React, { useEffect, useState } from 'react';
import {
  Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import Employer_Profile_Form from '../Employer_Profile_form/Profile_Form';

import { Link, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import getUserDetails from '../../../service/getUserDetails';
import { useDeleteEmployerProfileMutation, useGetEmployeeProfileQuery } from '../../../reducers/ApiReducers/EmpProfileApi/EmpProfileApi';
import useLogout from '../../../service/logoutService';
import { image_base_url } from '../../../Constant/constant';

const EmployerProfile = (props) => {

  const { data, isError, isSuccess, error, isLoading, refetch } = useGetEmployeeProfileQuery()

  useEffect(() => {
    refetch()
  }, [data])

  const {
    company_name,
    company_city,
    company_state,
    company_country,
    company_website,
    contact_name,
    contact_email,
    contact_phone_number,
    company_logo
  } = isSuccess && data && data !== undefined && data.emp_profile


  const [deleteProfile, deleteDetails] = useDeleteEmployerProfileMutation()
  const handelDelete = async (value) => {
    if (value === true) {
      await deleteProfile()
    }
  }
  const { logout } = useLogout()
  useEffect(() => {
    if (deleteDetails.isSuccess) {
      toast.success('Profile deleted successfully!')
      logout()
    }
  }, [deleteDetails.isSuccess, deleteDetails.isError])

  return (
    <>
      {/* {
        !props.data ?
          <>
            <div className='h-[100vh] flex justify-center items-center bg-green-50'>
              <Link to="/employer-profile-form">
                <button className="mb-4 border-2 border-primary_color p-2 px-20 rounded-[50px] hover:bg-primary_color hover:text-white transition-all text-[45px]">Cretae Profile</button>
              </Link>
            </div>
          </> :
          <>
            {
              props.isLoading ?
                <>
                  <p>Loading ......</p>
                </> : props.data &&
                <>
                 
                </>
            }

          </>
      } */}


      <div className=" min-h-[100vh] flex items-center justify-center py-[50px]">
        <div className=" w-full rounded-lg px-[60px] mq900:px-[10px]">

          <div className="">
            <div className='flex items-center justify-end'>
              <Link to="/employer-profile-form" state={isSuccess && data && data.emp_profile}>
                <button className="mb-4 border-2 border-primary_color p-2 px-4 rounded-[5px] hover:bg-primary_color hover:text-white transition-all"><EditIcon /> Update Profile</button>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <img
                src={company_logo}
                alt="Profile"
                className=" border-4 w-[200px] h-[200px] rounded-full mq900:w-[100px] mq900:h-[100px] "
              />
              <p className="text-[30px] font-semibold text-gray-800">{company_name}</p>
            </div>

            <div className="mt-5 shadow-md w-full p-4 rounded-[10px] border-[1.5px] border-green-300">
              <h3 className="text-2xl font-semibold text-gray-600">Company Details</h3>
              <div className="flex items-center justify-between mq900:flex-col mq900:items-start">
                <div className='mt-2 flex flex-col gap-1'>
                  <p className="text-gray-600 font-semibold">Email: {contact_email}</p>
                  <p className="text-gray-600 font-semibold">Location: {`${company_state}, ${company_country}`}</p>
                  <p className="text-gray-600 font-semibold">Address: {`${company_city}, ${company_state}, ${company_country}`}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 shadow-md w-full p-4 rounded-[10px] border-[1.5px] border-green-300">
              <h3 className="text-2xl font-semibold text-gray-600">Contact Details</h3>
              <div className="flex items-center justify-between mq900:flex-col mq900:items-start">
                <div className='mt-2 flex flex-col gap-1'>
                  <p className="text-gray-600 font-semibold">Recruter's Name: {contact_name}</p>
                  <p className="text-gray-600 font-semibold">Recruter's Email: {contact_email}</p>
                  <p className="text-gray-600 font-semibold">Recruter's Contact Number:  {contact_phone_number}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 shadow-md w-full p-4 rounded-[10px] border-[1.5px] border-green-300">
              <h3 className="text-2xl font-semibold text-gray-600">Profile URL</h3>
              <div className="flex items-center justify-between mq900:flex-col mq900:items-start">
                <div className='mt-2 flex flex-col gap-1'>
                  <p className="text-gray-600 font-semibold">Website: {company_website}</p>
                  {/* <p className="text-gray-600 font-semibold">Recruter's Email: {contact_email}</p>
                      <p className="text-gray-600 font-semibold">Recruter's Contact Number:  {contact_phone_number}</p> */}
                </div>
              </div>
            </div>

            <div className="w-full flex justify-end item-center mt-3">
              <DeleteDialog handelDelete={handelDelete} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerProfile;


function DeleteDialog(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const token = localStorage.getItem("authToken")
  const user_details = getUserDetails(token && token)
  // console.log(user_details);

  const [userID, setUserID] = useState("")

  function handelIsdelete() {
    if (user_details && user_details.user_id === userID) {
      props.handelDelete(true)
    }
  }

  return (
    <>
      <button className="mb-4 border-2 border-pink-600 p-2 px-4 rounded-[5px] hover:bg-pink-600 hover:text-white transition-all" onClick={() => handleClickOpen()}><DeleteIcon /> Delete Profile</button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Are you sure to delete your profile?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To delete your profile write this <b>{user_details && user_details.user_id}</b>
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="userID"
            name="userID"
            label="Enter text here"
            fullWidth
            variant="standard"
            onChange={(e) => setUserID(e.target.value)}
            value={userID}
          />
        </DialogContent>
        <DialogActions>
          <button className='text-blue-600 hover:bg-gray-200 px-2 py-1 rounded-[5px]'  onClick={handleClose}><span >Cancel</span></button>
          <button type="submit" className='text-pink-700 hover:bg-gray-200 px-2 py-1 rounded-[5px]'><span onClick={() => handelIsdelete()} >Delete</span></button>
        </DialogActions>
      </Dialog>
    </>
  );
}
