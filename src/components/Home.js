import React from 'react';

const greet = 'welcome to Space';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <h1>{greet}</h1>
    );
  }
}

export default Home;
