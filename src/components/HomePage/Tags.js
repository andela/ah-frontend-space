import React from 'react';


const tag = () => (
  <div className="badge badge-primary">
            cool
  </div>
);


const sidebarContainer = () => (
  <div className="sidebar">
    <div className="vertical-divider">
      <h1 className="tags_heading"> Tags :</h1>
      {tag()}
      {tag()}
      {tag()}
      {tag()}
      {tag()}
      {tag()}
      {tag()}
      {tag()}
    </div>
  </div>
);

class Tag extends React.Component {
  render() {
    return (
      <>{sidebarContainer()}</>
    );
  }
}

export default Tag;
