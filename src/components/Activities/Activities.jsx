import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Activities = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Activities" />
          {projects.map((project) => {
            const { title, info, info2, url, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Algorithm Study'}</h3>
                      <div>
                        <p>
                          {info ||
                            '매 학기 알고리즘 스터디를 진행합니다. 알고리즘 스터디는 초급, 중급, 고급의 총 세 단계로 나뉘어 있습니다. 프로그래밍 입문자를 위한 기초 프로그래밍 스터디 또한 개설됩니다. 자율 스터디를 신청하여 학회원들과 자유롭게 원하는 주제에 대한 스터디를 진행할 수 있습니다. '}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      {/* <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )} */}
                    </div>
                  </Fade>
                </Col>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">
                        {title || 'Competitive Programming'}
                      </h3>
                      <div>
                        <p>
                          {info ||
                            'HI-ARC는 매년 교내 프로그래밍 대회에서 우수한 성적을 거두고 있습니다. 뿐만 아니라 UCPC, ICPC와 같은 프로그래밍 대회에도 꾸준히 참가하여 좋은 성적을 내고 있으며, 또한 동아리 연합 활동을 통해 자체적으로 프로그래밍 대회를 진행하고 있습니다. '}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Communication'}</h3>
                      <div>
                        <p>
                          {info ||
                            'HI-ARC의 전반적인 커뮤니케이션은 Slack을 통해 이루어집니다. BOJ와 Codeforces 등의 알고리즘 문제부터, 학교 생활이나 개발 등의 타 분야에 대한 질문까지 HI-ARC Slack의 질문 채널에서 자유롭게 질문할 수 있습니다. 또한 매 학기 개강총회와 종강총회를 진행하여 한 학기 동안의 활동들을 돌아보는 자리를 가집니다. '}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'ICPC Sinchon'}</h3>
                      <div>
                        <p>
                          {info ||
                            'HI-ARC는 연세대, 이화여대, 서강대, 숙명여대와 함께 운영하는 동아리 연합 ICPC Sinchon 소속입니다. 매번 방학 기간을 이용해 연합 스터디와 합동 캠프, 프로그래밍 대회 등을 진행하고 있습니다. 이외에도 Slack 등을 통하여 다양한 정보와 지식을 함께 교류해 나가고 있습니다.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <br />
                    <br />
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Activities;
