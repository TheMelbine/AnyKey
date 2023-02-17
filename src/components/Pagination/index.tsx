import React, {FC} from 'react';
import style from './Pagination.module.scss'
import classNames from "classnames";

type Props = {
    pageCount: number;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void
}
const Pagination: FC<Props> = ({pageCount, currentPage, setCurrentPage}) => {

    let pageArr = new Array(Math.floor(pageCount)).fill(null).map((v, index) => index + 1)

    const onClickHandler = (value: number) => setCurrentPage(value)

    return (
        <>
            <ul className={style.pagination__list}>
                {pageArr.map((value, index) => (
                    <li className={classNames(style["pagination__item"], {
                        [style.selected]: currentPage === value
                    })} key={value + index} onClick={() => onClickHandler(value)}>{value}</li>
                ))}
            </ul>


        </>
    );

}

export default Pagination;