import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const data = {
    role: "admin",
  };
  if (data.role === "admin") {
    return (
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link className="nav-link" to="/admin/dashboard">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Dashboard
            </Link>
            <Link className="nav-link" to="/admin/profile">
              <div className="sb-nav-link-icon">
                <i className="fas fa-sack-dollar" />
              </div>
              Mess Bills
            </Link>
            <Link
              className="nav-link collapsed"
              to="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-user" />
              </div>
              Students
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
                  Add Students
                </Link>
                <Link className="nav-link" to="layout-sidenav-light.html">
                  Manage Students
                </Link>
              </nav>
            </div>

            <Link
              className="nav-link collapsed"
              to="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-user" />
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
                <Link className="nav-link" to="layout-static.html">
                  Add Rooms
                </Link>
                <Link className="nav-link" to="layout-sidenav-light.html">
                  Manage Rooms
                </Link>
              </nav>
            </div>

            <Link className="nav-link" to="#">
              <div className="sb-nav-link-icon">
                <i className="fas fa-envelope" />
              </div>
              Complaints
            </Link>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Admin
        </div>
      </nav>
    );
  } else if (data.role === "student") {
    return (
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link className="nav-link" to="/student/dashboard">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Dashboard
            </Link>
            <Link className="nav-link" to="/student/profile">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Profile
            </Link>
            <Link
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
            </div>
            <Link
              className="nav-link collapsed"
              to="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open" />
              </div>
              Pages
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </Link>
            <div
              className="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            >
              <nav
                className="sb-sidenav-menu-nested nav accordion"
                id="sidenavAccordionPages"
              >
                <Link
                  className="nav-link collapsed"
                  to="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#pagesCollapseAuth"
                  aria-expanded="false"
                  aria-controls="pagesCollapseAuth"
                >
                  Authentication
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </Link>
                <div
                  className="collapse"
                  id="pagesCollapseAuth"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordionPages"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="login.html">
                      Login
                    </Link>
                    <Link className="nav-link" to="register.html">
                      Register
                    </Link>
                    <Link className="nav-link" to="password.html">
                      Forgot Password
                    </Link>
                  </nav>
                </div>
                <Link
                  className="nav-link collapsed"
                  to="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#pagesCollapseError"
                  aria-expanded="false"
                  aria-controls="pagesCollapseError"
                >
                  Error
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </Link>
                <div
                  className="collapse"
                  id="pagesCollapseError"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordionPages"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="401.html">
                      401 Page
                    </Link>
                    <Link className="nav-link" to="404.html">
                      404 Page
                    </Link>
                    <Link className="nav-link" to="500.html">
                      500 Page
                    </Link>
                  </nav>
                </div>
              </nav>
            </div>
            <div className="sb-sidenav-menu-heading">Addons</div>
            <Link className="nav-link" to="#">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-area" />
              </div>
              Charts
            </Link>
            <Link className="nav-link" to="#">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Tables
            </Link>
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
