import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Introduce from '../components/History/Introduce';
import CustomizedTimeline from '../components/History/Timeline';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HI-ARC | History</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="History" />
      </Helmet>
      <Introduce />
      <CustomizedTimeline />
      <Fade bottom duration={1000} delay={700} distance="30px">
        <p className="hero-cta justify-content-center">
          <Link className="cta-btn cta-btn--hero" to="/">
            Go Home
          </Link>
        </p>
      </Fade>
      <br />
      <br />
    </>
  );
};
