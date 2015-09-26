import _ from 'lodash';
import React from 'react';
import ControlledInput from './ControlledInput';

let Item = ControlledInput;
Item = ({ value }) => <li>{value}</li>;

export default class Bar extends React.Component {
  render() {
    return (
      <form className="form-horizontal">
        <ul>
          {_.times(100, i => <Item key={i} value={i} />)}
        </ul>
      </form>
    );
  }
}
