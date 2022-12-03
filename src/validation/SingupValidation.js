import * as yup from "yup";
import "yup-phone";

export const userSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  secondName: yup.string().required("second name is required"),
  userName: yup.string().required("username is required"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .phone(null, null, "please enter a valid  Phone number ")
    .required("Phone number is required"),
  password: yup.string().min(5).required("Email is required"),
});
