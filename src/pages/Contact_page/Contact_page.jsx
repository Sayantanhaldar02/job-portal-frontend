import { TextField } from '@mui/material'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import contact_us_image from "../../assets/contact_us.png"
import Navbar from '../../components/Navbar/Navbar'

const Contact_page = () => {
    return (
        <>
            {/* <Navbar/> */}
            <div className=" w-[100%] flex flex-row-reverse items-center justify-center bg-background mq900:flex-col py-[50px] mb-[60px] ">
                <img src={contact_us_image} alt="login-page-image" srcset="" className='w-[50%] ' />
                <div className="w-full max-w-md bg-card px-4 py-10  rounded-[5px] shadow-lg border-2 border-primary_color">
                    <h2 className="text-2xl text-primary text-center mb-4">Contact Us</h2>
                    <form>
                        <div className="mb-4">
                            <TextField id="name" label="Nmae" variant="outlined" className='w-[100%]' />
                        </div>
                        <div className="mb-4">
                            <TextField id="email" label="Email" variant="outlined" className='w-[100%]' />
                        </div>
                        <div className="mb-4">
                            <TextField id="contact_number" label="Contact Number" variant="outlined" className='w-[100%]' />
                        </div>
                        <div className="mb-4">
                            <TextField id="message" label="Message" variant="outlined" className='w-[100%]' />
                        </div>
                        <button type="submit" className="w-full text-primary-foreground p-3 border-primary_color border-2 rounded-[5px] hover:bg-primary_color transition-colors duration-300 hover:text-white tracking-[1px] ">
                            Send
                        </button>
                    </form>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Contact_page