// logoutService.js
import { useNavigate } from 'react-router-dom';
import { useUserLogoutMutation } from '../reducers/ApiReducers/authApi/authApi';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
const useLogout = () => {
  const navigate = useNavigate();
  const [userLogout, {isSuccess, isError,error, data}] = useUserLogoutMutation()

  useEffect(()=>{
    if(isSuccess){
      toast.success("User logged out!")
    }
    if(isError){
      console.log(error);
    }
  },[isSuccess,isError])

  const logout = async () => {
    localStorage.removeItem('authToken');
    // Optionally, you can clear context or state here
    await userLogout();
    // Redirect to login or home page
    navigate('/login', { replace: true });
  };

  return { logout };
};

export default useLogout;
