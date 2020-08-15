import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

function Introduce() {
  return (
    <>
      <section id="hero" className="jumbotron">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="hero-title text-center">
              <span role="img" aria-label="emoji">
                👩‍💻
              </span>{' '}
              HI-ARC History{' '}
              <span role="img" aria-label="emoji">
                🧑‍💻
              </span>
            </h1>
            <h1>소개</h1>
            <h2>
              HI-ARC는 HongIk Algorithm Research Club의 약자로, 2017년 창립된 홍익대학교
              컴퓨터공학과 소속 학회입니다.
            </h2>
            <br />
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="timeline">
                View Timeline
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
}

export default Introduce;
