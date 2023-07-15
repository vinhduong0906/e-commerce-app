import classes from './Categories.module.scss'
import { Link } from 'react-router-dom';
const Categories = () => {
    return (<div className={`row ${classes.categories}`}>
        <div className={classes.title}>
            <div className={classes['text-rotate']}>CAREFULLY CREATED COLLECTIONS</div>
            <div className={classes['text']}>BROWSE OUR CATEGORIES</div>
        </div>
        <div className={classes['categories-inner']}>
            <div className='d-flex justify-content-md-between'>
                <Link to='shop/iphone' className=''><img src={process.env.PUBLIC_URL + '/images/product_1.a.png'} alt='Iphone Category'></img></Link>
                <Link to='shop/macbook' className=''><img src={process.env.PUBLIC_URL + '/images/product_2.png'} alt='Mac category' /></Link>
            </div>
            <div className='d-flex gap-3 justify-content-md-between'>
                <Link to='shop/ipad' className=''><img src={process.env.PUBLIC_URL + '/images/product_3.png'} alt='Ipad Category' /></Link>
                <Link to='shop/watch' className=''><img src={process.env.PUBLIC_URL + '/images/product_4.png'} alt='Watch Category' /></Link>
                <Link to='shop/airpod' className=''><img src={process.env.PUBLIC_URL + '/images/product_5.png'} alt='AirPods Category' /></Link>
            </div>
        </div>
    </div>)
}; export default Categories 