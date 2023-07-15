/*Set background for Sign up and Login Component */
import classes from './AuthBackground.module.scss'
const AuthBackground = (props) => {
    return <div className={`pt-5 ${classes['auth-background']}`}>
        <div className={`text-center ${classes.container}`}>
            {props.children}
        </div></div>
}; export default AuthBackground 