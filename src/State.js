import { Link, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import img from './images/logo.png'
import img2 from './images/user.png'
import './App.css';
import NewPosts from './components/NewPosts';
import EditorJodit from './components/EditorJodit';

function State() {
  const [isFullWidth, setIsFullWidth] = useState(true);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isrightSidebarExpanded, setIsRightSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(prevState => !prevState); // Toggle sidebar width
  };

  const toggleWidth = () => {
    setIsFullWidth(prevState => !prevState); // Toggle main content width
  };


  const handleClick = () => {
    toggleSidebar();
    toggleWidth();
  };

  const toggleProfile = () =>{
    setIsRightSidebarExpanded(prevState => !prevState)
  }


  const mainContentStyle = {
    width: isFullWidth ? '100%' : 'calc(100% - 300px)',
    minHeight: '100vh',
    transition: 'width 0.3s', // Smooth transition
    position: 'absolute', // Positioning to adjust from right
    right: 0,
  };

  return (
    <BrowserRouter>
      <div>
        <div className='navbar '>
         <div className='start'>
         <button className='btn' onClick={handleClick}>
            <svg focusable="false" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </button>
          <img src={img} alt="Logo" />
         </div>
          <div className="searchbar">
        <input
          type="text"
          placeholder="Search posts"
          className="search_input d-none d-lg-flex"
        />
      </div>
      <div className="end" onClick={toggleProfile}>
        <img src={img2} alt="Profile" className="profile" />
      </div>
      <div className={`rightsidebar ${isrightSidebarExpanded ? 'expanded' : ''}`}>
        <h2>Hello user</h2>
        <button className='btn btn-danger rounded-4'>Logout </button>
      </div>
        </div>
        <div className='row' style={{margin:'0'}}>
          <div className={`sidebar ${isSidebarExpanded ? 'expanded' : ''}`}>
            <div className='list-group mb-2' style={{ marginTop: '20px', padding: '10px' }}>
            <div className='list-group-item'>
                <Link to={'/newpost'} className='nav-link text-success fs-4'>Username</Link>
              </div>
            <div className="newpost">
              <Link to="/NewPosts" className="nav-link list-group-item" style={{color:'orange'}}>
                + NEW POST
              </Link>
            </div>
              <div className='list-group-item'>
                <Link to={'/newpost'} className='nav-link'>NewPosts</Link>
              </div>
              <div className='list-group-item'>
                <Link to={'/editorjodit'} className='nav-link'>EditorJodit</Link>
              </div>
            </div>
          </div>
          <div style={mainContentStyle}>
            <div className=''>
              <Routes>
                <Route path='/' element={<NewPosts />} />
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

export default State;
