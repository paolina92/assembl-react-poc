import React from 'react';
import {connect} from 'react-redux';

class Error extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>{this.props.errorMessage}</div>
    )
  }
}

export default Error;