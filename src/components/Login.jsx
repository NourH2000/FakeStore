import axios from "axios";
import React, { useEffect, useRef, useState, useContext } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
const Login = () => {
  const { auth, setAuth } = useAuth();
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  /* login function */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // data
    var data = JSON.stringify({
      username: user,
      password: pwd,
    });

    // config
    var config = {
      method: "post",
      url: "https://fakestoreapi.com/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    // axios :
    const response = await axios(config)
      .then((res) => {
        //get the token
        const accessToken = res?.data?.token;
        // set the auth data in auth context
        console.log(accessToken);
        setAuth({ user: user, pwd: pwd, accessToken: accessToken });
        setUser("");
        setPwd("");
        Navigate(from, { replace: true });
        //        Navigate("/products");
      })
      // errors
      .catch((err) => {
        if (!err?.response) {
          setErrMsg("NO SERVER RESPONSE");
        } else if (err?.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else if (err?.response?.status === 400) {
          setErrMsg("Missing username or password");
        } else {
          setErrMsg("login failed");
        }
      });
  };

  return (
    <div id="login" className="h-screen w-full flex justify-center  ">
      <form
        onSubmit={handleSubmit}
        className=" w-full md:w-[500px] max-w-[500px] h-[500px] flex flex-col bg-white p-8  mt-10  shadow-lg border-t border-[#f4d504]"
      >
        <p
          className={
            errMsg
              ? "bg-red-100 text-xl font-bold text-red-900 p-4 rounded mb-2"
              : "hidden"
          }
        >
          {errMsg}
        </p>
        <div className="flex flex-col py-2">
          <label>Username</label>
          <input
            className="border p-2"
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
        </div>
        <div className="flex flex-col py-8">
          <label>Password</label>
          <input
            className="border p-2 "
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
        </div>
        <button
          type="submit"
          className=" w-full border border-[#f4d504] bg-[#f4d504] rounded-sm py-2 px-6 uppercase hover:bg-[#ffdd00]"
        >
          login
        </button>
        <div className="flex justify-between w-full mt-10">
          <p className="flex justify-around items-center">
            <input type="checkbox" className="w-[50px] h-[20px]" /> Rememeber me
          </p>
          <Link
            to="/signup"
            className="border-2 border-[#f4d504] px-3 py-1 hover:bg-[#f4d504] rounded hover:cursor-pointer"
          >
            Signin
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
