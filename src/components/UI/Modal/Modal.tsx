import { SettingOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Divider, Typography, Space, InputNumber } from "antd";
import './modal.scss'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setTimeWork, setTimeShortBreak, setTimeLongBreak, setLongBreakValue } from "../../../redux/actions/timer.Actions";



const ModalComponent = () => {
    const [isSettingOpen, setSettingOpen] = useState(false);
    const { timeWork, timeShortBreak, timeLongBreak, intervalLongBreak } = useSelector((state: RootState) => state.timer);

    const dispatch = useDispatch();



    const showModal = () => {
        setSettingOpen(true);
    };

    const handleOk = () => {
        setSettingOpen(false);
    };

    const handleSetTimeWork = (value: number | null) => {
        if (value !== null) {
            const minutes = value * 60;
            dispatch(setTimeWork(minutes));
        }
    };
    const handleSetTimeShortBreak = (value: number | null) => {
        if (value !== null) {
            const minutes = value * 60;
            dispatch(setTimeShortBreak(minutes));
        }
    };
    const handleSetTimeLongBreak = (value: number | null) => {
        if (value !== null) {
            const minutes = value * 60;
            dispatch(setTimeLongBreak(minutes));
        }
    };

    const handleSetTimeLongBreakIntervalValue = (value: number | null) => {
        if(value !== null) {
            dispatch(setLongBreakValue(value));
        }
    }

    return (
        <>
            <Button className={'modal__button'} type="primary" onClick={showModal}>
                <SettingOutlined />  Setting
            </Button>
            <Modal className={'modal'} title="Setting" open={isSettingOpen} onCancel={handleOk} cancelText="Close"
                footer={[
                    <Button key="close" onClick={handleOk}>Close</Button>
                ]}>
                <Divider style={{ margin: 0 }} />
                <div className="modal__container">
                    <div className="modal__time">
                        <Typography className="modal__timer__setting__title"><ClockCircleOutlined style={{ marginRight: '5px' }} />TIMER</Typography>
                        <Typography className="modal__title">Time (minutes)</Typography>
                        <div className="input__time__container">
                            <Space wrap style={{marginBottom: '10px'}}>
                                <div>
                                    <span>Bayurato</span>
                                    <InputNumber min={1} max={60} defaultValue={Math.round(timeWork / 60)} onChange={handleSetTimeWork} />
                                </div>
                                <div>
                                    <span className="input__title">Short Break</span>
                                    <InputNumber min={1} max={60} defaultValue={Math.round(timeShortBreak / 60)} onChange={handleSetTimeShortBreak} />
                                </div>
                                <div>
                                    <span className="input__title">Long Break</span>
                                    <InputNumber min={1} max={60} defaultValue={Math.round(timeLongBreak / 60)} onChange={handleSetTimeLongBreak} />
                                </div>
                            </Space>
                            <Space style={{display: 'flex', justifyContent: 'center'}}>
                                <div>
                                    <span className="input__title" style={{color: 'black',}}>Long Break Interval</span>
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