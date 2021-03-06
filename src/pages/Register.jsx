import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import googleIcon from "../assets/images/svg/googleIcon.svg";
import {
  RiUser4Line as User,
  RiLockPasswordLine as Lock,
} from "react-icons/ri";
import { AiOutlineMail as Email } from "react-icons/ai";
import {
  BsEyeFill as EyeOpenIcon,
  BsEyeSlashFill as EyeClosedIcon,
} from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";
import Loading from "../components/Loading";
// imports end

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, firebaseError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  // control input focus
  const [focus, setFocus] = useState({
    email: false,
    name: false,
    password: false,
    passwordConfirm: false,
  });

  // Add Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    // Form validation
    validationSchema: Yup.object({
      name: Yup.string().max(15, "Must be 15 characters or less"),
      email: Yup.string().email("Invalid email address").required("required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("required"),
      passwordConfirm: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("required")
        .when("password", {
          is: (val) => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Passwords do not match"
          ),
        }),
    }),
    onSubmit: (values) => {
      createUserWithEmailAndPassword(values.email, values.password);
    },
  });

  if (firebaseError) {
    toast.error(firebaseError);
  }
  if (googleError) {
    toast.error(googleError);
  }
  if (loading || googleLoading) {
    return <Loading />;
  }
  if (user) {
    console.log("yo");
    toast.success("Registration Successful");
    navigate(location?.state?.from || "/");
  }

  if (googleUser) {
    toast.success("Registration Successful");
    navigate(location?.state?.from || "/");
  }

  return (
    <div className="bg-primary p-10 text-white">
      <h1 className="font-semibold text-4xl text-center my-5">
        Create New Account
      </h1>
      <h1 className=" text-xl text-center my-5">
        Already a member?{" "}
        <Link to="/signin" className="text-secondary">
          Sign In
        </Link>
      </h1>
      <div className="container mx-auto px-4 flex items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="p-5 rounded-lg bg-white text-black max-w-[450px] w-full"
        >
          <div className="form-group">
            <label htmlFor=" name">Your Name</label>
            <div className="relative">
              <input
                className={`outline-none mt-3 block border-2 focus:border-secondary border-gray  rounded-md pl-10 py-2 w-full`}
                name="name"
                onFocus={setFocus.bind(null, { ...focus, name: true })}
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={(e) => {
                  setFocus({ ...focus, name: false });
                  formik.handleBlur(e);
                }}
                type="text"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-600">{formik.errors.name}</p>
              )}
              <User
                className={`absolute left-3 top-3 text-xl ${
                  focus.name ? "text-secondary" : "text-gray"
                }`}
              />
            </div>
          </div>
          <div className="form-group mt-5">
            <label className="required-field" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                required
                className={`outline-none focus:border-secondary border-gray mt-3 block border-2  rounded-md pl-10 py-2 w-full`}
                name="email"
                onFocus={setFocus.bind(null, { ...focus, email: true })}
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={(e) => {
                  setFocus({ ...focus, email: false });
                  formik.handleBlur(e);
                }}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-600">{formik.errors.email}</p>
              )}
              <Email
                className={`text-secondary absolute left-3 top-3 text-xl ${
                  focus.email ? "text-secondary" : "text-gray"
                }`}
              />
            </div>
          </div>
          <div className="form-group mt-5">
            <label className="required-field" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className={`outline-none focus:border-secondary border-gray mt-3 block border-2  rounded-md pl-10 py-2 w-full`}
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                onFocus={setFocus.bind(null, { ...focus, password: true })}
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={(e) => {
                  setFocus({ ...focus, password: false });
                  formik.handleBlur(e);
                }}
              />

              {formik.touched.password && formik.errors.password && (
                <p className="text-red-600">{formik.errors.password}</p>
              )}
              <Lock
                className={`text-secondary absolute left-3 top-3 text-xl ${
                  focus.password ? "text-secondary" : "text-gray"
                }`}
              />
              <EyeOpenIcon
                onClick={() => setShowPassword(!showPassword)}
                className={`cursor-pointer text-slate-500 absolute right-3 top-3 text-xl ${
                  focus.password ? "text-secondary" : "text-gray"
                }`}
              />
            </div>
          </div>
          <div className="form-group mt-5">
            <label className="required-field" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="relative">
              <input
                className={`outline-none focus:border-secondary border-gray mt-3 block border-2  rounded-md pl-10 py-2 w-full`}
                type={`${showPasswordConfirm ? "text" : "password"}`}
                name="passwordConfirm"
                onFocus={setFocus.bind(null, {
                  ...focus,
                  passwordConfirm: true,
                })}
                onChange={formik.handleChange}
                value={formik.values.passwordConfirm}
                onBlur={(e) => {
                  setFocus({
                    ...focus,
                    passwordConfirm: false,
                  });
                  formik.handleBlur(e);
                }}
              />
              {formik.touched.passwordConfirm &&
                formik.errors.passwordConfirm && (
                  <p className="text-red-600">
                    {formik.errors.passwordConfirm}
                  </p>
                )}
              <Lock
                className={`text-secondary absolute left-3 top-3 text-xl ${
                  focus.passwordConfirm ? "text-secondary" : "text-gray"
                }`}
              />
              <EyeOpenIcon
                onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                className={`cursor-pointer text-slate-500 absolute right-3 top-3 text-xl ${
                  focus.password ? "text-secondary" : "text-gray"
                }`}
              />
            </div>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="btn btn-secondary my-6 w-40 inline"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
      <div className="flex gap-2 mt-5 items-center justify-center text-slate-400">
        <div className="w-[100px] h-[2px] bg-slate-400"></div>
        <p>OR</p>
        <div className="w-[100px] h-[2px] bg-slate-400"></div>
      </div>
      <p className="text-center my-3 text-slate-400">
        {location.pathname === "/register" ? "Sign Up" : "Sign In"} with
      </p>
      <button
        className="flex items-center justify-center bg-white p-2 rounded-full mx-auto mt-5"
        onClick={() => signInWithGoogle()}
      >
        <img className="w-8 h-8" src={googleIcon} alt="google" />
      </button>
    </div>
  );
};

export default Register;
