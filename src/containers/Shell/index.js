import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { loadManufactures } from '../../redux/modules/manufactures';

class Shell extends Component {
  componentDidMount() {
    this.props.loadManufactures();
  }
  render() {
    return (
      <section>
        <div id="wrapper">
          <Header />
          <React.Fragment>{this.props.children}</React.Fragment>
          <Footer />
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadManufactures: () => dispatch(loadManufactures()),
});

Shell = connect(
  null,
  mapDispatchToProps
)(Shell);

export default Shell;
