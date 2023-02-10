import React from 'react';
import axios from "axios";
import {useSelector} from "react-redux";


import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Keyboard from '../components/KeyboardBlock';
import Skeleton from '../components/KeyboardBlock/Skeleton';
import Pagination from "../components/Pagination";


const Home = () => {

    const [remountComponent, setRemountComponent] = React.useState(0);
    const {categoryId,sort,searchValue} = useSelector((state) => state.filterSlice);
    const [currentPage, setCurrentPage] = React.useState(1)
    const [pageCount, setPageCount] = React.useState(0);
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const resetCurrentPage = () =>(
        setCurrentPage(1)

    )

    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}/>);
    React.useEffect(() => {
        setIsLoading(true);

        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue !== 0 ? searchValue : ''
        axios
            .get(
            `https://json-anykey.vercel.app/keyboard?q=${search}&_sort=${sort.sortProperty}&_order=${sort.order}&_page=${currentPage}&${category}&_limit=4`
            )
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
                <Categories resetCurrentPage = {resetCurrentPage} setRemountComponent={setRemountComponent}/>
                <Sort/>
            </div>
            <h2 className="content__title">All keyboard</h2>
            <div className="content__items">
                {/* <div className="keyboard-block--wrapper"> */}
                {isLoading ? skeletons : keyboards}
                {/* </div> */}
            </div>
            <div key={remountComponent}>
            <Pagination setCurrentPage={setCurrentPage} pageCount={pageCount} currentPage={currentPage}/>
            </div>
        </>
    );
};
export default Home;
