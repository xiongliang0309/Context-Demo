import React from 'react';
import { checkPropTypes } from 'prop-types';


export default class HomePage extends React.Component {

  static contextTypes = {
    value: checkPropTypes.object,
  };


  render() {
    const { value: { title, color } } = this.context;
    return (
      <span style={{color: color}}>{title}</span>
    )
  }
}