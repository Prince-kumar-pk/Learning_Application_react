// import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Slider from './components/Slider/Slider';
import Course from './components/Course/Course';
import Layout from './components/Layout/Layout';
// import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Creater from './components/Creater/Creater';
import Home from './components/Home/Home';

function App() {
  return (
    <>
 
 <Routes>
  <Route path='/' element={<Layout/>} >
          <Route path='/' element={ <Home/>} />
          <Route path='/home' element={ <Home/>} />
          <Route path='/about' element={ <About/> } />
          <Route path='/course' element={<Course/>} />
          
          <Route path='/creater' element={<Creater/>} />
  </Route>
 </Routes>
  
    

   
    </>
  );
}

export default App;
