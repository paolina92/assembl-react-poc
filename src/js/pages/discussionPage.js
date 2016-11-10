import React from 'react';
import {connect} from 'react-redux';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import DiscussionActions from '../actions/discussionActions';
import MessagesContainer from '../containers/messagesContainer';
import IdeasContainer from '../containers/ideasContainer';
import Error from '../components/errorComponent';

class DiscussionPage extends React.Component {
  constructor(props) {
    super(props);
    this.props.getDiscussionId(this.props.params.discussionName);
  }
  render() {
    const {discussionId,error,MsgError} = this.props.discussion;
    return (
      <Grid>
        <Row className="show-grid">
          {discussionId && <Col xs={4} md={3}>
            <IdeasContainer />
          </Col>}
          {discussionId && <Col xs={8} md={9}>
            <MessagesContainer />
          </Col>}
          {error && <Col xs={12} md={12}>
            <Error errorMessage={MsgError} />
          </Col>}
        </Row>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    discussion: state.discussion
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDiscussionId: (discussionName) => {
      dispatch(DiscussionActions.getDiscussionId(discussionName))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DiscussionPage);