import React from 'react';


import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Keyboard from '../components/KeyboardBlock';
import Skeleton from '../components/KeyboardBlock/Skeleton';
import Pagination from "../components/Pagination";
import {SearchContext} from "../App";

const Home = () => {
    const {searchValue, setSearchValue} = React.useContext(SearchContext)
    const [items, setItems] = React.useState([]);
    const [xCountHeader, setXCountHeader] = React.useState(0)
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);

    const [sortType, setSortType] = React.useState({
        name: ' ▲ popularity',
        sortProperty: 'rating',
        order: 'asc',
    });

    let xTotalCount
    const pizzas = items

        .filter((obj) => {
            return obj.title.toLowerCase().includes(searchValue.toLowerCase())
        })
        .map((obj) => <Keyboard key={obj.id} {...obj} />);
    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index}/>);

    React.useEffect(() => {
        setIsLoading(true);
        fetch(
            `http://localhost:3001/keyboard?${
                categoryId > 0 ? `category=${categoryId}` : ''
            }&_sort=${sortType.sortProperty}&_order=${sortType.order}&_page=1&_limit=4`,
        ).then((res) => {
             xTotalCount = res.headers.get("x-total-count");
            setXCountHeader(xTotalCount);
            console.log(xCountHeader);
            return res.json();
        })
            .then((arr) => {

                setItems(arr);
                setIsLoading(false);
            });
    }, [categoryId, sortType]);

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
                <Sort value={sortType} onChangeSort={(id) => setSortType(id)}/>
            </div>
            <h2 className="content__title">All keyboard</h2>
            <div className="content__items">
                {/* <div className="keyboard-block--wrapper"> */}
                {isLoading ? skeletons : pizzas}
                {/* </div> */}
            </div>
            <Pagination xTotalCount={xTotalCount}/>
        </>
    );
};
export default Home;
