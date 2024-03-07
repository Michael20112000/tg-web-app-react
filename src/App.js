import './App.css'
import {useEffect} from 'react'
import {useTelegram} from './hooks/useTelegram'
import {Header} from './components/Header/Header'
import {Route, Routes} from 'react-router-dom'
import {ProductList} from './components/ProductList/ProductList'
import {Form} from './components/Form/Form'


export const App = () => {
  const {handleToggleButton, tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <h1>app</h1>
      <Header/>
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path="form" element={<Form/>}/>
      </Routes>
    </div>
  )
}
