import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getUserDetails from '../../service/getUserDetails';
import useLogout from '../../service/logoutService';

export default function DrawerList() {
  const { logout } = useLogout();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

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
  }, [authToken, role, logout]);


  const DrawerList = (
    <div className='w-[250px] bg-primary_color h-full ' role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding className=' text-white'>
          <Link to={role === "employer" ? "/employer-dashboard" : "/"} className='w-full'>
            <ListItemButton>
              <ListItemText primary={role === "employer" ? "Dashboard" : "Home"} />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding className=' text-white'>
          <Link to={role === "employer" ? "/employer-jobs" : "/jobs"} className='w-full'>
            <ListItemButton>
              <ListItemText primary={role === "employer" ? "Manage Jobs" : "Jobs"} />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding className=' text-white'>
          <Link to={role === "employer" ? "/employer-job-application" : ""} className='w-full'>
            <ListItemButton>
              <ListItemText primary={role === "employer" ? "Job Application" : "About"} />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding className=' text-white'>
          <Link to="/contact" className='w-full'>
            <ListItemButton>
              <ListItemText primary='Contact' />
            </ListItemButton>
          </Link>
        </ListItem>


        {
          role === "jobseeker" ? (
            <ListItem disablePadding className=' text-white'>
              <Link to="/job-seeker-dashboard" className='w-full'>
                <ListItemButton>
                  <ListItemText primary='Jobseeker' />
                </ListItemButton>
              </Link>
            </ListItem>
          ) : role === "employer" ? (
            <ListItem disablePadding className=' text-white'>
              <Link to="/employer-profile" className='w-full'>
                <ListItemButton>
                  <ListItemText primary='Employer' />
                </ListItemButton>
              </Link>
            </ListItem>
          ) : (
            <>
              <ListItem disablePadding className=' text-white'>
                <Link to="/login" className='w-full'>
                  <ListItemButton>
                    <ListItemText primary='Sign-in' />
                  </ListItemButton>
                </Link>
              </ListItem>
            </>
          )
        }

        {
          role && <ListItem disablePadding className=' text-white'>
            <ListItemButton className='w-full' onClick={() => logout()}>
              <ListItemText primary='Logout' />
            </ListItemButton>
          </ListItem>
        }

      </List>
      {/* <Divider />*/}
    </div>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)}><MenuIcon /></button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
