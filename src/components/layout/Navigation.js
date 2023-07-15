import classes from './Navigation.module.css'
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
const Navigation = () => {
    const cartList = useSelector(state => state.cartList);
    const loginUser = useSelector(state => state.loginUser);
    return (<div className={classes.navigation}>
        {/*-----------Left Menu-----------------*/}
        <ul className={`nav `}>
            <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? classes.active : '')} aria-current="page" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? classes.active : '')} to='shop/all'>Shop</NavLink>
            </li>

        </ul>
        {/*-----------Page title-----------------*/}
        <h1 className={classes.title}>BOUTIQUE</h1>
        {/*-----------Right Menu-----------------*/}
        <ul className={`nav list-unstyled ${classes['nav-right']}`}>
            <li> <Link className='position-relative' to='/cart'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
                <div className={`d-inline ps-1 pe-1 rounded-circle  ${classes['item-count']}`} >{cartList.length}</div>
                Cart</Link></li>
            {loginUser.isLogin && <Fragment><li> <button className='bg-transparent'  >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                {loginUser.name}
                <svg style={{ color: ' #000' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16"> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" fill="#000000"></path> </svg>
            </button></li>
                <li><Link to='/logout'>
                    (Logout)</Link></li>
            </Fragment>}
            {!loginUser.isLogin && <li><Link to='/login'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg> Login</Link></li>}
        </ul>

    </div>)
}; export default Navigation 