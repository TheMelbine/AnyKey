import React from 'react';
import {useSelector} from "react-redux";


import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Keyboard from '../components/KeyboardBlock';
import Skeleton from '../components/KeyboardBlock/Skeleton';
import Pagination from "../components/Pagination";
import {getKeyboards} from "../api/keyboardAPI";


const Home = () => {

    const {categoryId,sort,searchValue} = useSelector((state) => state.filterSlice);
    const [currentPage, setCurrentPage] = React.useState(1)
    const [pageCount, setPageCount] = React.useState(0);
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);


    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}/>);
    React.useEffect(() => {
        setIsLoading(true);
        const params = {
            search: searchValue !== 0 ? searchValue : '',
            _sort: sort.Property,
            _order: sort.order,
            _page: currentPage,
            _category: categoryId > 0 ? `${categoryId}` : '',
            _limit: 4,
        }

        getKeyboards(params)
            .then((res) =>{
                setPageCount(res.headers["x-total-count"] / 4)
                setItems(res.data)
                setIsLoading(false)
            })
;

    }, [categoryId, sort,currentPage,searchValue]);
    const keyboards = items
        .map((obj) => <Keyboard key={obj.id} {...obj} />);

    return (
        <>
            <div className="content__top">
                <Categories setCurrentPage={setCurrentPage}/>
                <Sort/>
            </div>
            <h2 className="content__title">All keyboard</h2>
            <div className="content__items">
                {/* <div className="keyboard-block--wrapper"> */}
                {isLoading ? skeletons : keyboards}
                {/* </div> */}
            </div>

            <Pagination setCurrentPage={setCurrentPage} pageCount={pageCount} currentPage={currentPage}/>

        </>
    );
};
export default Home;
