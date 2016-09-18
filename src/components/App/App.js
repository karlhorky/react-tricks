import React from 'react';
import styles from './App.css';
import IncrementalSpinnerDemo from '../IncrementalSpinnerDemo/IncrementalSpinnerDemo';

export default () =>
  <div className={styles.App}>
    <h1 className={styles.AppTitle}>React tricks</h1>

    <h2>
      &lt;IncrementalSpinner /&gt;
    </h2>

    <p>
      A spinner component that finishes its animation cycle at degree increments.
    </p>

    <IncrementalSpinnerDemo />

    <p>
      For instance, you may want your spinner to stop animating only once it has reached the next 360 degree increment.
    </p>
  </div>;
