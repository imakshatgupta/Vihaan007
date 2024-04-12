import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import HomeOnline from './pages/HomeOnline'
import HomeOffline from './pages/HomeOffline'
import Signup from './components/Signup'
import Login from './components/Login'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomeOnline/>}/>
        <Route path="/offlinepay" element={<HomeOffline/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
