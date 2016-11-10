import React, { Component } from 'react';
import {Translate} from 'react-redux-i18n';

class IdeasContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(<div><Translate value='discussion.ideaPanelTitle'/></div>)
  }
}

export default IdeasContainer;