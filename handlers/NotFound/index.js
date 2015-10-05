/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';

class NotFound extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="NotFound">
        Not Found
        <RouteHandler />
      </div>
    );
  }
}

export default NotFound;
