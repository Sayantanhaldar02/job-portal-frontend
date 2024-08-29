import React, { useEffect, useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useCreateJobseekerProfileMutation, useUpdateJobseekerProfileMutation } from "../../reducers/ApiReducers/jobseekerProfileApi/jobseekerProfileApi";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";



export default function Job_seeker_profile_form() {
    const location = useLocation()
    const [formData, setFormData] = useState({
        first_name: location.state && location.state.first_name || "",
        last_name: location.state && location.state.last_name || "",
        email: location.state && location.state.email || "",
        phone_number: location.state && location.state.phone_number || "",
        city: location.state && location.state.city || "",
        state: location.state && location.state.state || "",
        country: location.state && location.state.country || "",
        education: location.state && location.state.education || "",
        previous_company: location.state && location.state.previous_company || "",
        employment_type: location.state && location.state.employment_type || "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const [profile_photo, setProfilePhoto] = useState(location.state && location.state.profile_photo || null)
    const [resume, setresume] = useState(location.state && location.state.resume || null)

    const nweformData = new FormData()
    nweformData.append("first_name", formData.first_name)
    nweformData.append("last_name", formData.last_name)
    nweformData.append("email", formData.email)
    nweformData.append("phone_number", formData.phone_number)
    nweformData.append("city", formData.city)
    nweformData.append("state", formData.state)
    nweformData.append("country", formData.country)
    nweformData.append("education", formData.education)
    nweformData.append("previous_company", formData.previous_company)
    nweformData.append("employment_type", formData.employment_type)
    nweformData.append("profile_photo", profile_photo)
    nweformData.append("resume", resume)

    const navigate = useNavigate()
    const [createJobseekerProfile, response] = useCreateJobseekerProfileMutation()

    const [updateJobSeekerProfile, update_response] = useUpdateJobseekerProfileMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(location.state){
            await updateJobSeekerProfile(nweformData)
        }
        await createJobseekerProfile(nweformData)
    };

    useEffect(() => {
        if (response.isSuccess) {
            toast.success("Profile created successfully!")
            navigate('/job-seeker-dashboard')
        }

        if(update_response.isSuccess){
            toast.success("Profile update successfully!")
            navigate('/job-seeker-dashboard')
        }
    }, [response.isSuccess, update_response.isSuccess])

    return (
        <>
            {/* <Navbar /> */}
            <div className=" py-10 bg-green-50 ">
                <div className="bg-white w-[70%] mx-auto shadow-lg rounded-[5px] p-8 border-primary_color border-2 ">
                    <h2 className="text-2xl font-semibold mb-6 text-center">User Information Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <TextField
                                name="first_name"
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                value={formData.first_name}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                name="last_name"
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                value={formData.last_name}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                name="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                required
                            />
                            <TextField
                                name="phone_number"
                                label="Phone Number"
                                variant="outlined"
                                fullWidth
                                value={formData.phone_number}
                                onChange={handleChange}
                                type="tel"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                            <TextField
                                name="city"
                                label="City"
                                variant="outlined"
                                fullWidth
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                name="state"
                                label="State"
                                variant="outlined"
                                fullWidth
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                name="country"
                                label="Country"
                                variant="outlined"
                                fullWidth
                                value={formData.country}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-6 mb-4">
                            <TextField
                                name="education"
                                label="Education"
                                variant="outlined"
                                fullWidth
                                value={formData.education}
                                onChange={handleChange}
                                required
                                className="mb-4"
                            />

                            <TextField
                                name="previous_company"
                                label="Previous Company"
                                variant="outlined"
                                fullWidth
                                value={formData.previous_company}
                                onChange={handleChange}
                                required
                                className="mb-4"
                            />

                            <TextField
                                name="employment_type"
                                label="Employment Type"
                                variant="outlined"
                                select
                                fullWidth
                                value={formData.employment_type}
                                onChange={handleChange}
                                required
                                className="mb-4"
                            >
                                <MenuItem value="Full-time">Full-time</MenuItem>
                                <MenuItem value="Part-time">Part-time</MenuItem>
                                <MenuItem value="Contract">Contract</MenuItem>
                                <MenuItem value="Temporary">Temporary</MenuItem>
                                <MenuItem value="Internship">Internship</MenuItem>
                            </TextField>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <label className="block">
                                <span className="text-gray-700 mr-3">Profile Photo</span>
                                <input
                                    name="profile_photo"
                                    type="file"
                                    onChange={(e) => setProfilePhoto(e.target.files[0])}
                                    className="mt-2"
                                />
                            </label>

                            <label className="block">
                                <span className="text-gray-700  mr-3">Resume</span>
                                <input
                                    name="resume"
                                    type="file"
                                    onChange={(e) => setresume(e.target.files[0])}
                                    className="mt-2"
                                />
                            </label>
                        </div>

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {location.state ? "Update" : "Submit"}
                        </Button>
                    </form>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}
