import { GrMenu } from "react-icons/gr";
import styles from "./history.module.css";
import Nav from "../../../components/nav/Nav";
import { NavContext } from "../../../context/NavContext";
import { useContext, useEffect, useState } from "react";
import { IoAlarm } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { FaRoad } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
export default function History() {
  const { toggleNav } = useContext(NavContext);
  let { id } = useParams();
  let [loader, setLoader] = useState(true);
  let [data, setData] = useState([]);
  let [searchValue, setSarchValue] = useState("");

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

    fetch(`https://fraktbox.com/public/api/workers/${id}/metrics`, {
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
        setData(res);
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

  const handleSearch = () => {
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

    if (!searchValue || searchValue.length !== 10) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Date",
        text: "Please enter a valid date in the format YYYY-MM-DD.",
      });
      return;
    }

    setLoader(true);
    fetch(
      `https://fraktbox.com/public/api/workers/${id}/journeys/${searchValue}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        setData(res);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        Swal.fire({
          title: "Error!",
          text: "There was an error fetching the search results.",
          icon: "error",
        });
        setLoader(false);
      });
  };

  const payment = (workerId) => {
    const token = localStorage.getItem("token");
    console.log(workerId);
    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "No Token Found",
        text: "Please log in to perform this action.",
      });
      return;
    }

    fetch(`https://fraktbox.com/public/api/workers/${id}/reset-total-prices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Worker successfully added to the region!",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />
        <main className={`${styles.main} center `}>
          <div className={`${styles.input_container} center `}>
            <input
              type="date"
              value={searchValue}
              onChange={(e) => {
                setSarchValue(e.target.value);
                console.log(e.target.value);
                handleSearch();
              }}
            />
          </div>
          <div className={`${styles.content} center`}>
            <Link className={`${styles.box}`}>
              <h3>Working Hours</h3>
              <div>
                <span>{data.total_working_hours} hours</span>{" "}
                <span>
                  <IoAlarm />
                </span>
              </div>
            </Link>

            <Link className={`${styles.box}`}>
              <h3>Number of Packeges </h3>
              <div>
                <span>{data.total_packages} Packege</span>{" "}
                <span>
                  <LuBox />
                </span>
              </div>
            </Link>

            <Link className={`${styles.box}`}>
              <h3>Distance</h3>
              <div>
                <span>{data.total_kilometers}</span>{" "}
                <span>
                  <FaRoad />
                </span>
              </div>
            </Link>

            <Link className={`${styles.box}`}>
              <h3>Average Rating</h3>
              <div>
                <span>{data.average_rating} stars</span>{" "}
                <span>
                  <FaStar />
                </span>
              </div>
            </Link>

            <Link className={`${styles.box}`}>
              <h3>finance </h3>
              <div>
                <span>{data.total_journey_prices} NOK</span>{" "}
                <span>
                  <FaMoneyBillWave />
                </span>
              </div>
            </Link>

            <button
              className={`${styles.box} delete`}
              style={{ color: "white" }}
              onClick={payment}
            >
              Payment made
            </button>
          </div>
        </main>
      </section>
    </>
  );
}
