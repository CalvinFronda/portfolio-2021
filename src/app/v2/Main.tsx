import './styles.scss';
import React from 'react';
import Header from './Header';

import Content from './Content';

const Main = () => {
  return (
    <div className="container">
      <div className="content__container">
        <div className="main_content__container">
          <Header />
          <Content />
        </div>
        <footer className="flex flex-aic flex-jcc">
          <p className="cf_copyright">
            Made with ❤️ by Calvin using Next.js, React, scss. Deployed on
            Netlify
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Main;
