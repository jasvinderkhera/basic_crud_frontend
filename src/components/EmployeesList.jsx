import React, { useEffect, useState } from 'react'
import {getEmployees} from '../API/api'

function EmployeesList() {

    let [employeesList, setEmployeesList] = useState([])

    let employeeData = async ()=>{
       let data = await getEmployees()
       setEmployeesList(data.data.data)
       console.log("data",data)
    }
    

    useEffect(()=>{
        employeeData()
    },[])
  return (
    <div>
        <div className="container">
            <h1>EmployeesList</h1>
            {employeesList.length !== 0 ? employeesList.map((item)=>{
                return <div className='list-group'>
                    <div className="list-group-item">{item.name}</div>
                    <div className="list-group-item">{item.department}</div>
                    <div className="list-group-item">{item.designation}</div>
                    <div className="list-group-item">{item.email}</div>
                    <div className="list-group-item">{item.phone}</div>
                    <div className="list-group-item">{item.salary}</div>
                    <button className='btn btn-danger'>Delete</button>
                </div> 
            }): ""}
        </div>
    </div>
  )
}

export default EmployeesList