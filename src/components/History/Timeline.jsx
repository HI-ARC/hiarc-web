import React from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <>
      <section id="timeline">
        <Fade bottom duration={1000} delay={700} distance="30px">
          <h1>활동 기록</h1>
          <br />
          <Timeline>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="h3">2017</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left" variant="h4" component="h1">
                    HI-ARC 창립
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left" variant="h4" component="h1">
                    ACM-ICPC Daejeon Region
                  </Typography>
                  <Typography align="left" variant="h5">
                    Honorable Mention / Hon Gik Univ / 장영석, 정윤석, 문준오
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="h3">2018</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left" variant="h4" component="h1">
                    이데일리 코딩 챌린지
                  </Typography>
                  <Typography align="left" variant="h5">
                    6th / 정연두
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left" variant="h4" component="h1">
                    카카오 코드 페스티벌
                  </Typography>
                  <Typography align="left" variant="h5">
                    본선 진출 / 정연두
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left" variant="h4" component="h1">
                    UCPC 예선
                  </Typography>
                  <Typography align="left" variant="h5">
                    58th / KodingWarrior Squad / 이재열, 문준오, 정연두
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left" variant="h4" component="h1">
                    ACM-ICPC Seoul Region
                  </Typography>
                  <Typography align="left" variant="h5">
                    Honorable Mention / bye-arc / 김민균, 김형석, 유지혁
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="h3">2019</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left" variant="h4" component="h1">
                    UCPC 예선
                  </Typography>
                  <Typography align="left" variant="h5">
                    35th (본선 진출) / 삼성님들충성충성^^7 / 김종욱, 정연두, 정윤석
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left" variant="h4" component="h1">
                    UCPC 본선
                  </Typography>
                  <Typography align="left" variant="h5">
                    32nd / 삼성님들충성충성^^7 / 김종욱, 정연두, 정윤석
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left" variant="h4" component="h1">
                    ACM-ICPC Seoul Region
                  </Typography>
                  <Typography align="left" variant="h5">
                    16th / Advanced Algorithm Study / 김종욱, 정연두, 정윤석
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="h3">2020</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left" variant="h4" component="h1">
                    UCPC 예선
                  </Typography>
                  <Typography align="left" variant="h5">
                    28th (본선 진출) / 율촌 / 정연두, 김효원, 정재현
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left" variant="h4" component="h1">
                    UCPC 본선
                  </Typography>
                  <Typography align="left" variant="h5">
                    34th / 율촌 / 정연두, 김효원, 정재현
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left" variant="h4" component="h1">
                    SUAPC – Div. 1
                  </Typography>
                  <Typography align="left" variant="h5">
                    8th / 사과는 맛있어 / 김경근, 정재현, 백지웅
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left" variant="h4" component="h1">
                    SUAPC – Div. 2
                  </Typography>
                  <Typography align="left" variant="h5">
                    4th / 기시디한테 롤 진 팀 / 노정윤, 김도현, 김연욱
                  </Typography>
                  <Typography align="left" variant="h5">
                    6th /
                    안녕히계세요여러분전이세상의모든굴레와속박을벗어던지고제행복을찾아떠납니다여러분도행복하세요
                    / 고민재, 권예빈, 권찬
                  </Typography>
                  <Typography align="left" variant="h5">
                    8th / team protocol / 반보영, 박장성, 엄경호
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Fade>
      </section>
    </>
  );
}

export default CustomizedTimeline;
