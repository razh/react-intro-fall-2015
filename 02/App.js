import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/foo">foo</Link>
              </li>

              <li>
                <Link to="/bar">bar</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
