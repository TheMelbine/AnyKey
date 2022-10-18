import React from 'react';
import styles from './Categories.module.scss'
function Categories({ value, onClickCategory }) {
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
        {categories.map((categonyName, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>
            {categonyName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
