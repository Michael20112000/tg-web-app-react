import './App.css'
import {useEffect} from 'react'
import {useTelegram} from './hooks/useTelegram'
import {Button} from './components/Button/Button'
import {Header} from './components/Header/Header'


function App() {
  const {handleToggleButton, tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <h1>app</h1>
      <Header/>
      <Button onClick={handleToggleButton}>toggle</Button>
    </div>
  )
}

export default App
