import axios from 'axios'

export const getEmployees = async () => {
   try {
    let response = await axios.get('http://localhost:8800/api/all-employees')
    console.log("Response", response)
    return response

   } catch (error) {
    return error.response
   }
    
}