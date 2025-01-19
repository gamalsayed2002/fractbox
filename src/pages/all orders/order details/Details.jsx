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

    fetch(`http://fraktbox.com/public/api/package/${id}`, {
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
        setData(res.data);
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
  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />
        <div className={`${styles.content} center`}>
          <form className="center">
            <div className={`${styles.input_container}`}>
              <label htmlFor="name">Name</label>
              <input type="text" value={`gamal sayed`} id="name" />
            </div>

            <div className={`${styles.input_container}`}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                value={`223 california , new york`}
                id="address"
              />
            </div>

            <div className={`${styles.input_container}`}>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" value={`01129340477`} id="address" />
            </div>

            <div className={`${styles.input_container}`}>
              <label htmlFor="email">Email</label>
              <input type="email" value={`gamal sayed`} id="email" />
            </div>

            <div className={`${styles.input_container}`}>
              <label htmlFor="inside">what's inside</label>
              <input type="text" value={`a half moon clucher`} id="inside" />
            </div>

            <div className={`${styles.input_container}`}>
              <label htmlFor="code">Code</label>
              <input type="text" value={`no.552`} id="code" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
