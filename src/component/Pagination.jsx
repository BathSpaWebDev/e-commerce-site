import ReactPaginate from 'react-paginate';
import "../scss/component/Pagination.scss";

export const Pagination = ({ show, totalData, handleChange }) => {
    const totalPage = Math.ceil(totalData / show);
   
    return (
        <ReactPaginate
            previousLabel={'Prev'}
            nextLabel={'Next'}
            pageCount={totalPage}
            onPageChange={handleChange}
            className={'pagination-container'}
        />
    )
}