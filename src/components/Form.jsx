import React, { useState } from 'react'
import { getEmployees } from '../API/api'

function Form() {
  const[form_data, setFormData] = useState(initialState())
  const[tableData, setTableData] = useState([])

  function initialState() {
    return {
      name: "",
      position: "",
      department: "",
      salary: "",
      hiredate: ""
    }
  }

  const getData = async () =>{
    const res = await getEmployees()
    console.log()

  }
  return (
    <div className='container'>
       
        
    </div>
  )
}

export default Form