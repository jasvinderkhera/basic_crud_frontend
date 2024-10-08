import * as Yup from "yup"

export const Schemas = Yup.object({
    name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain alphabets and spaces")
    .min(2, "Name must be at least 3 characters")
    .max(25, "Name cannot be greater than 25 characters")
    .required("Please enter name"),
    phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone Number must be 10 digits only")
    .required("Phone number is a required field"),
    email: Yup.string()
    .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please enter a valid email address'
    )
    .required('Email is required field'),
    designation: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Designation can only contain alphabets and spaces")
    .min(2, "Designation must be at least 2 characters")
    .max(20, "Designation cannot be greater than 20 characters")
    .required("Please enter the Designation"),
    department: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Department can only contain alphabets and spaces")
    .min(2, "Department must be at least 2 characters")
    .max(20, "Department cannot be greater than 20 characters")
    .required("Please enter the Department"),
    salary: Yup.string()
    .matches(
        /^[0-9]+$/,
        'Salary should be number and greater than or equal to zero'
    )
    .min(4, 'Salary must be at least 4 digit')
    .max(15, "Salary can't exceed 15 digits")
    .required('Salary is required field'),

date_of_joining: Yup.date()
    .max(new Date(), "Joining date can't be greater than today's date")
    .required('Date of Joining is required field'),

})