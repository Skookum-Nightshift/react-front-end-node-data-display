import React from 'react';
import {Resolver} from 'react-resolver';

class Home extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="Home">
        HOME
      </div>
    );
  }
}

Home.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Home.displayName = 'Home';

export default Home;
