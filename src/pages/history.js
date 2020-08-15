import React from 'react';
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
    </>
  );
};
