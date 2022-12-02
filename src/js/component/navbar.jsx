import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold rounded p-1 bg-warning" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler bg-warning"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon border border-warning rounded"></span>
        </button>
        <div className="collapse navbar-collapse text-warning " id="navbarSupportedContent">
          <ul className="navbar-nav text-warning me-auto mb-2 mb-lg-0">
            <li className="nav-item text-warning">
              <a className="nav-link active text-warning" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-warning" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-warning"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu bg-warning">
                <li>
                  <a className="dropdown-item fw-bold" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item fw-bold" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider fw-bold" />
                </li>
                <li>
                  <a className="dropdown-item fw-bold" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
           
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Encuentra tu auto aquí"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
