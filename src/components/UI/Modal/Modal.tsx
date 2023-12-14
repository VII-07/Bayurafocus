/* eslint-disable @typescript-eslint/ban-types */
import { SettingOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Divider, Typography, Space, InputNumber } from "antd";
import './modal.scss'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setTimeWork, setTimeShortBreak, setTimeLongBreak, setLongBreakIntervalValue } from "../../../redux/actions/timerActions";
import NumberInputCastom from "../NumbersInputComponent/NumberImput";
import { IsNumberOrNull } from "../../../types/types";

//TODO: перевести стилі в класи

const ModalComponent = () => {
    const [isSettingOpen, setSettingOpen] = useState(false);
    const { timeWork, timeShortBreak, timeLongBreak, intervalLongBreak } = useSelector((state: RootState) => state.timer);
    const dispatch = useDispatch();

    const showAndCloseModal = () => {
        isSettingOpen ? setSettingOpen(false) : setSettingOpen(true);
    };

    const handleSetTime = (dispatchFunction: Function) => {
        return (value: IsNumberOrNull) => {
            if (value !== null) {
                const minutes = value * 60;
                dispatch(dispatchFunction(minutes));
                console.log(timeWork)
            }
        };
    };
    
    const handleSetTimeWork = handleSetTime(setTimeWork);
    const handleSetTimeShortBreak = handleSetTime(setTimeShortBreak);
    const handleSetTimeLongBreak = handleSetTime(setTimeLongBreak);
    
    const handleSetTimeLongBreakIntervalValue = (value: IsNumberOrNull) => {
            dispatch(setLongBreakIntervalValue(value || intervalLongBreak));
    };

    return (
        <>
            <Button className={'modal__button'} type="primary" onClick={showAndCloseModal}>
                <SettingOutlined />  Setting
            </Button>
            <Modal className={'modal'} title="Setting" open={isSettingOpen} onCancel={showAndCloseModal}
                footer={[]}>
                <Divider style={{ margin: 0 }} />
                <div className="modal__container">
                    <div className="modal__time">
                        <Typography className="modal__timer__setting__title"><ClockCircleOutlined style={{ marginRight: '5px' }} />TIMER</Typography>
                        <Typography className="modal__title">Time (minutes)</Typography>
                        <div className="input__time__container">
                            <Space wrap style={{marginBottom: '10px'}}>
                                <NumberInputCastom defaultValue={timeWork} onChange={handleSetTimeWork} title="Bayurato" />
                                <NumberInputCastom defaultValue={timeShortBreak} onChange={handleSetTimeShortBreak} title="Short Break"/>
                                <NumberInputCastom defaultValue={timeLongBreak} onChange={handleSetTimeLongBreak} title="Long Break" />
                            </Space>
                            <Space style={{display: 'flex', justifyContent: 'center'}}>
                                <div>
                                    <span className="input__title">Long Break Interval</span>
                                    <InputNumber min={2} max={10} defaultValue={intervalLongBreak} onChange={handleSetTimeLongBreakIntervalValue} />
                                </div>
                            </Space>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ModalComponent;