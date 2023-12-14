/* eslint-disable @typescript-eslint/ban-types */
import { Button } from "antd";
import styles from './buttonStart.module.scss'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { playSound } from "../../../functions/playSound";
import { stopTimer, startTimer } from "../../../redux/actions/ranningAction";
import soundClickPath from "../../../assets/mech-keyboard-02-102918.mp3";
import { StepForwardOutlined } from "@ant-design/icons";
import changeBg from "../../../functions/changeBg";
import { ButtonTimmerTypes } from "../../../types/types";

const ButtonComponentTimer = ({selectWorkType, workTypes, handleSkipTime} : ButtonTimmerTypes) => {
    const { isRunning } = useSelector((state: RootState) => state.running);
    const dispatch = useDispatch();

    const toggleTimer = () => {
        dispatch(isRunning ? stopTimer() : startTimer());
        playSound(soundClickPath);
    };


    return (
        <div className={styles.start__btn__container}>
            <Button
                className={`
            ${styles.start__btn} 
            ${isRunning ? styles.start__btn__active : ''}
            ${changeBg({selectWorkType, workTypes, styles})}
            `}
                onClick={toggleTimer}
            >
                {isRunning ? 'Pause' : 'Start'}
            </Button>

            {isRunning && (
                <div className={styles.next__btn}>
                    <Button onClick={() => handleSkipTime()}><StepForwardOutlined /></Button>
                </div>
            )}
        </div>
    );
}

export default ButtonComponentTimer;