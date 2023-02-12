import React from 'react';
import {useDispatch, useSelector} from "react-redux";


import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Keyboard from '../components/KeyboardBlock';
import Skeleton from '../components/KeyboardBlock/Skeleton';
import Pagination from "../components/Pagination";
import {fetchKeyboards} from "../redux/slices/keyboards/actions";


const Home = () => {
    const dispatch = useDispatch();
    const {categoryId, sort, searchValue} = useSelector((state) => state.filterSlice);
    const {keyboards, isLoading, totalCount} = useSelector(state => state.keyboardsSlice)
    const [currentPage, setCurrentPage] = React.useState(1)



    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}/>);
    React.useEffect(() => {
        const category = categoryId > 0 ? `${categoryId}` : ''
        const params = {
            q: searchValue !== 0 ? searchValue : '',
            _sort: sort.Property,
            _order: sort.order,
            _page: currentPage,
            _limit: 4,
        }
        if (category) {
            params.category = category
        }
        dispatch(fetchKeyboards(params))

        ;

    }, [categoryId, sort, currentPage, searchValue]);


    return (
        <>
            <div className="content__top">
                <Categories setCurrentPage={setCurrentPage}/>
                <Sort/>
            </div>
            <h2 className="content__title">All keyboard</h2>
            <div className="content__items">
                {/* <div className="keyboard-block--wrapper"> */}
                {isLoading ? skeletons : keyboards
                    .map((obj) => <Keyboard key={obj.id} {...obj} />)}
                {/* </div> */}
            </div>

            <Pagination setCurrentPage={setCurrentPage} pageCount={totalCount / 4} currentPage={currentPage}/>

        </>
    );
};
export default Home;
