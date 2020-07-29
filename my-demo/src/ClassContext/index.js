import React from 'react';
import PropTypes from 'prop-types';

import HomePage from './HomePage';
export default class ClassContext extends React.Component {

  static childContextTypes = {
    value: PropTypes.string,
  };

  getChildContext() {
    return {
      value: {
        title: 'I am ClassContext',
        color: 'red',
      },
    };
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    )
  }
}