import React, { Component } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import classnames from 'classnames';
import parse from 'html-react-parser';

export default class ProductAccordion extends Component {
  constructor(props) {
    super(props);
    this.toggleDescription = this.toggleDescription.bind(this);
    this.toggleShipping = this.toggleShipping.bind(this);
    this.toggleReviews = this.toggleReviews.bind(this);
    this.state = { dscToggle: false, shipToggle: false, revToggle: false };
  }

  toggleDescription() {
    this.setState(state => ({ dscToggle: !state.dscToggle }));
  }
  toggleShipping() {
    this.setState(state => ({ shipToggle: !state.shipToggle }));
  }
  toggleReviews() {
    this.setState(state => ({ revToggle: !state.revToggle }));
  }
  render() {
    let { description } = this.props;
    const { dscToggle, shipToggle, revToggle } = this.state;
    let parsedDesc = parse(description || '<span></span>');
    return (
      <div id="accordion" role="tablist">
        <Card>
          <CardHeader onClick={this.toggleDescription}>
            <h6 className="mb-0">
              Description
              <span
                className={classnames(
                  'fa',
                  'pull-right',
                  { 'fa-chevron-circle-up': dscToggle },
                  { 'fa-chevron-circle-down': !dscToggle }
                )}
              />
            </h6>
          </CardHeader>
          <Collapse isOpen={dscToggle}>
            <CardBody>{parsedDesc}</CardBody>
          </Collapse>
        </Card>
        <Card>
          <CardHeader onClick={this.toggleShipping}>
            <h6 className="mb-0">
              Shipping &amp; Returns
              <span
                className={classnames(
                  'fa',
                  'pull-right',
                  { 'fa-chevron-circle-up': shipToggle },
                  { 'fa-chevron-circle-down': !shipToggle }
                )}
              />
            </h6>
          </CardHeader>
          <Collapse isOpen={shipToggle}>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
              nostrum corrupti aliquam cum. Sunt, iure repellendus odio dolor
              eos voluptates delectus aspernatur, odit quae quos necessitatibus,
              blanditiis obcaecati quia.
            </CardBody>
          </Collapse>
        </Card>
        <Card>
          <CardHeader onClick={this.toggleReviews}>
            <h6 className="mb-0">
              Reviews
              <span
                className={classnames(
                  'fa',
                  'pull-right',
                  { 'fa-chevron-circle-up': revToggle },
                  { 'fa-chevron-circle-down': !revToggle }
                )}
              />
            </h6>
          </CardHeader>
          <Collapse isOpen={revToggle}>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
              nostrum corrupti aliquam cum. Sunt, iure repellendus odio dolor
              eos voluptates delectus aspernatur, odit quae quos necessitatibus,
              blanditiis obcaecati quia.
            </CardBody>
          </Collapse>
        </Card>
      </div>
    );
  }
}
