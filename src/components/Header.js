import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators'

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.state.car.image} alt={props.state.car.name} />
      </figure>
      <h2>{props.state.car.name}</h2>
      <p>{ 
        props.state.car.features.length ?
        props.state.car.features.reduce((acc, feature) => acc + feature.price, props.state.car.price):
        props.state.car.price
      }
      </p>
    </>
  );
};

export default connect(
  state => state,
  actionCreators
)(Header);