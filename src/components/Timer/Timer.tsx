import { Row, Col } from "antd";
import style from '../Timer/timer.module.scss'
import { useEffect, useState, useMemo } from "react";
import 'antd/dist/reset.css'
import Tabs from "../UI/Tabs/Tabs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { stopTimer } from "../../redux/actions/ranningAction";
import { setProgressTimer } from "../../redux/actions/progressLineAction";
import DisplayTime from "../DisplayTime/DisplayTimeComponent";
import { setRadioType } from "../../redux/actions/radioButtonActions";
import ButtonComponentTimer from "../UI/ButtonStart/ButtonStart";

const Timer = () => {
    const { timeWork, timeShortBreak, timeLongBreak, intervalLongBreak }  = useSelector((state: RootState) => state.timer);
    const { workTypes, selectWorkType } = useSelector((state: RootState) => state.radio);
    const { isRunning } = useSelector((state: RootState) => state.running);
    const [breakIntervalCount, setBreakIntervalCount] = useState(1);
    const [currentTimerMode, setCurrentTimerMode] = useState(timeWork);
    const dispatch = useDispatch();

    const timerModes = useMemo(() => ({
        [workTypes[0]]: timeWork,
        [workTypes[1]]: timeShortBreak,
        [workTypes[2]]: timeLongBreak
    }), [timeWork, timeShortBreak, timeLongBreak, workTypes]);

    const handleBreakInterval = () => {
        if (breakIntervalCount !== intervalLongBreak) {
            dispatch(setRadioType(workTypes[1]));
            setBreakIntervalCount(breakIntervalCount + 1);
        } else {
            dispatch(setRadioType(workTypes[2]));
            setBreakIntervalCount(1);
        }
    };

    const skipTime = () => {
        selectWorkType === workTypes[0] ? handleBreakInterval() : dispatch(setRadioType(workTypes[0]));
    };

    useEffect(() => {
        dispatch(stopTimer())
        dispatch(setProgressTimer(0));
        setCurrentTimerMode(timerModes[selectWorkType]);
    }, [selectWorkType, timerModes, dispatch]);


    return (
        <Row justify="center">
            <Col span={8} xs={24} sm={14} md={10} lg={7}>
                <div className={style.timer__container}>
                    <Tabs />
                    <DisplayTime time={currentTimerMode} isRunning={isRunning} handleSkipTime={skipTime}/>
                    <ButtonComponentTimer selectWorkType={selectWorkType} workTypes={workTypes} handleSkipTime={skipTime} />
                </div>
            </Col>
        </Row>
    );
}

export default Timer;
