import { Link, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Form from './components/Form';
import EmployeesList from './components/EmployeesList'
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <BrowserRouter>
        <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<EmployeesList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
