/*----------------------------*/
import classes from './SideBar.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const SideBar = () => {

    return (<Navbar bg="white" expand="md">
        <Container className='d-flex flex-column align-items-baseline p-0 pe-2'>
            <Navbar.Brand className={classes['sidebar-title']}
            >CATEGORIES</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='w-100'>
                <Nav className="me-auto d-flex flex-column fw-normal w-100">
                    <div className={` ${classes['sidebar-inner-title']}`} >APPLE</div>
                    <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/shop/all'>All</NavLink>
                    <div className={classes['sidebar-inner-title']} >IPHONE & MAC</div>
                    <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/shop/iphone'>IPhone</NavLink>
                    <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/shop/ipad'>Ipad</NavLink>
                    <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/shop/macbook'>Macbook</NavLink>
                    <div className={classes['sidebar-inner-title']} >WIRELESS</div>
                    <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/shop/airpod'>Airpod</NavLink>
                    <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/shop/watch'>Watch</NavLink>
                    <div className={classes['sidebar-inner-title']} >OTHER</div>
                    <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/shop/mouse'>Mouse</NavLink>
                    <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/shop/keyboard'>Keyboard</NavLink>
                    <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/shop/other'>Other</NavLink>

                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}; export default SideBar 