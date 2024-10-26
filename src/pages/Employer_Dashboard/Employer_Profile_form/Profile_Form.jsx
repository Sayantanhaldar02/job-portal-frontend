import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import { useCreateEmployerProfileMutation, useUpdateEmployerProfileMutation } from '../../../reducers/ApiReducers/EmpProfileApi/EmpProfileApi';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';




const Employer_Profile_Form = () => {

  const location = useLocation()
  const [profile_details, setProfile_details] = useState({
    company_name: location.state && location.state.company_name || "",
    company_city: location.state && location.state.company_city || "",
    company_state: location.state && location.state.company_state || "",
    company_country: location.state && location.state.company_country || "",
    company_website: location.state && location.state.company_website || "",
    contact_name: location.state && location.state.contact_name || "",
    contact_email: location.state && location.state.contact_email || "",
    contact_phone_number: location.state && location.state.contact_phone_number || "",
  })

  const onChnageHandeler = (e) => {
    setProfile_details({ ...profile_details, [e.target.name]: e.target.value })
  }

  const [company_logo, setCompanyLogo] = useState(location.state && location.state.company_logo || "")
  const onChnageHandelerForImage = (e) => {
    setCompanyLogo(e.target.files[0])
  }

  const formData = new FormData();
  formData.append('company_name', profile_details.company_name);
  formData.append('company_city', profile_details.company_city);
  formData.append('company_state', profile_details.company_state);
  formData.append('company_country', profile_details.company_country);
  formData.append('company_website', profile_details.company_website);
  formData.append('contact_name', profile_details.contact_name);
  formData.append('contact_email', profile_details.contact_email);
  formData.append('contact_phone_number', profile_details.contact_phone_number);
  formData.append('company_logo', company_logo);

  const [createEmployerProfile, { isError, isSuccess, data, error }] = useCreateEmployerProfileMutation()

  const [updateProfile, update_details] = useUpdateEmployerProfileMutation()

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (location.state) {
      await updateProfile(formData)
      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ', ' + pair[1]);
      // }
      // console.log({...profile_details,company_logo})
    }
    await createEmployerProfile(formData)
    // console.log('Profile Details:', { ...profile_details, company_logo });

  }
  const navigate = useNavigate()
  useEffect(() => {
    if (isSuccess) {
      toast.success("Profile Created!")
      setProfile_details({
        company_name: "",
        company_city: "",
        company_state: "",
        company_country: "",
        company_website: "",
        contact_name: "",
        contact_email: "",
        contact_phone_number: "",
        company_logo: "",
      })

      navigate("/employer-profile")
    }
    if (isError) {
      toast.error(error.message)
      console.log(error)
    }

  }, [isSuccess,])

  useEffect(() => {
    if (update_details.isSuccess) {
      toast.success("Profile Updated!")
      setProfile_details({
        company_name: "",
        company_city: "",
        company_state: "",
        company_country: "",
        company_website: "",
        contact_name: "",
        contact_email: "",
        contact_phone_number: "",
        company_logo: "",
      })

      navigate("/employer-profile")
    }
    if (update_details.isError) {
      toast.error(update_details.error.data)
    }

  }, [update_details.isSuccess, update_details.isError])

  return (
    <>
      {/* <Navbar /> */}
      <div className=" w-full p-4 mb-[70px]">
        <h2 className="text-2xl font-bold mb-4">Company Profile Information</h2>
        <form className="space-y-4 px-[40px] " onSubmit={handelSubmit}>
          {/* <div className='flex items-center gap-7 justify-between'> */}
          <TextField
            fullWidth
            label="Company Name"
            variant="outlined"
            required
            onChange={onChnageHandeler}
            name='company_name'
            value={profile_details.company_name}
          />
          <TextField
            fullWidth
            label="City"
            variant="outlined"
            required
            onChange={onChnageHandeler}
            name='company_city'
            value={profile_details.company_city}
          />
          {/* </div> */}

          {/* <div className='flex items-center gap-7 justify-between'> */}
          <TextField
            fullWidth
            label="State"
            variant="outlined"
            required
            onChange={onChnageHandeler}
            name='company_state'
            value={profile_details.company_state}
          />
          <TextField
            fullWidth
            label="Country"
            variant="outlined"
            required
            onChange={onChnageHandeler}
            name='company_country'
            value={profile_details.company_country}
          />
          {/* </div> */}

          {/* <div className='flex items-center gap-7 justify-between'> */}
          <TextField
            fullWidth
            label="Website"
            variant="outlined"
            required
            onChange={onChnageHandeler}
            name="company_website"
            value={profile_details.company_website}
          />
          <TextField
            fullWidth
            label="Contact Name"
            variant="outlined"
            required
            onChange={onChnageHandeler}
            name='contact_name'
            value={profile_details.contact_name}
          />
          {/* </div> */}
          {/* <div className='flex items-center gap-7 justify-between'> */}
          <TextField
            fullWidth
            label="Contact Email"
            variant="outlined"
            type="email"
            required
            onChange={onChnageHandeler}
            name='contact_email'
            value={profile_details.contact_email}
          />
          <TextField
            fullWidth
            label="Contact Phone Number"
            variant="outlined"
            required
            onChange={onChnageHandeler}
            name='contact_phone_number'
            value={profile_details.contact_phone_number}
          />
          {/* </div> */}
          <div className='flex items-center gap-7 '>
            <label htmlFor="company_logo">Company Logo</label>
            <input type="file" name="company_logo" id="company_logo" onChange={onChnageHandelerForImage} />
          </div>
          <div className='w-full flex justify-center items-center'>
            <button variant="contained" color="primary" type="submit" className='border-2 border-primary_color px-[80px] py-3 rounded-[5px] text-[20px]'>
              {location.state ? "Update Profile" : "Create Profile"}
            </button>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Employer_Profile_Form;
