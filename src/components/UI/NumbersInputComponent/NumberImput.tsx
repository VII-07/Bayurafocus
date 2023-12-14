import { InputNumber } from "antd";
import { NumberInputTypes } from "../../../types/types";

const NumberInputCastom = ({ defaultValue, onChange, title }: NumberInputTypes) => {
    return (
        <div>
            <span>{title}</span>
            <InputNumber min={1} max={60} defaultValue={Math.round(defaultValue / 60)} onChange={onChange}/>
        </div>
    );
}

export default NumberInputCastom;