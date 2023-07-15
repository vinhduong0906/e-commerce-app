import classes from './SignIn.module.scss'
import AuthBackground from './AuthBackground';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/use-input';
import { useState } from 'react';
import { ON_LOGIN } from '../../store/authUserSlice';
import { USER_LOG_IN } from '../../store/cartListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';

const emailValidate = email => email.includes('@');
const passwordValidate = password => password.length > 0;
const SignIn = () => {
    const navigate = useNavigate();
    const loginUser = useSelector(state => state.loginUser);
    const dispatch = useDispatch();
    const [signInError, setSignInError] = useState(false);
    /*-----------Email validate-----------------*/
    const {
        hasError: emailHasError,
        inputValid: emailInputValid,
        inputBlurHandler: emailInputBlurHandler,
        inputChangeHandler: emailInputChangeHandler,
    } = useInput(emailValidate);
    /*-----------Password Validate-----------------*/
    const { inputValue: passwordInputValue, inputBlurHandler: passwordInputBlurHandler,
        inputValid: passwordInputValid,
        hasError: passwordHasError,
        inputChangeHandler: passwordInputChangeHandler,
        reset: passwordReset } = useInput(passwordValidate);
    /*-----------Form Validate-----------------*/
    let formValid =
        emailInputValid && passwordInputValid;
    /*----------------------------*/
    const signInHandler = (e) => {
        e.preventDefault();
        const cartList = localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : [];//Get cartList from local
        const usersArr = JSON.parse(localStorage.getItem('usersArr'));//Get user array from local
        //Find user in user array
        const user = usersArr && usersArr.find(user => user.email === e.target.email.value && user.password === e.target.password.value);
        if (user) {//user is present
            dispatch(ON_LOGIN({ userName: user.name, userEmail: user.email }));
            dispatch(USER_LOG_IN(cartList));
            localStorage.setItem('loginUser', JSON.stringify({ email: user.email, name: user.name }));
            navigate('/');
        }
        else {//user is not present
            setSignInError(true);
            passwordReset();
        }
    };
    return <AuthBackground >
        {loginUser.isLogin && <Navigate to='/' />}{/*-----------If user is loged in redirect to Home page-----------------*/}
        <h3>Sign In</h3>

        <form onSubmit={signInHandler} className={classes['form-group']}>

            {emailHasError && <div className={` text-start ${classes['text-error']}`}>You must enter a valid email!</div>}
            {signInError && <div className={` text-start ${classes['text-error']}`}>Your acount or password is incorrect!</div>}
            <input type="email" className={`form-control border-bottom-0 `} id="email" name='email' placeholder="Email" onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} />
            {passwordHasError && <div className={` text-start ${classes['text-error']}`}>You must enter password!</div>}
            <input type="password" className={`form-control  `} id="password" placeholder="Password" value={passwordInputValue} onBlur={passwordInputBlurHandler} onChange={passwordInputChangeHandler} />

            <button className={`btn btn-secondary  btn-block `} type='submit' disabled={!formValid}  >SIGN IN</button>

        </form>
        <div className={`mt-5 ${classes['click-sign-in']}`}>Create an acount? <Link to='/register' className='p-0'>Sign up</Link></div>
    </AuthBackground>
}; export default SignIn 
