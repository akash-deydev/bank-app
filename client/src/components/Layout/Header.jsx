import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { BiSolidUser } from "react-icons/bi";
import { MdOutlineBusiness } from "react-icons/md";
import { BiSolidPlane } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ minHeight: "10vh", boxShadow: "3px 4px 3px grey" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink
          className="navbar-brand ms-3"
          style={{ color: "#004880", fontWeight: "bold" }}
          to="/"
        >
          GRIP <div>Bank</div>
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/"
                style={{ color: "#004880" }}
              >
                <HiHome />
                <div>Home</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{ color: "#004880" }}>
                <BiSolidUser />
                <div>Personal</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{ color: "#004880" }}>
                <MdOutlineBusiness />
                <div>Business</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{ color: "#004880" }}>
                <BiSolidPlane />
                <div>NRI</div>
              </NavLink>
            </li>
          </ul>
          <div>
            <button
              className="primary-btn me-3"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button className="primary-btn me-3">Pay</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
