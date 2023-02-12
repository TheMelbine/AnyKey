import React from 'react';
import style from './Pagination.module.scss'
import classNames from "classnames";

const Pagination = ({pageCount, currentPage, setCurrentPage}) => {


    let pageArr = new Array(Math.floor(pageCount)).fill(null).map((v,index)=> index+1)

    const onClickHandler = (value) =>{
        setCurrentPage(value)
    }
    return (
        <>
            <ul>
                {pageArr.map((value) => (
                    <li className={classNames(style["pagination__item"],{
                        [style.selected]: currentPage === value
                    })} onClick={() => onClickHandler(value)}>{value}</li>
                ))}
            </ul>


        </>
    );

}

export default Pagination;