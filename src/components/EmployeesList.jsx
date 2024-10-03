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
      let data = await getEmployees();
      if (res && res.data.responseCode === 401) {
        toast.error(res.data.errMessage);
      } else if (res && res.data.responseCode === 200) {
        setEmployeesList(data.data.data);
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
      if (res && res.data.responseCode === 401) {
        toast.error(res.data.errMessage);
      } else if (res && res.status === 201) {
        toast.success(res.data.resMessage);
      } else if (res && res.status === 400) {
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
        editEmployee(values);
      } else {
        createNewEmployee(values);
      }
      setForm_data(initialState);
      employeeData();
    },
    enableReinitialize: true,
  });
  // console.log("formData", formik.values.designation);

  return (
    <div>
      <div className="container form_container">
        <h1>Form</h1>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Enter Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name">Phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="form-control"
            placeholder="Enter Phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.errors.name && formik.touched.name ? (
            <p className="form_error">{formik.errors.name}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
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
            className="form-control"
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
            className="form-control"
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
            className="form-control"
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
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date_of_joining}
          />
          {formik.errors.date_of_joining && formik.touched.date_of_joining ? (
            <p className="form_error">{formik.errors.date_of_joining}</p>
          ) : null}
        </div>
        <button onClick={formik.handleSubmit} className="text-center">
          Create Employee
        </button>
      </div>

      <div className="employees_section">
        <h2 className="text-center">Employees List</h2>
        {employeesList.length !== 0 ? (
          employeesList.map((item) => {
            return (
              <div className="list-group list-group-horizontal my-3">
                <div className="list-group-item flex-fill">{item.name}</div>
                <div className="list-group-item flex-fill">
                  {item.department}
                </div>
                <div className="list-group-item flex-fill">
                  {item.designation}
                </div>
                <div className="list-group-item flex-fill">{item.email}</div>
                <div className="list-group-item flex-fill">{item.phone}</div>
                <div className="list-group-item flex-fill">{item.salary}</div>
                <div className="list-group-item">
                  <button
                    className="btn btn-danger ms-3"
                    onClick={() => removeEmployee(item._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning ms-3"
                    onClick={() => setForm_data(item)}
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="text-center mx-auto my-5">Not Found...</h1>
        )}
      </div>
    </div>
  );
}

export default EmployeesList;
