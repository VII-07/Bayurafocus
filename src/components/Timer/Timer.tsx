import { Row, Col, Typography, Button } from "antd";
import style from '../Timer/timer.module.scss'
import { useEffect, useState, useCallback } from "react";
import 'antd/dist/reset.css'
import Tabs from "../UI/Tabs/Tabs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import formatTime from "../functions/formatDate";
import { startTimer, stopTimer, setTimerType, setProgressTimer} from "../../redux/actions/timer.Actions";
import soundClickPath from "./../../assets/mech-keyboard-02-102918.mp3";
import alarmSoundPAth from "./../../assets/alarma2-34724.mp3"
import { StepForwardOutlined } from "@ant-design/icons";
import { playSound } from "../functions/playSound";

const Timer = () => {
    const { isRunning, timeWork, timeShortBreak, timeLongBreak, timerType,intervalLongBreak } = useSelector((state: RootState) => state.timer);
    const [timeWorkState, setTimeWorkState] = useState(timeWork);
    const [timeShortBreakState, setTimeShortBreakState] = useState(timeShortBreak);
    const [timeLongBreakState, setTimeLongBreakState] = useState(timeLongBreak);
    const [counterBreakInterval, setCounterBreakInterval] = useState(1);
    const dispatch = useDispatch();

    const resetTime = useCallback(() => {
        setTimeWorkState(timeWork);
        setTimeShortBreakState(timeShortBreak);
        setTimeLongBreakState(timeLongBreak);
        console.log(timeWork,timeShortBreak, timeLongBreak);
    }, [timeWork, timeShortBreak, timeLongBreak]);

    const calculateElapsedTimeInPercent = (mainTime: number, elapsedTime: number) => {
        const elapsedTimeInPercent = (1 - ((elapsedTime - 1) / mainTime)) * 100;
        return elapsedTimeInPercent;
    };

    const checkAndOnShortBreakOrLongBreak = useCallback(() => {
        if (counterBreakInterval !== intervalLongBreak) {
            dispatch(setTimerType('shortBreak'));
            setCounterBreakInterval(counterBreakInterval + 1);
            console.log(counterBreakInterval, intervalLongBreak)
        } else {
            dispatch(setTimerType('longBreak'));
            setCounterBreakInterval(1);
        }
    }, [counterBreakInterval, intervalLongBreak, dispatch])

    useEffect(() => {
        resetTime();
        dispatch(setProgressTimer(0));
    }, [timerType, resetTime, dispatch])

    useEffect(() => {
        let interval: number;
        if (isRunning) {
            if (timerType === 'work') {
                interval = setInterval(() => {
                    if (timeWorkState > 0) {
                        setTimeWorkState((prevTime) => prevTime - 1);
                        dispatch(setProgressTimer(calculateElapsedTimeInPercent(timeWork, timeWorkState)));
                    } else {
                        dispatch(stopTimer());
                        checkAndOnShortBreakOrLongBreak();
                        playSound(alarmSoundPAth);
                    }
                }, 1000);
                return () => {
                    clearInterval(interval);
                };
            } else if (timerType === 'shortBreak') {
                interval = setInterval(() => {
                    if (timeShortBreakState > 0) {
                        dispatch(setProgressTimer(calculateElapsedTimeInPercent(timeShortBreak, timeShortBreakState)));
                        setTimeShortBreakState((prevTime) => prevTime - 1);
                    } else {
                        dispatch(stopTimer());
                        playSound(alarmSoundPAth);
                        dispatch(setTimerType('work'));
                    }
                }, 1000);
                return () => {
                    clearInterval(interval);
                };
            } else if (timerType === 'longBreak') {
                interval = setInterval(() => {
                    if (timeLongBreakState > 0) {
                        dispatch(setProgressTimer(calculateElapsedTimeInPercent(timeLongBreak, timeLongBreakState)));
                        setTimeLongBreakState((prevTime) => prevTime - 1);
                    } else {
                        dispatch(stopTimer());
                        playSound(alarmSoundPAth);
                        dispatch(setTimerType('work'));
                    }
                }, 1000);
                return () => {
                    clearInterval(interval);
                };
            }
        }
    }, [isRunning, timeWork, timeWorkState, timeShortBreak, timeShortBreakState, timeLongBreak, timeLongBreakState, timerType, dispatch, checkAndOnShortBreakOrLongBreak]);

    let formattedTime;

    if (timerType === 'work') {
        formattedTime = formatTime(timeWorkState);
    } else if (timerType === 'shortBreak') {
        formattedTime = formatTime(timeShortBreakState);
    } else if (timerType === 'longBreak') {
        formattedTime = formatTime(timeLongBreakState);
    }

    const handleStartTimer = () => {
        dispatch(startTimer());
        playSound(soundClickPath);
    };

    const handleStopTimer = () => {
        dispatch(stopTimer());
        playSound(soundClickPath);
    };

    const skipTime = () => {
        if (timerType === 'work') {
            checkAndOnShortBreakOrLongBreak();
        } else if (timerType === 'shortBreak') {
            dispatch(setTimerType('work'));
        } else if (timerType === 'longBreak') {
            dispatch(setTimerType('work'));
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
                            ${timerType === 'work' ? style.work__btn : ''}
                            ${timerType === 'shortBreak' ? style.short__break__btn : ''}
                            ${timerType === 'longBreak' ? style.long__break__btn : ''}
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
