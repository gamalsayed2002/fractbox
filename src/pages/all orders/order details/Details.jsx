import React, { useEffect } from "react";
import Nav from "../../../components/nav/Nav";
import styles from "./details.module.css";
import { useContext, useState } from "react";
import { NavContext } from "../../../context/NavContext";
import { GrMenu } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../../components/LOADER/Loader";
export default function Details() {
  const { toggleNav } = useContext(NavContext);
  const { id } = useParams();
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [phone_number, setPhoneNumber] = useState("");
  let [email, setEmail] = useState("");
  let [code, setCode] = useState("");
  let [elements, setElement] = useState("");
  let [method, setMethod] = useState("");
  let [photo, setPhoto] = useState("");

  let [loader, setLoader] = useState(true);
  let [data, setData] = useState([]);
  let navigate = useNavigate();

  const getData = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "No Token Found",
        text: "Please log in to access the data.",
      });
      navigate("/");
      return;
    }
    fetch(`https://fraktbox.com/public/api/package/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok, status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((res) => {
        setAddress(res.data.address);
        setCode(res.data.code);
        setElement(res.data.elements);
        setEmail(res.data.email);
        setMethod(res.data.method);
        setName(res.data.name);
        setPhoneNumber(res.data.phone_number);
        setPhoto(res.data.photo);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
        setLoader(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  if (loader) {
    return <Loader />;
  }

  let save = () => {};

  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />
        <div className={`${styles.content} center`}>
          <form className="center">
            <div className={`${styles.input_container}`}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={name}
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className={`${styles.input_container}`}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                value={address}
                id="address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>

            <div className={`${styles.input_container}`}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                value={phone_number}
                id="phone"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>
            <div className={`${styles.input_container}`}>
              <label htmlFor="phone">Method</label>
              <input
                type="text"
                value={method}
                id="phone"
                onChange={(e) => {
                  setMethod(e.target.value);
                }}
              />
            </div>
            <div className={`${styles.input_container}`}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className={`${styles.input_container}`}>
              <label htmlFor="inside">what's inside</label>
              <input
                type="text"
                value={elements}
                id="inside"
                onChange={(e) => {
                  setElement(e.target.value);
                }}
              />
            </div>

            <div className={`${styles.input_container}`}>
              <label htmlFor="code">Code</label>
              <input
                type="text"
                value={code}
                id="code"
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </div>
          </form>
          <div className={styles.btns}>
            <button
              onClick={() => {
                navigate("/all_orders");
              }}
            >
              cancel
            </button>
            <button className="delete" onClick={save}>
              save
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
