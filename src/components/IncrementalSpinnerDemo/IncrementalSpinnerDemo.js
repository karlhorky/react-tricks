import React, {Component} from 'react';
import styles from './IncrementalSpinnerDemo.css';
import IncrementalSpinner from '../IncrementalSpinner/IncrementalSpinner';

export default class IncrementalSpinnerDemo extends Component {
  state = {active: false};

  toggle = () => this.setState({active: !this.state.active});

  render (props) {
    return (
      <div className={styles.IncrementalSpinnerDemo}>
        <div className={styles.IncrementalSpinnerDemoSpinnerColumn}>
          <div>
            <IncrementalSpinner active={this.state.active} />
          </div>

          <div>
            <code>active={this.state.active.toString()}</code>
          </div>
        </div>

        <div>
          <button onClick={this.toggle}>
            Toggle active
          </button>
        </div>
      </div>
    );
  }
}
