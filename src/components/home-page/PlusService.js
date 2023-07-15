import classes from './PlusService.module.scss'
const PlusService = () => {
    return (<div className={`row mt-4 mb-4 ${classes['plus-service']}`}>
        <div className='col-md-4'>
            <div className={classes.title}>FREE SHIPPING</div>
            <div className={classes.caption}>Free shipping worlwide</div>
        </div>
        <div className='col-md-4'>
            <div className={classes.title}>24 X 7 SERVICE</div>
            <div className={classes.caption}>Free shipping worlwide</div>
        </div>
        <div className='col-md-4'>
            <div className={classes.title}>FESTIVAL OFFER</div>
            <div className={classes.caption}>Free shipping worlwide</div>
        </div>
    </div>)
}; export default PlusService 