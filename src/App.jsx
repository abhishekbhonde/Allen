import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Scholarship from './Components/Scholarship'
import TestSeries from './Components/TestSeries'
import StudyMaterials from './Components/StudyMaterials'
import Home from './Components/Home'
import Exams from './Components/Exams'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Programs from './Components/Programs'
function App() {

  return (
    <>
      <Router>
        <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/exams' element={<Exams/>}></Route>
              <Route path='/scholarship' element={<Scholarship/>}></Route>
              <Route path='/test-series' element={<TestSeries/>}></Route>
              <Route path='/study-materials' element={<StudyMaterials/>}></Route>
              <Route path='/programs' element={<Programs/>}></Route>

            </Routes>
      </Router>
    </>
  )
}

export default App
