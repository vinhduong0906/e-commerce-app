/*------------Convert description from paragraph to array----------------*/
const useDescription = () => {
    const convertDescription = (des) => {
        const descriptions = des.split("•");
        return descriptions;

    };
    return { convertDescription }
}; export default useDescription