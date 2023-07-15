/*-----------Header of Shop page, Cart page, Check out page-----------------*/
import classes from './PageHeader.module.scss';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
const PageHeader = () => {
    const location = useLocation();
    const { category } = useParams();
    const breadCrumb = location.pathname.split('/');
    const index = breadCrumb.indexOf(category);
    if (index > -1) {
        breadCrumb.splice(index, 1);
    }
    const lastIndex = breadCrumb.length - 1;
    return <div className={`row mb-5 ${classes.header}`}>
        <div className={`col-md-6 ${classes.title}`}>{breadCrumb[lastIndex].toUpperCase()}</div>
        <div className='col-md-6 m-auto'>
            <nav aria-label="breadCrumb">
                <ol className="breadcrumb justify-content-end">
                    {breadCrumb.map((page, index) => index < lastIndex ? <li key={index} className='breadcrumb-item' ><Link className='p-0' to={'/' + page}> {page === '' ? 'HOME' : page.toUpperCase()}</Link></li> : <li key={index} className="breadcrumb-item active" aria-current="page">{page.toUpperCase()}</li>)}
                </ol>
            </nav>
        </div>
    </div>
}; export default PageHeader 