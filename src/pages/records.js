import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HI-ARC | Records</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Records" />
      </Helmet>
      <section id="hero" className="jumbotron">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="hero-title text-center">
              <span role="img" aria-label="emoji">
                👩‍💻
              </span>{' '}
              HI-ARC Records{' '}
              <span role="img" aria-label="emoji">
                🧑‍💻
              </span>
            </h1>
            <h3>
              {'<'}여기에 연혁이 들어가야 합니다{'>'}
            </h3>
            <br />
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <br />
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go Home
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};
