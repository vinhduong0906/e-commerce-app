/*-----------Search and Filter control-----------------*/
const Form = () => {
    return (
        <div className="row pt-2 ps-4 pe-4 mb-3">
            <div className="col-sm-6"><form className="form-inline">
                <input className="form-control mr-sm-2 w-50" type="search" placeholder="Enter Search Here!" aria-label="Search" />
            </form></div>
            <div className="col-sm-6 d-flex justify-content-end"><select className="bootstrap-select ">
                <option value="1" >Default sorting</option>
                <option value="2" >Feature 2</option>
            </select></div>
        </div>)
}; export default Form 