import { Radio } from "antd";
import { RadioChangeEvent } from 'antd/lib/radio';
import { useEffect, useState } from "react";
import Tab from "./Tab";
import './tabs.scss'
import { useDispatch } from "react-redux";
import { setTimerLongBreakType, setTimerShortBreakType, setTimerWorkType, stopTime } from "../../../actions/timer.Actions";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Tabs = () => {
    const {work, shortBreak, longBreak} = useSelector((state: RootState) => state.timer)
    const [workType, setWorkType] = useState('bayurato');
    const dispatch = useDispatch();



    const onChange = (e: RadioChangeEvent) => {
        setWorkType(e.target.value);
    };
    useEffect(() => {
        if(work) {
            setWorkType('bayurato');
        } else if(shortBreak) {
            setWorkType('shortBreak');
        } else if(longBreak) {
            setWorkType('longBreak');
        }
    },[work, shortBreak, longBreak])

    useEffect(() => {
        switch(workType) {
            case'bayurato': dispatch(stopTime()), dispatch(setTimerWorkType())
            break;
            case 'shortBreak': dispatch(stopTime()), dispatch(setTimerShortBreakType())
            break;
            case 'longBreak': dispatch(stopTime()) ,dispatch(setTimerLongBreakType())
            break;
        }
    }, [workType, dispatch]);


    return (
        <div className='radio__group'>
            <Radio.Group
                value={workType}
                onChange={onChange}
                style={{ marginBottom: 16 }}
            >
                <Tab title={'Bayurato'} value={'bayurato'} />
                <Tab title={'Short Break'} value={'shortBreak'} />
                <Tab title={'Long Break'} value={'longBreak'} />
            </Radio.Group>
        </div>
    );
}

export default Tabs;