import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { userActions } from "../features/user/actions";
import { Link } from "react-router-dom";
import "./login.css";
import Logo from "../logo.png";

const Login = ({ ping, setPing }) => {
  const [show, setShow] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setuser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleRegister = () => {
    dispatch(userActions.register(user));
    setTimeout(function () {
      history.push("/profil");
    }, 500);

    setPing(!ping);
  };
  const handleLogin = () => {
    dispatch(userActions.login(user));
    setPing(!ping);
    setTimeout(function () {
      history.push("/profil");
    }, 500);
  };
  return (
    <div className="login-screen">
      {show ? (
        <div className="login-container">
          <div className="login-header">
            {/* <h1 className="logo"><img style={{width:"200px",position:"absolute"}} src={Logo} alt="logo" /></h1> */}
          </div>
          <div className="login-form">
            <h2>Sign In</h2>
            <div className="formy">
              <input
                type="text"
                placeholder="email"
                onChange={(e) => setuser({ ...user, email: e.target.value })}
              />
              <label className="email-label" htmlFor="email">
                email
              </label>
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setuser({ ...user, password: e.target.value })}
              />
              <label className="pwd-label" htmlFor="password">
                {" "}
                password
              </label>
            </div>
            <div className="socila-media-img">
              <button>
                <i class="fab fa-facebook"></i>
              </button>
              <button>
                <i class="fab fa-google"></i>
              </button>
            </div>
            <Link to="/profil">
              {" "}
              <button onClick={handleLogin} className="sign-in-btn">
                <i class="fas fa-arrow-right"></i>
              </button>{" "}
            </Link>
            <div className="form-switch">
              <span>CAN'T SIGN IN?</span>
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setShow(!show)}
              >
                CREATE ACCOUNT
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="login-container">
          <div className="login-header">
            <h1 className="logo">
              <img
                style={{ width: "200px", position: "absolute" }}
                src={Logo}
                alt="logo"
              />
            </h1>
          </div>
          <div className="login-form">
            <h3>Sign Up</h3>
            <div className="formy">
              <div className="Name">
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setuser({ ...user, name: e.target.value })}
                />
                <label className="name-label" htmlFor="email">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) =>
                    setuser({ ...user, lastName: e.target.value })
                  }
                />
                <label className="lastName-label" htmlFor="email">
                  Last Name
                </label>
              </div>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setuser({ ...user, email: e.target.value })}
              />
              <label className="emaill-label" htmlFor="email">
                Email
              </label>
              <input type="text" placeholder="Phone" />
              <label className="phone-label" htmlFor="email">
                Phone
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setuser({ ...user, password: e.target.value })}
              />
              <label className="pass-label" htmlFor="password">
                {" "}
                Password
              </label>
            </div>
            <div className="socila-media-img">
              <button>
                <i class="fab fa-facebook"></i>
              </button>
              <button>
                <i class="fab fa-google"></i>
              </button>
            </div>

            <button className="sign-up-btn" onClick={handleRegister}>
              <i class="fas fa-arrow-right"></i>
            </button>
            <div className="forme-switch">
              <span> ALREADY HAVE ACCOUNT ? </span>
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setShow(!show)}
              >
                Sign in
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
