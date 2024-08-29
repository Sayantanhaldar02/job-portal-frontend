import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useSubmitApplicationMutation } from '../../reducers/ApiReducers/JoApplicationApi/jobApplicationApi';




const Job_application_Form = () => {

    const location = useLocation()
    const job_id = location.state&& location.state
    const [profile_details, setProfile_details] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: ""
    })

    const onChnageHandeler = (e) => {
        setProfile_details({ ...profile_details, [e.target.name]: e.target.value })
    }

    const [jobApplication, aplicationDetails] = useSubmitApplicationMutation()

    const handelSubmit = async (e) => {
        e.preventDefault();
        await jobApplication({ ...profile_details, id:job_id})
        // console.log('Profile Details:', { ...profile_details, job_id});

    }
    const navigate = useNavigate()
    useEffect(() => {
        if(aplicationDetails.isSuccess){
            toast.success("Application Submitted!")
            setProfile_details({
                first_name: "",
                last_name: "",
                email: "",
                phone_number: ""
            });
            navigate("/jobs")
        }
    }, [aplicationDetails.isSuccess])

    return (
        <>
            {/* <Navbar /> */}
            <div className=" w-full p-4 mb-[70px]">
                <h2 className="text-2xl font-bold mb-4">Application Form</h2>
                <form className="space-y-4 px-[40px] " onSubmit={handelSubmit}>
                    <TextField
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        required
                        onChange={onChnageHandeler}
                        name='first_name'
                        value={profile_details.first_name}
                    />
                    <TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        required
                        onChange={onChnageHandeler}
                        name='last_name'
                        value={profile_details.last_name}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        required
                        type='email'
                        onChange={onChnageHandeler}
                        name='email'
                        value={profile_details.email}
                    />
                    <TextField
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                        required
                        onChange={onChnageHandeler}
                        name='phone_number'
                        value={profile_details.phone_number}
                    />
                    <div className='w-full flex justify-center items-center'>
                        <button variant="contained" color="primary" type="submit" className='border-2 border-primary_color px-[80px] py-3 rounded-[5px] text-[20px]'>
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Job_application_Form;
