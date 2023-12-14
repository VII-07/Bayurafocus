import { Layout } from 'antd'
import 'antd/dist/reset.css'
import styles from './layotComponent.module.scss'
import HeaderComponent from '../Header/Header'
import Timer from '../Timer/Timer'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import changeBg from '../../functions/changeBg'

const LayotComponent = () => {

  const { workTypes, selectWorkType } = useSelector((state: RootState) => state.radio);

  return (
    <Layout className={changeBg({selectWorkType, workTypes, styles})} style={{ minHeight: '100vh' }}>
      <HeaderComponent />
      <Timer />
    </Layout>
  );
}

export default LayotComponent;