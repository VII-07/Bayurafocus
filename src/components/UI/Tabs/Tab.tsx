import { Radio } from "antd";
import './tabs.scss';


const Tab = ({title, value} : {title : string, value : string}) => {
    return (
        <div className='radio__tab'>
            <Radio.Button style={{display: "flex", justifyContent: "center", alignItems:"center"}}  value={value}>{title}</Radio.Button>
        </div>
    );
}

export default Tab;