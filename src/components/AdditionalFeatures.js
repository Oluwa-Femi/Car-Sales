import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';

const AdditionalFeatures = props => {
  debugger
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.state.store.length ? (
        <ol type="1">
          {props.state.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(
  state => state
)(AdditionalFeatures);
