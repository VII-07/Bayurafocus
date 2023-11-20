import { Row, Col, Typography, Button } from "antd";
import style from '../Timer/timer.module.scss'
import { useEffect, useState, useCallback } from "react";
import 'antd/dist/reset.css'
import Tabs from "../UI/Tabs/Tabs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import formatTime from "../functions/formatDate";
import { setProgressTimer, setTimerLongBreakType, setTimerShortBreakType, setTimerWorkType, startTime, stopTime } from "../../actions/timer.Actions";
import soundClickPath from "../../assets/mech-keyboard-02-102918.mp3";
import alarmSoundPAth from "../../assets/alarma2-34724.mp3"
import { StepForwardOutlined } from "@ant-design/icons";

const Timer = () => {
    const { timeWork, timeShortBreak, timeLongBreak, work, longBreak, shortBreak, isRunning, progressTimer, intervalLongBreak } = useSelector((state: RootState) => state.timer);
    const [timeWorkState, setTimeWorkState] = useState(timeWork);
    const [timeShortBreakState, setTimeShortBreakState] = useState(timeShortBreak);
    const [timeLongBreakState, setTimeLongBreakState] = useState(timeLongBreak);
    const [counterBreakInterval, setCounterBreakInterval] = useState(1);
    const dispatch = useDispatch();

    const resetTime = useCallback(() => {
        setTimeWorkState(timeWork);
        setTimeShortBreakState(timeShortBreak);
        setTimeLongBreakState(timeLongBreak);
    }, [timeWork, timeShortBreak, timeLongBreak]);

    const calculateElapsedTimeInPercent = (mainTime: number, elapsedTime: number) => {
        const elapsedTimeInPercent = (1 - ((elapsedTime - 1) / mainTime)) * 100;
        return elapsedTimeInPercent;
    };

    const playBottonSound = () => {
        const soundClick = new Audio(soundClickPath);
        soundClick.play();
    };
    const playAlarmSound = () => {
        const soundAlarm = new Audio(alarmSoundPAth);
        soundAlarm.play();
    }

    const checkAndOnShortBreakOrLongBreak = useCallback(() => {
        if (counterBreakInterval !== intervalLongBreak) {
            dispatch(setTimerShortBreakType());
            setCounterBreakInterval(counterBreakInterval + 1);
            console.log(counterBreakInterval, intervalLongBreak)
        } else {
            dispatch(setTimerLongBreakType());
            setCounterBreakInterval(1);
        }
    }, [counterBreakInterval, intervalLongBreak, dispatch])



    useEffect(() => {
        resetTime();
        dispatch(setProgressTimer(0));
    }, [work, shortBreak, longBreak, resetTime, dispatch])

    useEffect(() => {
        let interval: number;
        if (isRunning) {
            if (work) {
                interval = setInterval(() => {
                    if (timeWorkState > 0) {
                        setTimeWorkState((prevTime) => prevTime - 1);
                        dispatch(setProgressTimer(calculateElapsedTimeInPercent(timeWork, timeWorkState)));
                    } else {
                        dispatch(stopTime());
                        checkAndOnShortBreakOrLongBreak();
                        playAlarmSound();
                    }
                }, 1000);
                return () => {
                    clearInterval(interval);
                };
            } else if (shortBreak) {
                interval = setInterval(() => {
                    if (timeShortBreakState > 0) {
                        dispatch(setProgressTimer(calculateElapsedTimeInPercent(timeShortBreak, timeShortBreakState)));
                        setTimeShortBreakState((prevTime) => prevTime - 1);
                    } else {
                        dispatch(stopTime());
                        playAlarmSound();
                        dispatch(setTimerWorkType());
                    }
                }, 1000);
                return () => {
                    clearInterval(interval);
                };
            } else if (longBreak) {
                interval = setInterval(() => {
                    if (timeLongBreakState > 0) {
                        dispatch(setProgressTimer(calculateElapsedTimeInPercent(timeLongBreak, timeLongBreakState)))
                        setTimeLongBreakState((prevTime) => prevTime - 1);
                    } else {
                        dispatch(stopTime());
                        playAlarmSound();
                        dispatch(setTimerWorkType());
                    }
                }, 1000);
                return () => {
                    clearInterval(interval);
                };
            }
        }
    }, [isRunning, work, shortBreak, longBreak, timeWork, timeShortBreak, timeLongBreak, timeWorkState, timeLongBreakState, timeShortBreakState, progressTimer, checkAndOnShortBreakOrLongBreak, dispatch]);

    let formattedTime;

    if (work) {
        formattedTime = formatTime(timeWorkState);
    } else if (shortBreak) {
        formattedTime = formatTime(timeShortBreakState);
    } else if (longBreak) {
        formattedTime = formatTime(timeLongBreakState);
    }

    const handleStartTimer = () => {
        dispatch(startTime());
        playBottonSound();
    };

    const handleStopTimer = () => {
        dispatch(stopTime());
        playBottonSound();
    };

    const skipTime = () => {
        if (work) {
            checkAndOnShortBreakOrLongBreak();
        } else if (shortBreak) {
            dispatch(setTimerWorkType());
        } else if (longBreak) {
            dispatch(setTimerWorkType());
        }
    };

    return (
        <Row justify="center">
            <Col span={8} xs={24} sm={14} md={10} lg={7}>
                <div className={style.timer__container}>
                    <Tabs />
                    <Typography className={style.timer__oclock}>{formattedTime}</Typography>
                    <div className={style.start__btn__container}>
                        <Button
                            className={`
                            ${style.start__btn} 
                            ${isRunning ? style.start__btn__active : ''}
                            ${work ? style.work__btn : ''}
                            ${shortBreak ? style.short__break__btn : ''}
                            ${longBreak ? style.long__break__btn : ''}
                            `}
                            onClick={isRunning ? handleStopTimer : handleStartTimer}
                        >
                            {isRunning ? 'Pause' : 'Start'}
                        </Button>

                        {isRunning && (
                            <div className={style.next__btn}>
                                <Button onClick={skipTime}><StepForwardOutlined /></Button>
                            </div>
                        )}
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Timer;
