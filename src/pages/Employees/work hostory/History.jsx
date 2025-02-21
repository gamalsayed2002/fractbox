import { GrMenu } from "react-icons/gr";
import styles from "./history.module.css";
import Nav from "../../../components/nav/Nav";
import { NavContext } from "../../../context/NavContext";
import { useContext, useState } from "react";
import { IoAlarm } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { FaRoad } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
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
      `https://fraktbox.com/public/api/packages/search?query=${searchValue}`,
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
        console.log(res);
        setData(res); // Assuming res is the data you want to set
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
                handleSearch();
              }}
            />
          </div>
          <div className={`${styles.content} center`}>
            <div className={`${styles.box}`}>
              <h3>Working Hours</h3>
              <div>
                <span>6 hours</span>{" "}
                <span>
                  <IoAlarm />
                </span>
              </div>
            </div>

            <div className={`${styles.box}`}>
              <h3>Number of Packeges </h3>
              <div>
                <span>47 Packege</span>{" "}
                <span>
                  <LuBox />
                </span>
              </div>
            </div>

            <div className={`${styles.box}`}>
              <h3>Distance</h3>
              <div>
                <span>335Km</span>{" "}
                <span>
                  <FaRoad />
                </span>
              </div>
            </div>

            <div className={`${styles.box}`}>
              <h3>Average Rating</h3>
              <div>
                <span>3.5 stars</span>{" "}
                <span>
                  <FaStar />
                </span>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
