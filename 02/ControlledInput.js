import React from 'react';

export default class ControlledInput extends React.Component {
  constructor( ...args ) {
    super( ...args );

    this.state = {
      value: this.props.value,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({ value: this.refs.input.value });
  }

  render() {
    const { value } = this.props;
    const id = 'input-' + value;

    return (
      <div className="form-group">
        <label htmlFor={id} className="col-md-2 control-label">
          {value}
        </label>

        <div className="col-md-10">
          <textarea
            ref="input"
            className="form-control"
            id={id}
            onChange={this.onChange}
          >
            {this.state.value}
          </textarea>
        </div>
      </div>
    );
  }
}

ControlledInput.propTypes = {
  value: React.PropTypes.any.isRequired,
};
