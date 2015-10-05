/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';

class AppBase extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="AppBase">
        <RouteHandler />
      </div>
    );
  }
}

export default AppBase;
