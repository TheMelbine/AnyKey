import React from 'react';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";


import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Keyboard from '../components/KeyboardBlock';
import Skeleton from '../components/KeyboardBlock/Skeleton';
import Pagination from "../components/Pagination";


const Home = () => {
    const dispatch = useDispatch();

    const {categoryId,sort,searchValue,currentPage} = useSelector((state) => state.filterSlice);
    const [pageCount, setPageCount] = React.useState(0);
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}/>);
    React.useEffect(() => {
        setIsLoading(true);

        const category = categoryId > 0 ? `_category=${categoryId}` : ''

        axios
            .get(
            `https://json-anykey-1yu5wz3gk-themelbine.vercel.app/keyboard?${category}&_sort=${sort.sortProperty}&_order=${sort.order}&_page=${currentPage}&_limit=4`
            )
            .then((res) =>{
                setPageCount(res.headers["x-total-count"] / 4)
                setItems(res.data)
                setIsLoading(false)
            })
;

    }, [categoryId, sort,currentPage]);
    const keyboards = items

        .filter((obj) => {

            return obj.title.toLowerCase().includes(searchValue.toLowerCase())
        })
        .map((obj) => <Keyboard key={obj.id} {...obj} />);

    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">All keyboard</h2>
            <div className="content__items">
                {/* <div className="keyboard-block--wrapper"> */}
                {isLoading ? skeletons : keyboards}
                {/* </div> */}
            </div>
            <Pagination pageCount={pageCount}/>
        </>
    );
};
export default Home;
