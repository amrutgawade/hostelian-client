import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Login() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const navigate = useNavigate();

  const onSubmit = (data, event) => {
    console.log("Login Form Submitted", data);
    event.target.reset();
    const {role} = data;
    localStorage.setItem("role",role);
    swal("Logged In..!", "Congratulations..!", "success").then(() =>
      navigate("/dashboard")
    );
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="inputEmail"
                      type="email"
                      placeholder="name@example.com"
                      {...register("email", {
                        required: { value: true, message: "email is required" },
                      })}
                    />
                    <p className="error">{errors.email?.message}</p>
                    <label htmlFor="inputEmail">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="inputPassword"
                      type="password"
                      placeholder="Password"
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

                  <div className="mb-3">
                    <select
                      className="form-select py-3"
                      id="inputRole"
                      aria-label="Role"
                      {...register("role", {
                        required: { value: true, message: "Role is required" },
                      })}
                    >
                      <option value="">Role</option>
                      <option value={"student"}>Student</option>
                      <option value={"admin"}>Admin</option>
                    </select>
                    <p className="error">{errors.role?.message}</p>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <Link className="small" to="#">
                      Forgot Password?
                    </Link>
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center py-3">
                <div className="small">
                  <Link to="/register">Need an account? Sign up!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
