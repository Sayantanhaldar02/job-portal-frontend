import React, { useEffect, useState } from 'react'
import registration from '../../assets/registration.png'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useUserRegisterMutation } from '../../reducers/ApiReducers/authApi/authApi'
import {useNavigate} from "react-router-dom"

const Registration = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [showPassword2, setShowPassword2] = React.useState(false);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };


    const [isEmployer, setIsEmployer] = useState(false);
    const [registartion_details, setregistartion_details] = useState({
        email: "",
        role: "",
        password: "",
        confirm_password: ""
    });

    const onChnageHandeler = (e) => {
        setregistartion_details({ ...registartion_details, [e.target.name]: e.target.value });
    }

    const [userRegister, { isSuccess, data, isError, error }] = useUserRegisterMutation()
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (registartion_details.password !== registartion_details.confirm_password) {
            return toast.error("Passwords do not match!")
        }

        await userRegister(registartion_details)
    }

    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            toast.success("Registration successful!")
            setregistartion_details({ email: "", password: "", confirm_password: "" });
            navigate("/login")
        }
        if (isError) {
            toast.error(error.data.message)
        }
    }, [isSuccess, isError])
    return (
        <>
            {/* <Navbar /> */}
            <div className=" py-10 w-[100%] flex flex-row-reverse items-center justify-center bg-background mq900:flex-col ">
                <img src={registration} alt="registration-page-image" srcset="" className='w-[50%] ' />
                <div className="w-full max-w-md bg-card px-4 py-10  rounded-[5px] shadow-lg border-2 border-primary_color">
                    <h2 className="text-2xl text-primary text-center mb-4">Registration</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <TextField id="email" label="Email" name='email' value={registartion_details.email} onChange={onChnageHandeler} variant="outlined" className='w-[100%]' required />
                        </div>
                        <div className="mb-6">
                            <TextField id="role" label="Role" name='role' value={isEmployer ? registartion_details.role = "employer" : registartion_details.role = "jobseeker"} disabled variant="outlined" className='w-[100%]' />
                        </div>
                        <div className="mb-6">
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    value={registartion_details.password}
                                    onChange={onChnageHandeler}
                                    required
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </div>

                        <div className="mb-6">
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password2">Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password2"
                                    type={showPassword2 ? 'text' : 'password'}
                                    name='confirm_password'
                                    value={registartion_details.confirm_password}
                                    onChange={onChnageHandeler}
                                    required
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword2}
                                                onMouseDown={handleMouseDownPassword2}
                                                edge="end"
                                            >
                                                {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Confirm Password"
                                />
                            </FormControl>
                        </div>
                        <button type="submit" className="w-full text-primary-foreground p-3 border-primary_color border-2 rounded-[5px] hover:bg-primary_color transition-colors duration-300 hover:text-white tracking-[1px] ">Register</button>
                        <p className='text-center mt-2 px-2 py-1 bg-green-200 text-green-800 font-semibold cursor-pointer rounded-[5px]' onClick={() => setIsEmployer(!isEmployer)}>{!isEmployer ? "Register as Employer" : "Register as Jobseeker"}</p>

                        <p className='text-center mt-2 px-2 py-1 bg-pink-300 cursor-pointer rounded-[5px]'>Already have account? <Link to="/login" className='text-pink-800 font-semibold px-2 py-1 rounded-[5px]'> Login</Link></p>
                    </form>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Registration