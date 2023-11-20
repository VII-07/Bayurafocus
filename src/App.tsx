import { useCallback } from 'react'
import { Layout } from 'antd'
import 'antd/dist/reset.css'
import HeaderComponent from './components/Header/Header'
import Timer from './components/Timer/Timer'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import './App.scss'



function App() {

  const {work, longBreak, shortBreak} = useSelector((state: RootState) => state.timer);
 
  const changeBG = useCallback(() => {
    if(work) {
      return 'work__bg';
    } else if (shortBreak) {
      return 'short__break__bg';
    } else if(longBreak) {
      return 'long__break__bg'
    }
  },[work, shortBreak, longBreak] )


  return (
    <Layout className={changeBG()} style={{ minHeight: '100vh'}}>
      <HeaderComponent/>
      <Timer/>
    </Layout>
  )
}

export default App
