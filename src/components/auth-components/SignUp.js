import classes from './SignUp.module.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/use-input';
import { useState, useRef, Fragment } from 'react';
import AuthBackground from './AuthBackground';
import { useSelector } from 'react-redux';
const nameValidate = name => name.length != '';
const emailValidate = email => email.includes('@');
const passwordValidate = password => password.length > 8;
const phoneValidate = phone => phone.length > 9;
const SignUp = () => {
    const navigate = useNavigate();
    const loginUser = useSelector(state => state.loginUser);
    const [emailExist, setEmailExist] = useState(false);
    const emailInputRef = useRef();
    /*-----------Name input Validate-----------------*/
    const { inputValue: nameInputValue,
        hasError: nameHasError,
        inputValid: nameInputValid,
        inputBlurHandler: nameInputBlurHandler,
        inputChangeHandler: nameInputChangeHandler,
        reset: nameReset } = useInput(nameValidate);
    /*-----------Email input Validate-----------------*/
    const { inputValue: emailInputValue,
        hasError: emailHasError,
        inputValid: emailInputValid,
        inputBlurHandler: emailInputBlurHandler,
        inputChangeHandler: emailInputChangeHandler,
        reset: emailReset } = useInput(emailValidate);
    /*-----------Password input Validate-----------------*/
    const { inputValue: passwordInputValue,
        hasError: passwordHasError,
        inputValid: passwordInputValid,
        inputBlurHandler: passwordInputBlurHandler,
        inputChangeHandler: passwordInputChangeHandler,
        reset: passwordReset } = useInput(passwordValidate);
    /*-----------Phone input Validate-----------------*/
    const { inputValue: phoneInputValue,
        hasError: phoneHasError,
        inputValid: phoneInputValid,
        inputBlurHandler: phoneInputBlurHandler,
        inputChangeHandler: phoneInputChangeHandler,
        reset: phoneReset } = useInput(phoneValidate);
    /*-----------Form validate-----------------*/
    let formValid = nameInputValid &&
        emailInputValid &&
        passwordInputValid &&
        phoneInputValid
    /*----------------------------*/
    const signUpHandler = (e) => {

        e.preventDefault();
        const localUsersArr = JSON.parse(localStorage.getItem("usersArr"));//Get user array from local
        if ((localUsersArr !== null) && (localUsersArr.find(user => user.email === e.target.email.value))) {
            setEmailExist(true);//If email is exist then display error
            emailInputRef.current.select();
            return;
        }
        const user = { name: e.target.name.value, email: e.target.email.value, password: e.target.password.value, phone: e.target.phone.value };

        if (localUsersArr !== null) {//If user array has present

            localUsersArr.push(user);
            localStorage.setItem('usersArr', JSON.stringify(localUsersArr))
        }//If user array has not present
        else { const usersArr = [user]; localStorage.setItem('usersArr', JSON.stringify(usersArr)) };
        alert('Sign up Successfull!');
        nameReset();
        emailReset();
        passwordReset();
        phoneReset();
        navigate('/login');
    }



    return <AuthBackground className={classes['sign-up']}>
        {loginUser.isLogin && <Navigate to='/' />}
        <h3>Sign Up</h3>
        {emailExist && <div className={` text-start ${classes['text-error']}`}>This email has exist! Please login or use another email address!</div>}
        <form onSubmit={signUpHandler} className={classes['form-group']}>
            {nameHasError && <div className={` text-start  ${classes['text-error']}`} require>You must enter a name!</div>}
            <input type="text" className={`form-control border-bottom-0 `} id="name" name='name' placeholder="Full Name" onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
            {emailHasError && <div className={`border-top text-start ${classes['text-error']}`}>You must enter a valid email!</div>}

            <input ref={emailInputRef} type="email" className={`form-control border-bottom-0 `} id="email" name='email' placeholder="Email" onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} />
            {passwordHasError && <div className={`border-top text-start ${classes['text-error']}`}>Password must be at least 6 character!</div>}
            <input type="password" className={`form-control border-bottom-0 `} id="password" placeholder="Password" onChange={passwordInputChangeHandler} onBlur={passwordInputBlurHandler} />
            {phoneHasError && <div className={`border-top text-start ${classes['text-error']}`}>You must enter a valid phone number!</div>}
            <input type="number" className={`form-control `} id="phone" placeholder="Phone" onChange={phoneInputChangeHandler} onBlur={phoneInputBlurHandler} />
            <button className={`btn btn-secondary  btn-block `} type='submit' disabled={!formValid}  >SIGN UP</button>

        </form>
        <div className={`mt-5 ${classes['click-sign-in']}`}>Login? <Link to='/login' className='p-0'>Click</Link></div>
    </AuthBackground>

}; export default SignUp 