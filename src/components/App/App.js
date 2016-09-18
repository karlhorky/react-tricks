import React from 'react';
import './App.css';
import IncrementalSpinner from '../IncrementalSpinner/IncrementalSpinner';

export default () =>
  <div>
    <h1>React tricks</h1>

    <h2>
      &lt;IncrementalSpinner /&gt;
    </h2>

    <p>
      A spinner component that finishes its animation cycle at degree increments.
    </p>

    <IncrementalSpinner />

    <p>
      For instance, you may want your spinner to stop animating only once it has reached the next 90 degree increment.
    </p>

    <IncrementalSpinner />
  </div>;
