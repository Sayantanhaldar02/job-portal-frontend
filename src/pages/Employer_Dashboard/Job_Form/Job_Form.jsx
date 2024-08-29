import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useCreateEmployerProfileMutation } from '../../../reducers/ApiReducers/EmpProfileApi/EmpProfileApi';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateJobMutation, useGetAllJobsQuery, useUpdateJobMutation } from '../../../reducers/ApiReducers/jobApi/jobApi';


const Employer_Job_Form = () => {
    const location = useLocation()
    // console.log(location.state)
    const [job_details, setjob_details] = useState({
        job_title: location.state && location.state.job_title || "",
        vacancy: location.state && location.state.vacancy || "",
        experience: location.state && location.state.experience || "",
        job_type: location.state && location.state.job_type || "",
        skills: location.state && location.state.skills || "",
        description: location.state && location.state.description || "",
        qualifications: location.state && location.state.qualifications || "",
        responsibilities: location.state && location.state.responsibilities || "",
        city: location.state && location.state.city || "",
        state: location.state && location.state.state || "",
        country: location.state && location.state.country || "",
        salary_range: location.state && location.state.salary_range || "",
    })

    const onChnageHandeler = (e) => {
        setjob_details({ ...job_details, [e.target.name]: e.target.value })
    }

    const [createjob, { data, isSuccess, isError, error }] = useCreateJobMutation()
    const [updatejob, update_Data] = useUpdateJobMutation()
    const handelSubmit = async (e) => {
        e.preventDefault();

        if (location.state) {
            await updatejob({...job_details, id: location.state._id})
        }
        await createjob(job_details)
    }
    const navigate = useNavigate()

    useEffect(() => {
        if (isSuccess) {
            toast.success("Job Created!")
            setjob_details({
                job_title: "",
                vacancy: "",
                experience: "",
                job_type: "",
                skills: "",
                description: "",
                qualifications: "",
                responsibilities: "",
                city: "",
                state: "",
                country: "",
                salary_range: "",
            })
            navigate("/employer-jobs")
        }
        if (isError) {
            toast.error(error.message)
            console.log(error)
        }

    }, [isSuccess,])

    useEffect(() => {
        if (update_Data.isSuccess) {
            toast.success("Job Created!")
            setjob_details({
                job_title: "",
                vacancy: "",
                experience: "",
                job_type: "",
                skills: "",
                description: "",
                qualifications: "",
                responsibilities: "",
                city: "",
                state: "",
                country: "",
                salary_range: "",
            })
            navigate("/employer-jobs")
        }
        if (update_Data.isError) {
            toast.error(update_Data.error.message)
        }

    }, [update_Data.isSuccess,update_Data.isError])

    return (
        <>
            {/* <Navbar /> */}
            <div className=" w-full p-4 mb-[70px]">
                <h2 className="text-2xl font-bold mb-4">Company Information</h2>
                <form className="space-y-4 px-[40px] " onSubmit={handelSubmit}>
                    <TextField
                        fullWidth
                        label="Job Title"
                        variant="outlined"
                        required
                        onChange={onChnageHandeler}
                        name='job_title'
                        value={job_details.job_title}
                    />
                    <TextField
                        fullWidth
                        label="Vacancy"
                        variant="outlined"
                        required
                        onChange={onChnageHandeler}
                        name='vacancy'
                        value={job_details.vacancy}
                    />
                    <TextField
                        fullWidth
                        label="Experience"
                        variant="outlined"
                        required
                        onChange={onChnageHandeler}
                        name='experience'
                        value={job_details.experience}
                    />
                    <TextField
                        fullWidth
                        label="job_type"
                        variant="outlined"
                        required
                        onChange={onChnageHandeler}
                        name='job_type'
                        value={job_details.job_type}
                    />
                    <TextField
                        fullWidth
                        label="Skills"
                        variant="outlined"
                        required
                        onChange={onChnageHandeler}
                        name="skills"
                        value={job_details.skills}
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        variant="outlined"
                        required
                        onChange={onChnageHandeler}
                        name='description'
                        value={job_details.description}
                    />
                    <TextField
                        fullWidth
                        label="Qualifications"
                        variant="outlined"
                        required
                        onChange={onChnageHandeler}
                        name='qualifications'
                        value={job_details.qualifications}
                    />
                    <TextField
                        fullWidth
                        label="Responsibilities"
                        variant="outlined"
                        required
                        onChange={onChnageHandeler}
                        name='responsibilities'
                        value={job_details.responsibilities}
                    />
                    <TextField
                        fullWidth
                        label="City"
                        variant="outlined"
                        required
                        onChange={onChnageHandeler}
                        name='city'
                        value={job_details.city}
                    />
                    <TextField
                        fullWidth
                        label="State"
                        variant="outlined"
                        required
                        onChange={onChnageHandeler}
                        name='state'
                        value={job_details.state}
                    />
                    <TextField
                        fullWidth
                        label="Country"
                        variant="outlined"
                        required
                        onChange={onChnageHandeler}
                        name='country'
                        value={job_details.country}
                    />
                    <TextField
                        fullWidth
                        label="Salary_range"
                        variant="outlined"
                        required
                        onChange={onChnageHandeler}
                        name='salary_range'
                        value={job_details.salary_range}
                    />
                    <div className='w-full flex justify-center items-center'>
                        <button variant="contained" color="primary" type="submit" className='border-2 border-primary_color px-[80px] py-3 rounded-[5px] text-[20px]'>
                            {location.state ? "Update Job" : "Create Job"}
                        </button>
                    </div>
                </form>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Employer_Job_Form;




// company_name
// company_logo
// user_id
