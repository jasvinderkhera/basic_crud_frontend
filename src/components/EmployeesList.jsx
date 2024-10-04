import React, { useEffect, useState } from "react";
import "./EmployeesList.css";
import {
  createEmployee,
  deleteEmployee,
  getEmployees,
  updateEmployee,
} from "../API/api";
import { Schemas } from "../schemas/Schemas";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmployeesList() {
  let initialState = {
    _id: "",
    name: "",
    designation: "",
    email: "",
    phone: "",
    department: "",
    salary: "",
    date_of_joining: "",
  };
  let [form_data, setForm_data] = useState(initialState);
  let [employeesList, setEmployeesList] = useState([]);

  useEffect(() => {
    employeeData();
  }, []);

  let employeeData = async () => {
    try {
      let res = await getEmployees();
      if (res && res.data.responseCode === 401) {
        toast.error(res.data.errMessage);
      } else if (res && res.data.responseCode === 200) {
        // toast.success(res.data.resMessage)
        setEmployeesList(res.data.data);
      } else if (res && res.data.responseCode === 400) {
        toast.error(res.data.errMessage);
      } else {
        toast.error("Something went wrong...");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  let createNewEmployee = async (form_data) => {
    try {
      let res = await createEmployee(form_data);
      console.log("res", res)
      if (res && res.data.responseCode === 401) {
        toast.error(res.data.errMessage);
      } else if (res && res.data.responseCode === 201) {
        toast.success(res.data.resMessage);
      } else if (res && res.data.responseCode === 400) {
        // console.log("error")
        toast.error(res.data.errMessage);
      } else {
        toast.error("Something went wrong...");
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  let removeEmployee = async (id) => {
    // console.log(id)
    try {
      let res = await deleteEmployee(id);

      if (res && res.data.responseCode === 401) {
        toast.error(res.data.errMessage);
      } else if (res && res.data.responseCode === 200) {
        toast.success(res.data.resMessage);
        employeeData();
      } else if (res && res.data.responseCode === 400) {
        toast.error(res.data.errMessage);
      } else {
        toast.error("Something went wrong..");
      }
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  let editEmployee = async (form_data) => {
    try {
      let res = await updateEmployee(form_data);
      if (res && res.data.responseCode === 401) {
        toast.error(res.data.errMessage);
      } else if (res && res.status === 200) {
        toast.success(res.data.resMessage);
        employeeData();
      } else if (res && res.status === 400) {
        // console.log("error")
        toast.error(res.data.errMessage);
      } else {
        toast.error("Something went wrong...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: form_data,
    validationSchema: Schemas,

    onSubmit: async (values, action) => {
      if (values._id !== "") {
        console.log("values")
        editEmployee(values);
      } else {
        console.log("string")
        createNewEmployee(values);
      }
      setForm_data(initialState);
      employeeData();
    },
    enableReinitialize: true,
  });
  // console.log("formData", formik.values.designation);

  return (
    <div className="main_container">
      <div className="container form_container">
        <h1 className="text-center">CRUD Form</h1>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className={`form-control ${
              formik.errors.name && formik.touched.name
                  ? 'border border-danger '
                  : ''
          }`}
          style={{
            borderColor:
                formik.errors.name && formik.touched.name
                    ? 'red'
                    : '',
        }}
            placeholder="Enter Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.errors.name && formik.touched.name ? (
            <p className="form_error">{formik.errors.name}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="name">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className={`form-control ${
              formik.errors.phone && formik.touched.phone
                  ? 'border border-danger '
                  : ''
          }`}
          style={{
            borderColor:
                formik.errors.phone && formik.touched.phone
                    ? 'red'
                    : '',
        }}
            placeholder="Enter Phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            
          />
          {formik.errors.phone && formik.touched.phone ? (
            <p className="form_error">{formik.errors.phone}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className={`form-control ${
              formik.errors.email && formik.touched.email
                  ? 'border border-danger '
                  : ''
          }`}
          style={{
            borderColor:
                formik.errors.email && formik.touched.email
                    ? 'red'
                    : '',
        }}
            placeholder="Enter Email Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="form_error">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="name">Designation</label>
          <input
            type="text"
            name="designation"
            id="designation"
            className={`form-control ${
              formik.errors.designation && formik.touched.designation
                  ? 'border border-danger '
                  : ''
          }`}
          style={{
            borderColor:
                formik.errors.designation && formik.touched.designation
                    ? 'red'
                    : '',
        }}
            placeholder="Enter Designation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.designation}
          />
          {formik.errors.designation && formik.touched.designation ? (
            <p className="form_error">{formik.errors.designation}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="name">Department</label>
          <input
            type="text"
            name="department"
            id="department"
            className={`form-control ${
              formik.errors.department && formik.touched.department
                  ? 'border border-danger '
                  : ''
          }`}
          style={{
            borderColor:
                formik.errors.department && formik.touched.department
                    ? 'red'
                    : '',
        }}
            placeholder="Enter Department"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.department}
          />
          {formik.errors.department && formik.touched.department ? (
            <p className="form_error">{formik.errors.department}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="name">Salary</label>
          <input
            type="number"
            name="salary"
            id="salary"
            className={`form-control ${
              formik.errors.salary && formik.touched.salary
                  ? 'border border-danger '
                  : ''
          }`}
          style={{
            borderColor:
                formik.errors.salary && formik.touched.salary
                    ? 'red'
                    : '',
        }}
            placeholder="Enter Salary"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.salary}
          />
          {formik.errors.salary && formik.touched.salary ? (
            <p className="form_error">{formik.errors.salary}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="name">Date of Joining</label>
          <input
            type="date"
            name="date_of_joining"
            id="date_of_joining"
            className={`form-control ${
              formik.errors.date_of_joining && formik.touched.date_of_joining
                  ? 'border border-danger '
                  : ''
          }`}
          style={{
            borderColor:
                formik.errors.date_of_joining && formik.touched.date_of_joining
                    ? 'red'
                    : '',
        }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date_of_joining}
          />
          {formik.errors.date_of_joining && formik.touched.date_of_joining ? (
            <p className="form_error">{formik.errors.date_of_joining}</p>
          ) : null}
        </div>
        <button onClick={formik.handleSubmit} className="btn btn-primary">
          Create Employee
        </button>
      </div>

        <h2 className="text-center">Employees List</h2>
      <div className="employees_section">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Date of Joining</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
          {employeesList.length !== 0 ? (
          employeesList.map((item) => {
            return (
              <tr className="my-3 mb-2" key={item._id}>
                <td className="">{item.name}</td>
                <td className="">{item.email}</td>
                <td className="">{item.phone}</td>
                <td className="">
                  {item.department}
                </td>
                <td className="">
                  {item.designation}
                </td>
                
                <td className="">{item.salary}</td>
                <td className="">{item.date_of_joining}</td>
                <td className="">
                  <button
                    className="btn btn-danger ms-3 mb-2"
                    onClick={() => removeEmployee(item._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning ms-3 mb-2"
                    onClick={() => setForm_data(item)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <h1 className="text-center mx-auto my-5">Not Found...</h1>
        )}
          </tbody>
        </table>
       
      </div>
    </div>
  );
}

export default EmployeesList;
