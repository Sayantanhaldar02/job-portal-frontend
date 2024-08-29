// import { TextField } from '@mui/material'
// import React, { useState } from 'react'
// import { useTestImageMutation } from './src/reducers/ApiReducers/EmpProfileApi/EmpProfileApi'

const TestImage = () => {
    // const [company_name, setcompany_name] = useState("")
    // const [com_image, setcom_image] = useState(null)

    // const formData = new FormData();
    // formData.append('company_name', company_name);
    // formData.append('com_image', com_image);

    // const [testImage] = useTestImageMutation()
    // const handelSubmit = async (e) => {
    //     e.preventDefault()
    //     await testImage(formData)
    // }
    return (
        <>
            {/* <form className="space-y-4 px-[40px] " onSubmit={handelSubmit}>
                <TextField
                    fullWidth
                    label="Company Name"
                    variant="outlined"
                    required
                    onChange={(e) => setcompany_name(e.target.value)}
                    name='company_name'
                    value={company_name}
                />
                <div className='flex items-center gap-7 '>
                    <label htmlFor="company_logo">Company Logo</label>
                    <input type="file" name="com_image" id="com_image" onChange={(e) => setcom_image(e.target.files[0])} />
                </div>
                <div className='w-full flex justify-center items-center'>
                    <button variant="contained" color="primary" type="submit" className='border-2 border-primary_color px-[80px] py-3 rounded-[5px] text-[20px]'>
                        Create Profile
                    </button>
                </div>
            </form> */}

        </>
    )
}

export default TestImage