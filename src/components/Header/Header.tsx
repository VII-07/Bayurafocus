import { } from "react";
import styles from '../Header/header.module.scss'
import { Col, Progress, Row, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { CheckCircleFilled } from "@ant-design/icons";
import ModalComponent from "../UI/Modal/Modal";
import { useSelector } from "react-redux";
import { RootState } from "../../store";



const { Text } = Typography;




const HeaderComponent = () => {

    const { progressTimer } = useSelector((state: RootState) => state.timer)

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Header style={{ background: 'none', marginBottom: '5%', marginTop: '1%' }}>
                    <Row justify="space-between">
                        <Col sm={12} md={11} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}><Text className={styles.logo}><CheckCircleFilled />Bayurafocus</Text></Col>
                        <Col sm={12} md={13} style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                            <ModalComponent />
                        </Col>
                    </Row>
                    <Progress
                        size={['100%', 2]}
                        trailColor="#bdbdbd88"
                        style={{ bottom: '35%' }}
                        strokeColor={'white'}
                        percent={progressTimer}
                        showInfo={false}
                    />
                </Header>
            </Col>
        </div>

    );
}

export default HeaderComponent;