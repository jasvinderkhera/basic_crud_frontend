import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import './EditorJodit.css'

function EditorJodit() {
    const editor = useRef(null);
    const [content,setContent]= useState('')
  return (
    <div className='container'>
   
  <JoditEditor
			ref={editor}
			value={content}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
  </div>
  )
}

export default EditorJodit