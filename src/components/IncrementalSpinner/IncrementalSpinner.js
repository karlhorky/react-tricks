import React, {Component, PropTypes} from 'react';
import styles from './IncrementalSpinner.css';
import spinner from './spinner.svg';
import ReactStateAnimation from 'react-state-animation';

export default class IncrementalSpinner extends Component {
  duration = 2000;
  animate = new ReactStateAnimation(this);
  isCanceled = false;

  state = {
    spinnerDegrees: 0
  };

  componentWillMount () {
    if (this.state.spinnerDegrees === 0 && this.props.active) {
      this.spinToNextIncrement();
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.spinnerDegrees === 0 && nextProps.active) {
      this.spinToNextIncrement();
    }
  }

  componentWillUnmount () {
    this.animate.stop();
    this.isCanceled = true;
  }

  spinToNextIncrement () {
    this.animate.linearInOut('spinnerDegrees', 360, this.duration)
      .then(() => {
        if (this.isCanceled) return;
        this.setState({spinnerDegrees: 0});
        if (this.props.active) this.spinToNextIncrement();
      });
  }

  render () {
    return (
      <img
        className={styles.IncrementalSpinner}
        src={spinner}
        role="presentation"
        style={{
          transform: `rotate(${this.state.spinnerDegrees}deg)`
        }}
      />
    );
  }
}

IncrementalSpinner.propTypes = {
  active: PropTypes.bool.isRequired
};
