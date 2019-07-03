import React from 'react';


const greet = 'Welcome to Authors Haven';
class Home extends React.Component {
  render() {
    return (
      <h1 className="coloring">{greet}</h1>
    );
  }
}

export default Home;
