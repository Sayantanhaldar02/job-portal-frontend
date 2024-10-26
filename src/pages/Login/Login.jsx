import React, { useEffect, useState } from 'react'
import login_image from '../../assets/login_page.png'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useUserLoginMutation } from '../../reducers/ApiReducers/authApi/authApi'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import getUserDetails from '../../service/getUserDetails'
import { useDispatch } from "react-redux"
import { setUser } from '../../reducers/userSlice/userSlice'
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [authDetails, setAuthDetails] = useState({
        email: "",
        password: ""
    })

    const onChnageHandeler = (e) => {
        setAuthDetails({ ...authDetails, [e.target.name]: e.target.value })
    }

    const [userLogin, details] = useUserLoginMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await userLogin(authDetails)

    }

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (details.isSuccess) {
            toast.success('Login Successful')
            const user_data = getUserDetails(details.data.token)
            dispatch(setUser({ id: user_data.user_id, email: user_data.email, role: user_data.role, token: details.data.token }))
            localStorage.setItem("authToken", details.data.token)
            navigate(user_data.role === "employer" ? "/employer-dashboard" : "/")
        }
        if (details.isError) {
            // console.log(details.error.data)
            toast.error(details.error.data)
        }
    }, [details.isSuccess, details.isError]);

    return (
        <>
            {/* <Navbar /> */}
            <div className=" w-[100%] flex flex-row-reverse items-center justify-center bg-background mq900:flex-col ">
                <img src={login_image} alt="login-page-image" srcset="" className='w-[50%] ' />
                <div className="w-full max-w-md bg-card px-4 py-10  rounded-[5px] shadow-lg border-2 border-primary_color">
                    <h2 className="text-2xl text-primary text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <TextField id="email" label="Email" name='email' value={authDetails.email} onChange={onChnageHandeler} variant="outlined" className='w-[100%]' />
                        </div>
                        <div className="mb-6">
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    value={authDetails.password}
                                    onChange={onChnageHandeler}
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
                        <button type="submit" className="w-full text-primary-foreground p-3 border-primary_color border-2 rounded-[5px] hover:bg-primary_color transition-colors duration-300 hover:text-white tracking-[1px] ">Login</button>
                        <p className='text-center mt-2 px-2 py-1 bg-pink-300 cursor-pointer rounded-[5px]'>Don't have account? <Link to="/registration" className='text-pink-800 font-semibold px-2 py-1 rounded-[5px]'> Register </Link></p>
                    </form>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Login