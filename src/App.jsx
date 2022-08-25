import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from'./components/navbar'
import Main from './components/main'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar /> 
      <div className='hr-container'><div className='hr-div'></div></div>
      <Main />
      <Footer />
    </div>
  )
}

export default App
