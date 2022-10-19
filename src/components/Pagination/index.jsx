import React from 'react';
import ReactPaginate from "react-paginate";

import styles from './Pagination.module.scss'

const Pagination = ({xTotalCount}) => {
    return (
        <ReactPaginate
            class = "unselectable"
            className={styles.root}
            // className={styles.unselectable}
            breakLabel="..."
            nextLabel=">"
            onPageChange={event => console.log(event)}
            pageRangeDisplayed={5}
            pageCount={xTotalCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
}

export default Pagination;