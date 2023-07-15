import { ON_LOGOUT } from "../store/authUserSlice";
import { USER_LOG_OUT } from "../store/cartListSlice";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const SignOutPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ON_LOGOUT());
        dispatch(USER_LOG_OUT());
    })

    localStorage.removeItem('loginUser');
    return <Navigate to='/login'></Navigate>
}; export default SignOutPage
