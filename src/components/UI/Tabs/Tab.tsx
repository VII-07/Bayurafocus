import { Radio } from "antd";
import './tabs.scss';
//TODO: CSS


const Tab = ({title, value} : {title : string, value : string}) => {
    return (
        <div className='radio__tab'>
            <Radio.Button className="tab"  value={value}>{title}</Radio.Button>
        </div>
    );
}

export default Tab;