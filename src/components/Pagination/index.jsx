import React from 'react';
import ReactPaginate from "react-paginate";
import {useSelector, useDispatch} from "react-redux";
import styles from './Pagination.module.scss'
import {setCurrentPage} from "../../redux/slices/filterSlice";

const Pagination = ({pageCount}) => {
    const dispatch = useDispatch();
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={event => dispatch(setCurrentPage(event.selected + 1))}
            pageRangeDisplayed={4}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
}

export default Pagination;