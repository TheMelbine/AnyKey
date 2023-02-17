import Keyboard from "../KeyboardBlock";
import Skeleton from "../KeyboardBlock/Skeleton";
import Pagination from "../Pagination";

import {useEffect, useState} from "react";
import {RootState} from "../../redux/store";
import {TParams} from "./types";
import {useAppSelector, useActions} from "../../redux/hooks";


export const Category = ({categoryId}: { categoryId: TParams["category"] }) => {
    const {fetchKeyboards} = useActions()

    const {sort, searchValue} = useAppSelector((state: RootState) => state.filterSlice);
    const {keyboards, isLoading, totalCount} = useAppSelector((state: RootState) => state.keyboardsSlice)
    const [currentPage, setCurrentPage] = useState(1)
    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}/>);

    useEffect(() => {

        const params: TParams = {
            q: searchValue !== undefined ? searchValue : '',
            _sort: sort.sortProperty,
            _order: sort.order,
            _page: currentPage,
            _limit: 4,
        }
        if (categoryId) {
            params.category = categoryId
        }
        fetchKeyboards(params)

    }, [categoryId, sort, currentPage, searchValue]);


    return (
        <>
            <div className="content__items">
                {isLoading ? skeletons : keyboards
                    .map((obj) => <Keyboard key={obj.id} keyboard={obj}/>)}
            </div>
            <Pagination setCurrentPage={setCurrentPage} pageCount={totalCount / 4} currentPage={currentPage}/>
        </>
    )
}
