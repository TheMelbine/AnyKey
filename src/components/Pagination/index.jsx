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
            <ul className={style.pagination__list}>
                {pageArr.map((value,index) => (
                    <li className={classNames(style["pagination__item"],{
                        [style.selected]: currentPage === value
                    })} key={value + index} onClick={() => onClickHandler(value)}>{value}</li>
                ))}
            </ul>


        </>
    );

}

export default Pagination;