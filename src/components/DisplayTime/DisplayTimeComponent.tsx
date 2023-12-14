/* eslint-disable @typescript-eslint/ban-types */
import { Typography } from "antd";
import formatTime from "../../functions/formatDate";
import style from './displayTime.module.scss'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { calculateElapsedTimeInPercent } from "../../functions/calculateElapsedTimeInPercent";
import { playSound } from "../../functions/playSound";
import alarmSoundPath from "../../assets/alarma2-34724.mp3"
import { stopTimer } from "../../redux/actions/ranningAction";
import { setProgressTimer } from "../../redux/actions/progressLineAction";
import { displayTimeType } from "../../types/types";

const DisplayTime = ({ time, isRunning, handleSkipTime}: displayTimeType) => {

    const [timeState, setTimeState] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeState(time);
    }, [time])

    useEffect(() => {
        if(isRunning) {
            const interval = setInterval(() => {
                if (timeState > 0) {
                    setTimeState((prevTime: number) => prevTime - 1);
                    dispatch(setProgressTimer(calculateElapsedTimeInPercent(time, timeState)));
                } else {
                    dispatch(stopTimer());
                    dispatch(setProgressTimer(0));
                    handleSkipTime();
                    setTimeState(time);
                    playSound(alarmSoundPath);
                }
            }, 1000)
    
            return () => {
                clearInterval(interval);
            };
        }

    }, [isRunning, timeState, time, dispatch, handleSkipTime]);

    const formattedTime = formatTime(timeState)

    return (
        <Typography className={style.timer__oclock}>{formattedTime}</Typography>
    );
}

export default DisplayTime;
