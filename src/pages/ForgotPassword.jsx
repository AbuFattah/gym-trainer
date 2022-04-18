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
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";
import Loading from "../components/Loading";
// imports end

const Register = () => {
  const [sendPasswordResetEmail, sending, firebaseError] =
    useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
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
      email: "",
    },
    // Form validation
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("required"),
    }),
    onSubmit: async (values) => {
      await sendPasswordResetEmail(values.email);
      toast.success("Reset link sent");
      navigate(-1);
    },
  });

  if (firebaseError) {
    toast.error(firebaseError);
  }
  // if (sending) {

  // }

  console.log(formik.touched);

  return (
    <div className="bg-primary p-10 text-white">
      <h1 className="font-semibold text-4xl text-center my-5">
        Password Reset
      </h1>
      <h1 className=" text-xl text-center my-5">
        Don't have an account?{" "}
        <Link to="/register" className="text-secondary">
          Register
        </Link>
      </h1>
      <div className="container mx-auto px-4 flex items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="p-5 rounded-lg bg-white text-black max-w-[450px] w-full"
        >
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

          <div className="text-right">
            <button
              type="submit"
              className="btn btn-secondary my-6 w-40 inline"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
      <button
        className="btn btn-primary text-secondary mx-auto block my-3"
        onClick={() => navigate(-1)}
      >
        Cancel
      </button>
    </div>
  );
};

export default Register;
