import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <div className="keyboard-block--wrapper">
    <ContentLoader
      className="keyboard-block"
      style={{}}
      speed={2}
      width={282}
      height={350}
      viewBox="0 0 282 350"
      backgroundColor="#c7c7c7"
      foregroundColor="#ffffff"
      {...props}>
      <rect x="21" y="0" rx="6" ry="6" width="240" height="100" />
      <rect x="41" y="122" rx="4" ry="4" width="199" height="30" />
      <rect x="0" y="169" rx="8" ry="8" width="282" height="40" />
      <rect x="0" y="214" rx="13" ry="13" width="282" height="66" />
      <rect x="0" y="300" rx="5" ry="5" width="98" height="36" />
      <rect x="102" y="297" rx="16" ry="16" width="180" height="43" />
    </ContentLoader>
  </div>
);

export default Skeleton;
