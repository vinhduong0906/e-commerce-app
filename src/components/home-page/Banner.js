import { Link } from 'react-router-dom';
import classes from './Banner.module.scss';
const Banner = () => {
    return (<div className={`row ${classes.banner}`}>
        <div className={` ${classes['banner-text']}`}>
            <div className={classes.inspiration}>NEW INSPIRATION 2020</div>
            <div className={classes.deal}>20% OFF ON NEW SEASON</div>
            <button> <Link to='/shop'>Browse collections</Link></button>
        </div>

        <img src={process.env.PUBLIC_URL + '/images/banner1.jpg'} alt='Banner' />

    </div>)
}; export default Banner;