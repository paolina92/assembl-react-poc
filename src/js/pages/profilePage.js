import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>Page de profil</Col>
          </Row>
        </Grid>
    );
  }
}

export default Profile;