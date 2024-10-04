import axios from 'axios'


// -------------------------------Get Employees--------------------------------------------------------------------------------------

export const getEmployees = async () => {
   try {
      let response = await axios.get(`https://basic-crud-backend-fnq5.onrender.com/api/all-employees`)
      // console.log("Response", response)
      return response

   } catch (error) {
      return error.response
   }

}


// ----------------------------------------------------------------------------------------------------------------------------------



// --------------------------------------------Create Employee-----------------------------------------------------------------------


export const createEmployee = async (form_data) => {
   try {
      let response = await axios.post(`https://basic-crud-backend-fnq5.onrender.com/api/create-employee`, {
         name: form_data.name,
         email: form_data.email,
         phone: form_data.phone,
         designation: form_data.designation,
         department: form_data.department,
         salary: form_data.salary,
         date_of_joining: form_data.date_of_joining
      })
      return response
   } catch (error) {
      console.log(error)
      return error.response
   }
}

// -----------------------------------------------------------------------------------------------------------------------------------



// ----------------------------------------------------Delete Employee----------------------------------------------------------------

export const deleteEmployee = async (employee_id) => {
   try {
      let response = await axios.delete(`https://basic-crud-backend-fnq5.onrender.com/api/delete-employee?employeeId=${employee_id}`)
      return response

   } catch (error) {
      console.log(error)
      return error.response
   }
}

// ------------------------------------------------------------------------------------------------------------------------------------



// -----------------------------------------------------Update Employeee------------------------------------------------------------

export const updateEmployee = async (form_data) => {
   try {
      let response = await axios.put(`https://basic-crud-backend-fnq5.onrender.com/api/edit-employee`, {
         employeeId: form_data._id,
         name: form_data.name,
         email: form_data.email,
         phone: form_data.phone,
         designation: form_data.designation,
         department: form_data.department,
         salary: form_data.salary,
         date_of_joining: form_data.date_of_joining,
      })
      return response

   } catch (error) {
      console.log(error)
      return error.response
   }
}