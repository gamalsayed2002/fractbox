import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import logo from "./imgs/logo4.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../components/LOADER/Loader";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    const userData = {
      email: email,
      password: password,
    };

    fetch("https://fraktbox.com/public/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((errorData) => {
            setLoader(false);

            throw new Error(errorData.msg || "An error occurred");
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
          navigate("/home");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data.msg || "No access token received",
          });
          setLoader(false);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message || "An unexpected error occurred",
        });
        setLoader(false);
      });
  };
  useEffect(() => {
    setLoader(false);
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <section className={`${styles.section} center`}>
          <div className={`${styles.section_container}`}>
            <div className={`${styles.header}`}>
              <div className={`${styles.logo}`}>
                <img src={logo} alt="logo not found" />
              </div>
              <div className={`${styles.content} coulmn`}>
                <h3>Welcome back </h3>
                <p>Enter your email and password to continue to continue</p>
              </div>
            </div>

            <form className={`${styles.form} coulmn`}>
              <div className={`${styles.input_container} coulmn `}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example001@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={`${styles.input_container} coulmn `}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password goes here"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link className={`${styles.forget_password}`}>
                  forget password
                </Link>
              </div>
            </form>

            <div className={`${styles.last_part} coulmn center`}>
              <div style={{ position: "relative", cursor: "pointer" }}>
                <Link to="/job" className={`${styles.apply_for_jop}`}>
                  apply for a jop
                </Link>
              </div>
              <button
                className={`${styles.login} center`}
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
