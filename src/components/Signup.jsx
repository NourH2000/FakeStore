import React, { useState } from "react";
import { useFormik } from "formik";
import { userSchema } from "../validation/SingupValidation";
import axios from "axios";

const Signup = () => {
  // ERROR SERVER MESSAGE
  const [errMsg, setErrMsg] = useState("");
  const [succMsg, setSuccMsg] = useState("");

  // SIGNUP
  const onSubmit = async (values) => {
    // data
    var data = JSON.stringify({
      email: values.email,
      username: values.username,
      password: values.password,
      name: {
        firstname: values.firstName,
        secondName: values.secondName,
      },
      phone: values.phone,
    });
    // config
    var config = {
      method: "post",
      url: "https://fakestoreapi.com/users",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    // axios :
    //console.log(data);
    const response = await axios(config)
      .then((res) => {
        setErrMsg("");
        setSuccMsg("Thanks for registration");
        return res?.data?.id;
      })

      .catch((err) => {
        setSuccMsg("");
        setErrMsg("signup failed : server error");
      });
    console.log(response);
  };

  // FORMIK + YUP VALIDATION
  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        secondName: "",
        userName: "",
        email: "",
        phone: "",
        password: "",
      },
      validationSchema: userSchema,
      onSubmit,
    });
  return (
    <div id="login" className="h-screen w-full flex justify-center  ">
      <form
        onSubmit={handleSubmit}
        className=" w-full  md:w-[700px] max-w-[900px] h-full sm:h-[500px]  flex flex-col  px-6 pt-6  mt-24 shadow-lg border-t border-[#f4d504] "
      >
        <p
          className={
            succMsg
              ? "bg-green-100 text-xl font-bold text-green-900 p-4 rounded mb-2"
              : "hidden"
          }
        >
          {succMsg}
        </p>
        <p
          className={
            errMsg
              ? "bg-red-100 text-xl font-bold text-red-900 p-4 rounded mb-2"
              : "hidden"
          }
        >
          {errMsg}
        </p>
        <div className="grid sm:grid-cols-2 gap-3 py-2">
          <div className="flex flex-col    mb-8">
            <label className="uppercase">first Name</label>

            <input
              id="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.firstName && touched.firstName
                  ? "border-2 p-2 border-red-600 rounded relative"
                  : "border p-2 rounded"
              }
              type="text"
              placeholder="first name"
              autoComplete="off"
            />
            {errors.firstName && touched.firstName ? (
              <p className="text-red-700 absolute mt-[70px]">
                {errors.firstName}
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col  mb-4">
            <label className="uppercase">second name</label>
            <input
              id="secondName"
              value={values.secondName}
              onChange={handleChange}
              className={
                errors.secondName && touched.secondName
                  ? "border-2 p-2 border-red-600 rounded"
                  : "border p-2 rounded"
              }
              onBlur={handleBlur}
              type="text"
              placeholder="second name"
              autoComplete="off"
            />
            {errors.secondName && touched.secondName ? (
              <p className="text-red-700 absolute mt-[70px]">
                {errors.secondName}
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col  mb-8">
            <label className="uppercase">Username</label>
            <input
              id="userName"
              value={values.userName}
              onChange={handleChange}
              className={
                errors.userName && touched.userName
                  ? "border-2 p-2 border-red-600 rounded"
                  : "border p-2 rounded"
              }
              onBlur={handleBlur}
              type="text"
              placeholder="username"
              autoComplete="off"
            />
            {errors.userName && touched.userName ? (
              <p className="text-red-700 absolute mt-[70px]">
                {errors.userName}
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col  mb-8">
            <label className="uppercase">email</label>
            <input
              id="email"
              value={values.email}
              onChange={handleChange}
              className={
                errors.email && touched.email
                  ? "border-2 p-2 border-red-600 rounded"
                  : "border p-2 rounded"
              }
              onBlur={handleBlur}
              type="email"
              placeholder="email"
              autoComplete="off"
            />
            {errors.email && touched.email ? (
              <p className="text-red-700 absolute mt-[70px]">{errors.email}</p>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col  mb-8">
            <label className="uppercase">phone</label>
            <input
              id="phone"
              value={values.phone}
              onChange={handleChange}
              className={
                errors.phone && touched.phone
                  ? "border-2 p-2 border-red-600 rounded"
                  : "border p-2 rounded"
              }
              onBlur={handleBlur}
              type="phone"
              placeholder="phone"
              autoComplete="off"
            />
            {errors.phone && touched.phone ? (
              <p className="text-red-700 absolute mt-[70px]">{errors.phone}</p>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col  mb-8">
            <label className="uppercase">password</label>
            <input
              value={values.password}
              onChange={handleChange}
              id="password"
              onBlur={handleBlur}
              className={
                errors.password && touched.password
                  ? "border-2 p-2 border-red-600 rounded"
                  : "border p-2 rounded"
              }
              type="password"
              placeholder="password"
              autoComplete="off"
            />
            {errors.password && touched.password ? (
              <p className="text-red-700 absolute mt-[70px]">
                {errors.password}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>

        <button className="disabled:bg-[#bba307] mb-0 px-3 py-2 bg-[#f4d504] rounded">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
