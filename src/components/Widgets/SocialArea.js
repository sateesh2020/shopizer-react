import React from 'react';

const SocialArea = () => {
  return (
    <React.Fragment>
      <a
        href="https://in.pinterest.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-pinterest" aria-hidden="true" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-facebook" aria-hidden="true" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-twitter" aria-hidden="true" />
      </a>
    </React.Fragment>
  );
};

export default SocialArea;
