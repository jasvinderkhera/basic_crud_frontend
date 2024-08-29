import { Link, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import NewPosts from './components/NewPosts';
import EditorJodit from './components/EditorJodit';
function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <BrowserRouter>
      <div className='mt-4'>
        <div className='row'>
          <div className='col-md-3'>
            <button className='btn' onClick={toggleVisibility}>
              <svg focusable="false" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
            </button>
            {isVisible && (
        
            <div className='list-group px-2 mb-2'  style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }} >
              <div className='list-group-item'>
                <Link to={'/newpost'} className='nav-link'>NewPosts</Link>
              </div>
              <div className='list-group-item'>
                <Link to={'/editorjodit'} className='nav-link'>EditorJodit</Link>
              </div>
            </div>)}
          </div>


          <div className='col-md-9'>
            <div className='p-2 rounded border'>
              <Routes>
                <Route path='/newpost' element={<NewPosts />} />
                <Route path='/editorjodit' element={<EditorJodit />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
