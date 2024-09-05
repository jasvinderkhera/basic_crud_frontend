import { Link, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Form from './components/Form';
import EmployeesList from './components/EmployeesList'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/employees-list' element={<EmployeesList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
