import Keyboard from "../KeyboardBlock";
import {useDispatch, useSelector} from "react-redux";
import Skeleton from "../KeyboardBlock/Skeleton";
import React, {useState} from "react";
import {fetchKeyboards} from "../../redux/slices/keyboards/actions";
import Pagination from "../Pagination";

export const Category = ({categoryId}) => {
    const dispatch = useDispatch();
    const {sort, searchValue} = useSelector((state) => state.filterSlice);
    const {keyboards, isLoading, totalCount} = useSelector(state => state.keyboardsSlice)
    const [currentPage, setCurrentPage] = useState(1)
    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}/>);

    React.useEffect(() => {

        const params = {
            q: searchValue !== 0 ? searchValue : '',
            _sort: sort.Property,
            _order: sort.order,
            _page: currentPage,
            category: categoryId,
            _limit: 4,
        }

        dispatch(fetchKeyboards(params))

        ;

    }, [categoryId, sort, currentPage, searchValue]);


    return (

        <div className="content__items">
            {/* <div className="keyboard-block--wrapper"> */}
            {isLoading ? skeletons : keyboards
                .map((obj) => <Keyboard key={obj.id} {...obj} />)}
            {/* </div> */}
            <Pagination setCurrentPage={setCurrentPage} pageCount={ totalCount / 4} currentPage={currentPage}/>
        </div>
    )
}
