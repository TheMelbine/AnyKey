import React from 'react';
import {useSelector} from "react-redux";


import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Keyboard from '../components/KeyboardBlock';
import Skeleton from '../components/KeyboardBlock/Skeleton';
import Pagination from "../components/Pagination";
import {SearchContext} from "../App";

const Home = () => {
    const {categoryId,sort} = useSelector((state) => state.filterSlice);

    const {searchValue, setSearchValue} = React.useContext(SearchContext)
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const pizzas = items
        .filter((obj) => {
            return obj.title.toLowerCase().includes(searchValue.toLowerCase())
        })
        .map((obj) => <Keyboard key={obj.id} {...obj} />);
    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index}/>);

    React.useEffect(() => {
        setIsLoading(true);

        const category = categoryId > 0 ? `category=${categoryId}` : ''

        fetch
        (
            `http://localhost:3001/keyboard?${category}&_sort=${sort.sortProperty}&_order=${sort.order}&_page=1&_limit=4`
        )

            .then(res => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
    }, [categoryId, sort]);

    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">All keyboard</h2>
            <div className="content__items">
                {/* <div className="keyboard-block--wrapper"> */}
                {isLoading ? skeletons : pizzas}
                {/* </div> */}
            </div>
            <Pagination/>
        </>
    );
};
export default Home;
