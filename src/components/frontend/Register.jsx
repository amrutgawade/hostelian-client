import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
// import { DevTool } from '@hookform/devtools'

function Register() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const navigate = useNavigate();

  const onSubmit = (data, event) => {
    const {firstName, lastName, gender, course, mobile, email, password} = data;
    const formData = {firstName, lastName, gender, course, mobile, email, password};
    console.log("Register Form Submitted", formData);
    event.target.reset();
    swal("Registered..!", "Congratulations..!", "success").then(() =>
      navigate("/")
    );
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">
                  Create Account
                </h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3 mb-md-0">
                        <input
                          className="form-control"
                          id="inputFirstName"
                          type="text"
                          placeholder="Enter your first name"
                          {...register("firstName", {
                            required: {
                              value: true,
                              message: "first name is required",
                            },
                          })}
                        />
                        <p className="error">{errors.firstName?.message}</p>
                        <label htmlFor="inputFirstName">First name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3 mb-md-0">
                        <input
                          className="form-control"
                          id="inputLastName"
                          type="text"
                          placeholder="Enter your last name"
                          {...register("lastName", {
                            required: {
                              value: true,
                              message: "last name is required",
                            },
                          })}
                        />
                        <p className="error">{errors.lastName?.message}</p>
                        <label htmlFor="inputLastName">Last name</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <select
                      className="form-select py-3"
                      id="inputGender"
                      aria-label="Gender"
                      {...register("gender", {
                        required: {
                          value: true,
                          message: "gender is required",
                        },
                      })}
                    >
                      <option value="">Gender</option>
                      <option value={"male"}>Male</option>
                      <option value={"female"}>Female</option>
                      <option value={"other"}>Other</option>
                    </select>
                    <p className="error">{errors.gender?.message}</p>
                  </div>

                  <div className="mb-3">
                    <select
                      className="form-select py-3"
                      id="inputCourse"
                      aria-label="Course"
                      {...register("course", {
                        required: {
                          value: true,
                          message: "course is required",
                        },
                      })}
                    >
                      <option value="">Course</option>
                      <option value={"Computer Engineering"}>
                        Computer Engineering
                      </option>
                      <option value={"Mechanical Engineering"}>
                        Mechanical Engineering
                      </option>
                      <option value={"Civil Engineering"}>
                        Civil Engineering
                      </option>
                      <option value={"ENTC Engineering"}>
                        ENTC Engineering
                      </option>
                    </select>
                    <p className="error">{errors.course?.message}</p>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="inputMobile"
                      type="text"
                      placeholder="+91 987-654-3210"
                      {...register("mobile", {
                        required: {
                          value: true,
                          message: "mobile is required",
                        },
                      })}
                    />
                    <p className="error">{errors.mobile?.message}</p>
                    <label htmlFor="inputMobile">Mobile</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="inputEmail"
                      type="email"
                      placeholder="name@example.com"
                      {...register("email", {
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Invalid Email",
                        },
                        required: { value: true, message: "email is required" },
                      })}
                    />
                    <p className="error">{errors.email?.message}</p>
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3 mb-md-0">
                        <input
                          className="form-control"
                          id="inputPassword"
                          type="password"
                          placeholder="Create a password"
                          {...register("password", {
                            required: {
                              value: true,
                              message: "password is required",
                            },
                          })}
                        />
                        <p className="error">{errors.password?.message}</p>
                        <label htmlFor="inputPassword">Password</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3 mb-md-0">
                        <input
                          className="form-control"
                          id="inputPasswordConfirm"
                          type="password"
                          placeholder="Confirm password"
                          {...register("confirmPassword", {
                            required: {
                              value: true,
                              message: "confirm password is required",
                            },
                          })}
                        />
                        <p className="error">
                          {errors.confirmPassword?.message}
                        </p>
                        <label htmlFor="inputPasswordConfirm">
                          Confirm Password
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 mb-0">
                    <div className="d-grid">
                      <button className="btn btn-primary btn-block">
                        Create Account
                      </button>
                    </div>
                  </div>
                </form>
                {/* <DevTool control={control} /> */}
              </div>
              <div className="card-footer text-center py-3">
                <div className="small">
                  <Link to="/">Have an account? Go to login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
