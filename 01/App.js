import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/foo">foo</Link>
        </div>

        <div>
          <Link to="/bar">bar</Link>
        </div>

        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
