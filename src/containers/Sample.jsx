import React from 'react';
import JSONPretty from 'react-json-pretty'
import Store from '../store'
const Sample = () => (
  <div style={{color: '#F6F6F6'}}>
    <JSONPretty json={Store.getState()}/>
  </div>
);

export default Sample;
