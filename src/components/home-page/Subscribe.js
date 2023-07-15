import classes from './Subscribe.module.scss'
const Subscribe = () => {
    return <div className={`row ${classes.subcribe}`}>
        <div className={`col-md-6 `}>
            <div className={classes.title}>LET'S BE FRIENDS!</div>
            <div className={classes.caption}>Nisi nisi tempor consequat laboris nisi.</div>
        </div>
        <div className={`col-md-6 `}>
            <div className={`input-group mb-3 ${classes['subcribe-form']}`}>
                <input type="text" className={`form-control ${classes['email-input']}`} placeholder="Enter your email address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className={`btn ${classes['subcribe-btn']}`} type="button" id="button-addon2">Subcribe</button>
            </div>
        </div>

    </div>
}; export default Subscribe 