import React from "react";
import styles from "./login.module.css";
import logo from "./imgs/logo4.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Login() {
  return (
    <>
      <section className={`${styles.section} center`}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={`${styles.section_container}`}
        >
          <div className={`${styles.header}`}>
            <div className={`${styles.logo}`}>
              <img src={logo} alt="logo not found" />
            </div>
            <div className={`${styles.content} coulmn`}>
              <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Welcome back{" "}
              </motion.h3>
              <motion.p
                style={{ position: "relative" }}
                initial={{ top: -100, opacity: 0 }}
                animate={{ top: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                tyle={{ position: "relative" }}
              >
                Enter your email and password to continue to continue
              </motion.p>
            </div>
          </div>

          <form className={`${styles.form} coulmn`}>
            <motion.div
              style={{ position: "relative" }}
              initial={{ bottom: -50, opacity: 0 }}
              animate={{ bottom: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`${styles.input_container} coulmn `}
            >
              <motion.label
                style={{ position: "relative" }}
                initial={{ bottom: -50, opacity: 0 }}
                animate={{ bottom: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                htmlFor="email"
              >
                Email
              </motion.label>
              <motion.input
                style={{ position: "relative" }}
                initial={{ bottom: -50, opacity: 0 }}
                animate={{ bottom: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                type="email"
                id="email"
                placeholder="example001@gmail.com"
              />
            </motion.div>

            <motion.div
              style={{ position: "relative" }}
              initial={{ bottom: -50, opacity: 0 }}
              animate={{ bottom: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`${styles.input_container} coulmn `}
            >
              <motion.label
                style={{ position: "relative" }}
                initial={{ bottom: -50, opacity: 0 }}
                animate={{ bottom: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                htmlFor="password"
              >
                Password
              </motion.label>
              <motion.input
                style={{ position: "relative" }}
                initial={{ bottom: -50, opacity: 0 }}
                animate={{ bottom: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                type="password"
                id="password"
                placeholder="Password goes here"
              />
              <Link className={`${styles.forget_password}`}>
                forget password
              </Link>
            </motion.div>
          </form>

          <div className={`${styles.last_part} coulmn center`}>
            <motion.div
              style={{ position: "relative", cursor: "pointer" }}
              initial={{ bottom: -50, opacity: 0 }}
              animate={{ bottom: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link to="/" className={`${styles.apply_for_jop}`}>
                apply for a jop
              </Link>
            </motion.div>
            <motion.button
              style={{ position: "relative" }}
              initial={{ bottom: -50, opacity: 0 }}
              animate={{ bottom: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className={`${styles.login} center`}
            >
              Login
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
