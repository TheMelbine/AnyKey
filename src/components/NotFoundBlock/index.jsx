import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Not found pages
      </h1>
      <p className={styles.description}>
        Unfortunately this page does not exist in our online store
      </p>
    </div>
  );
};

export default NotFound;
