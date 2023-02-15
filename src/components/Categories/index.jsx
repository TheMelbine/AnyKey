import React from 'react';
import {useSelector, useDispatch} from "react-redux";

import styles from './Categories.module.scss'

import {setCategoryId} from "../../redux/slices/filterSlice";
import {Link} from "react-router-dom";


function Categories() {
    const dispatch = useDispatch()
    const {categoryId} = useSelector((state) => state.filterSlice)
    const onChangeCategory = (value) => {
        dispatch(setCategoryId(value))
    }


    const categories = [{
        path: '/', label: "All", value: 'All'
    }, {
        path: '/category/custom', label: "Custom", value: 'custom'
    }, {
        path: '/category/traditional', label: "Traditional", value: 'traditional'
    }, {
        path: '/category/ergonomic', label: "Ergonomic", value: 'ergonomic'
    }, {
        path: '/category/specialForMAC', label: "Special for MAC", value: 'specialForMAC'
    }, {
        path: '/category/cyrillic', label: "cyrillic", value: 'cyrillic'
    },]


    return (
        <div className={styles.categories}>
            <ul>
                {categories.map(({path, label, value}) => (
                    <Link key={path} to={path}>
                        <li  onClick={() => onChangeCategory(value)}
                            className={categoryId === value ? 'active' : ''}>
                            {label}
                        </li>

                    </Link>

                ))}
            </ul>
        </div>
    );
}

export default Categories;
