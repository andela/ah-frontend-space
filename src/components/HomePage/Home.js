import React from 'react';
import Article from './Article';
import Tags from './Tags';


class Home extends React.Component {
  render() {
    return (
      <div className="flex">
        <div className="articles">
          <Article />
          <Article />
          <Article />
        </div>
        <Tags />
      </div>
    );
  }
}

export default Home;
