import styles from "./companys.module.css";
import React, { useContext, useEffect, useState } from "react";

import Nav from "../../components/nav/Nav";
import { GrMenu } from "react-icons/gr";
import { NavContext } from "../../context/NavContext";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import img from "./imgs/BMS.jpeg";
import Loader from "../../components/LOADER/Loader";
import Swal from "sweetalert2";

export default function Companys() {
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
    }

    setLoader(true);

    fetch("https://fraktbox.com/public/api/companies", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
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
      .then((data) => {
        setData(data.data);
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value.length === 0) {
      setLoader(true);
      getData();
    } else if (value.length > 3) {
      fetch(`https:fraktbox.com/public/api/companies/search?query=${value}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Network response was not ok, status: ${response.status} some thing happend`
            );
          }
          return response.json();
        })
        .then((res) => {
          if (res.data.length < 1) {
            Swal.fire(`there is no ${value} in data base`);
          }
          setData(res.data);
        })
        .catch((error) => {
          console.error("Error:", error);
          Swal.fire("Error fetching data", error.message, "error");
        });
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const { toggleNav } = useContext(NavContext);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <section className={`${styles.section} section`}>
          <GrMenu className="menu_icon center" onClick={toggleNav} />
          <Nav />

          <div className={`${styles.all_content} `}>
            <h2>companies</h2>
            <div className={`${styles.container} center`}>
              <div className={`${styles.input_container} center`}>
                <input
                  type="text"
                  placeholder=""
                  onChange={handleInputChange}
                />
                <Link
                  to={`/add_company`}
                  className={`${styles.icon_container} center`}
                >
                  <FaPlus className={`${styles.icon} center`} />
                </Link>
              </div>
              <div className={`${styles.content} center`}>
                <div className={`${styles.boxes_contaienr} center`}>
                  {data.map((i) => {
                    return (
                      <Link
                        key={i.id}
                        to={`/company_history/${i.id}`}
                        className={`${styles.box} center`}
                      >
                        <img src={i.photo} alt="img not found" />
                        <div className={`${styles.info}`}>
                          <h3> {i.name}</h3>
                          <p>$225</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
