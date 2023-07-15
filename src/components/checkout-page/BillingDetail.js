import classes from './BillingDetail.module.scss';
const BillingDetail = () => {
    return <form className={classes['billing-detail']}>
        <div class="mb-3">
            <label for="inputName" class="form-label">FULL NAME:</label>
            <input type="text" class="form-control rounded-0 shadow-none" id='inputName' name='inputName' placeholder='Enter Your Full Name Here!' />
        </div>
        <div class="mb-3">
            <label for="inputEmail" class="form-label">EMAIL:</label>
            <input type="text" class="form-control rounded-0 shadow-none" id="inputEmail" name='inputEmail' placeholder='Enter Your Email Here!' />
        </div>
        <div class="mb-3">
            <label for="inputPhoneNumber" class="form-label">PHONE NUMBER:</label>
            <input type="number" class="form-control rounded-0 shadow-none" id="inputPhoneNumber" name='inputPhoneNumber' placeholder='Enter Your Phone Number Here!' />
        </div>
        <div class="mb-3">
            <label for="inputAddress" class="form-label">ADDRESS:</label>
            <input type="text" class="form-control rounded-0 shadow-none" id="inputAddress" name='inputAddress' placeholder='Enter Your Address Here!' />
        </div>
        <button type="submit" class="p-2 ps-4 pe-4 text-light fw-light fs-5">Place order</button>
    </form>
}; export default BillingDetail 