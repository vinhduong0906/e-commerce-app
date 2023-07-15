/*-----------Convert price to dot format-----------------*/
const usePrice = () => {
    const convertPrice = (price) => {
        const stringPrice = price.toString()
        const priceArr = stringPrice.split('');
        for (let i = stringPrice.length - 3; i > 0; i = i - 3) {
            priceArr.splice(i, 0, '.');
        }
        return priceArr.join('');
    };
    const totalPrice = (cartList) => {
        let subTotal = 0;
        cartList.map(item => subTotal += item.price * item.quantity);
        return subTotal;
    }

    return { convertPrice, totalPrice }

};
export default usePrice 