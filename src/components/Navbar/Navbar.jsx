import DrawerList from "./Drawer"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import getUserDetails from "../../service/getUserDetails"
import useLogout from "../../service/logoutService"

const Navbar = () => {
    const { logout } = useLogout();
    const [role, setRole] = useState(null)
    const authToken = localStorage.getItem('authToken')
    useEffect(() => {
        if (authToken) {
            const userDetails = getUserDetails(authToken)
            setRole(userDetails.role)
        }
        if (!authToken) {
            setRole(null)
        }
    }, [authToken,role,logout]);
    

    return (
        <>
            <div className="bg-primary_color text-white w-full">
                <div className="flex p-4 items-center justify-between">
                    <div variant="h6" component="div" sx={{ flexGrow: 1 }} className="">
                        <Link>Job.com</Link>
                    </div>
                    <div className="flex items-center gap-10 mq900:hidden">
                        <Link to={role === "employer" ? "/employer-dashboard" : "/"}>{role === "employer" ? "Dashboard" : "Home"}</Link>

                        <Link to={role === "employer" ? "/employer-jobs" : "/jobs"}>{role === "employer" ? "Manage Jobs" : "Jobs"}</Link>

                        <Link to={role === "employer" ? "/employer-job-application" : ""}>{role === "employer" ? "Job Application" : "About"}</Link>

                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="flex items-center gap-6 mq900:hidden">
                        {
                            role === "jobseeker" ? (
                                <Link to="/job-seeker-dashboard">
                                    <p>Jobseeker</p>
                                </Link>
                            ) : role === "employer" ? (
                                <Link to="/employer-profile">
                                    <p>Employer</p>
                                </Link>
                            ) : (
                                <>
                                    <Link to="/login">Sign-in</Link>
                                    <Link to="/registration">Sign-up</Link>
                                </>
                            )
                        }
                        {role &&
                            <>
                                <button className="border-2 border-primary_color bg-primary_color transition text-white px-4 py-2 rounded mq450:text-[13px] font" onClick={()=>logout()}>Logout</button>
                            </>
                        }
                    </div>

                    <div className=" mq900:block mq1700:hidden">
                        <DrawerList />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar