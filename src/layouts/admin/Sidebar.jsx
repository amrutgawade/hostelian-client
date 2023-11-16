import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const role = localStorage.getItem("role");
  if (role === "admin") {
    return (
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link className="nav-link" to="/dashboard">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Dashboard
            </Link>
            <Link className="nav-link" to="/profile">
              <div className="sb-nav-link-icon">
                <i className="fas fa-user-edit" />
              </div>
              Change Password
            </Link>

            <Link className="nav-link" to="/mess-details">
              <div className="sb-nav-link-icon">
                <i className="fas fa-sack-dollar" />
              </div>
              Mess Details
            </Link>

            <Link className="nav-link" to="/manage-students">
              <div className="sb-nav-link-icon">
                <i className="fas fa-users" />
              </div>
              Manage Students
            </Link>

            <Link
              className="nav-link collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-house-user" />
              </div>
              Room Details
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </Link>
            <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to="/room-details">
                  All Rooms
                </Link>
                <Link className="nav-link" to="/manage-rooms">
                  Manage Rooms
                </Link>
              </nav>
            </div>

            <Link className="nav-link" to="/complaint-box">
              <div className="sb-nav-link-icon">
                <i className="fas fa-envelope" />
              </div>
              Complaint Box
            </Link>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Admin
        </div>
      </nav>
    );
  } else if (role === "student") {
    return (
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link className="nav-link" to="/dashboard">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Dashboard
            </Link>
            <Link className="nav-link" to="/profile">
              <div className="sb-nav-link-icon">
                <i className="fas fa-user-edit" />
              </div>
              Profile
            </Link>
            <Link className="nav-link" to="/book-hostel">
              <div className="sb-nav-link-icon">
                <i className="fas fa-check-double" />
              </div>
              Book Hostel
            </Link>
            <Link className="nav-link" to="/room-details">
              <div className="sb-nav-link-icon">
                <i className="fas fa-house-user" />
              </div>
              Hostel Details
            </Link>
            <Link className="nav-link" to="/mess-bill">
              <div className="sb-nav-link-icon">
                <i className="fas fa-sack-dollar" />
              </div>
              Mess Bill
            </Link>
            <Link className="nav-link" to="/anti-ragging">
              <div className="sb-nav-link-icon">
                <i className="fas fa-ban" />
              </div>
              Anti-Rgging
            </Link>
            <Link className="nav-link" to="complaint-box">
              <div className="sb-nav-link-icon">
                <i className="fas fa-envelope" />
              </div>
              Complaint Box
            </Link>
            {/* <Link
              className="nav-link collapsed"
              to="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns" />
              </div>
              Layouts
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </Link>
            <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to="layout-static.html">
                  Static Navigation
                </Link>
                <Link className="nav-link" to="layout-sidenav-light.html">
                  Light Sidenav
                </Link>
              </nav>
            </div> */}
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Student
        </div>
      </nav>
    );
  }
}

export default Sidebar;
