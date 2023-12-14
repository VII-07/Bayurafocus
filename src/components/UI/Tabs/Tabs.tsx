import { Radio } from "antd";
import { RadioChangeEvent } from 'antd/lib/radio';
import { useEffect } from "react";
import Tab from "./Tab";
import './tabs.scss'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setRadioType } from "../../../redux/actions/radioButtonActions";
import { stopTimer } from "../../../redux/actions/ranningAction";

const Tabs = () => {
    const {workTypes, selectWorkType} = useSelector((state: RootState) => state.radio)
    const dispatch = useDispatch();

    const handleRadioChange = (e: RadioChangeEvent) => {
        dispatch(setRadioType(e.target.value));
    };

    useEffect(() => {
        dispatch(stopTimer());
        dispatch(setRadioType(selectWorkType));
    }, [selectWorkType, workTypes, dispatch]);

    return (
        <div className='radio__group__container'>
            <Radio.Group
                value={selectWorkType}
                onChange={handleRadioChange}
                className="radio__group"
            >
                <Tab title={'Bayurato'} value={`${workTypes[0]}`} />
                <Tab title={'Short Break'} value={`${workTypes[1]}`} />
                <Tab title={'Long Break'} value={`${workTypes[2]}`} />
            </Radio.Group>
        </div>
    );
}

export default Tabs;
