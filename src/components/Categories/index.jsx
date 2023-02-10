import React from 'react';
import {useSelector, useDispatch} from "react-redux";

import styles from './Categories.module.scss'

import {setCategoryId} from "../../redux/slices/filterSlice";


function Categories({resetCurrentPage, setRemountComponent}) {
  const dispatch = useDispatch()
  const {categoryId} = useSelector((state) => state.filterSlice)
  const onChangeCategory = (id) =>{
    dispatch(setCategoryId(id))
    resetCurrentPage()
    setRemountComponent(Math.random());
  }


  const categories = [
    'All',
    'Custom',
    'Traditional',
    'Ergonomic',
    'Special for MAC',
    'Russian symbols',
  ];


  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={categoryId === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
