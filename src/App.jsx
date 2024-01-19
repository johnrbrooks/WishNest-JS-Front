import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/Pages/Navigation';

function App() {

  const API_URL = import.meta.env.VITE_API_URL;

  return (
    <>
      <NavBar />
      <Routes>
        <Route to="/"/>
        <Route to="/about"/>
        <Route to="/dashboard"/>
        <Route to="/mygifts"/>
        <Route to="/settings"/>
        <Route to="/familylogin"/>
      </Routes>
    </>
  )
}

export default App
