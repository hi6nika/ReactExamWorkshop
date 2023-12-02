import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../contexts/authContext";

function Navigation() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="top-area">
      <div className="header-area">
        <nav
          className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
          data-minus-value-desktop={70}
          data-minus-value-mobile={55}
          data-speed={1000}
        >
          <div className="container">
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars" />
              </button>

              <Link to="/">
                <a className="navbar-brand">
                  carvilla
                  <span />
                </a>
              </Link>
            </div>
            {/*/.navbar-header*/}
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse menu-ui-design"
              id="navbar-menu"
            >
              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="scroll">
                  <Link to="/">
                    <a>home </a>
                  </Link>
                </li>

                <li className="scroll">
                  <Link to="/featured">
                    <a>featured cars</a>
                  </Link>
                </li>

                {isAuthenticated && (
                  <>
                    <li className="scroll">
                      <Link to="/addCar">
                        <a>add car</a>
                      </Link>
                    </li>

                    <li className="scroll">
                      <Link>
                        <a href="#new-cars">my cars</a>
                      </Link>
                    </li>
                  </>
                )}

                {!isAuthenticated && (
                  <>
                    <li className="scroll">
                      <Link to="/register">
                        <a>register</a>
                      </Link>
                    </li>

                    <li className="scroll">
                      <Link to="/login">
                        <a>Login</a>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
              {/*/.nav */}
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/*/.container*/}
        </nav>
      </div>
      {/*/.header-area*/}
      <div className="clearfix" />
    </div>
  );
}

export default Navigation;
