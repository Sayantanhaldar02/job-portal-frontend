import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { image_base_url } from '../../Constant/constant';


const Profile = ({ data, handelDeleteProfile, isSuccess }) => {
    const deleteProfile = (value) => {
        handelDeleteProfile(value)
    }
    return (
        <div className=" flex items-center justify-center shadow-lg ">
            <div className=" w-full shadow-lg rounded-lg px-[60px] mq900:px-[10px] py-[40px]">
                <div className="">
                    <div className="flex flex-col justify-center items-center ">
                        <img
                            src={data.profile_photo}
                            alt="Profile"
                            className=" border-4 w-[200px] h-[200px] rounded-full mq900:w-[100px] mq900:h-[100px] "
                        />
                        <p className="text-[30px] font-semibold text-gray-800">{`${data.first_name} ${data.last_name}`}</p>
                    </div>

                    <div className="mt-5 shadow-md w-full p-4 rounded-[10px] border-[1.5px] border-green-300">
                        <h3 className="text-2xl font-semibold text-gray-600">Personal Details</h3>
                        <div className="flex items-center justify-between mq900:flex-col mq900:items-start">
                            <div className='mt-2 flex flex-col gap-1'>
                                <p className="text-gray-600 font-semibold">Email: {data.email}</p>
                                <p className="text-gray-600 font-semibold">Contact Number: {data.phone_number}</p>
                                <p className="text-gray-600 font-semibold">Location: {`${data.state}, ${data.country}`}</p>
                                <p className="text-gray-600 font-semibold">Address: {`${data.city}, ${data.state}, ${data.country}`}</p>
                            </div>
                            <div>
                                <p className="text-gray-600">
                                    <a target='_blank' href={data.resume} download={`${data.first_name}_${data.last_name}_resume`}>
                                        <button className="px-[20px] py-[7px] border-[1px] cursor-pointer border-primary_color rounded-[5px] hover:bg-primary_color hover:text-white mq900:mt-3 ">
                                            <DownloadIcon /> Download Resume
                                        </button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="mt-5 shadow-md w-full p-4 rounded-[10px]  border-[1.5px] border-green-300">
                    <h3 className="text-2xl font-semibold text-gray-700">Past Education</h3>
                    <ul className="list-disc ml-5 text-gray-600">
                        <li>{data.education}</li>
                    </ul>
                </div>

                <div className="mt-5 shadow-md w-full p-4 rounded-[10px]  border-[1.5px] border-green-300">
                    <h3 className="text-2xl font-semibold text-gray-700">Past Employment</h3>
                    <ul className="list-disc ml-5 text-gray-600">
                        <li>{data.previous_company}</li>
                    </ul>
                </div>

                <div className="mt-5 shadow-md w-full p-4 rounded-[10px]  border-[1.5px] border-green-300">
                    <h3 className="text-2xl font-semibold mt-4 text-gray-700">Skills</h3>
                    <ul className="list-disc ml-5 text-gray-600">
                        <li>JavaScript, React, Node.js</li>
                        <li>HTML, CSS, Tailwind CSS</li>
                        <li>Git, GitHub, Agile Methodologies</li>
                    </ul>
                </div>


                <div className="mt-5 shadow-md w-full p-4 rounded-[10px]  border-[1.5px] border-green-300">
                    <h3 className="text-2xl font-semibold mt-4 text-gray-700">Project Url</h3>
                    <ul className="list-disc ml-5 text-gray-600">
                        <li>Coding and exploring new technologies</li>
                        <li>Photography and travel</li>
                        <li>Reading science fiction novels</li>
                    </ul>
                </div>


                <div className='flex items-center justify-end mt-5 gap-5'>
                    {
                        isSuccess ? (
                            <Link to="/job-seeker-profile-form" state={data} >
                                <button className="mb-4 border-2 border-primary_color p-2 px-4 rounded-[5px] hover:bg-primary_color hover:text-white transition-all"><EditIcon /> Update Profile</button>
                            </Link>
                        ) : (
                            <Link to="/job-seeker-profile-form" >
                                <button className="mb-4 border-2 border-primary_color p-2 px-4 rounded-[5px] hover:bg-primary_color hover:text-white transition-all"><EditIcon /> Create Profile</button>
                            </Link>
                        )
                    }
                   {isSuccess &&  <button type="submit" className="mb-4 border-2 border-pink-700 p-2 px-4 rounded-[5px] hover:bg-pink-700 hover:text-white transition-all" onClick={() => deleteProfile(true)}><span ><DeleteIcon /> Delete Profile</span></button>}
                </div>

            </div>
        </div>
    )
};

export default Profile;