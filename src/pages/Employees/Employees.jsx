import { GrMenu } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import Nav from "../../components/nav/Nav";
import styles from "./employees.module.css";
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../../context/NavContext";
import { Link, useNavigate } from "react-router-dom";
import img from "./imgs/BMS.jpeg";
import Loader from "../../components/LOADER/Loader";
import Swal from "sweetalert2";
export default function Employees() {
  const { toggleNav } = useContext(NavContext);
  let [loader, setLoader] = useState(true);
  let [currentActive, setCurrentActive] = useState("Driver");
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

    fetch("https://fraktbox.com/public/api/workers", {
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
        console.log(data);
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

  //

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value.length === 0) {
      setLoader(true);
      getData();
    } else if (value.length > 3) {
      fetch(`https://fraktbox.com/public/api/workers/search?name=${value}`, {
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
            setData("there is no data");
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
  if (loader) {
    return <Loader />;
  }
  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />

        <div className={`${styles.container} center`}>
          <Link to={`/add`} className={`${styles.plus_icon} center`}>
            <FaPlus className={`${styles.icon} center`} />
          </Link>
          <div className={`${styles.header} center`}>
            <div className={`${styles.search_container} center`}>
              <input
                type="text"
                placeholder="search"
                onChange={handleInputChange}
              />
            </div>
            <div className={`${styles.filter} center`}>
              <button
              // className={currentActive === "Driver" ? styles.acrive_btn : null}
              // onClick={() => {
              //   setCurrentActive("Driver");
              //   //   let data = maindata.filter((i) => {
              //   //     return i.category === "Driver";
              //   //   });
              //   //   setMainData(data);
              // }}
              >
                Driver
              </button>

              <button
              // className={currentActive === "Driver" ? styles.active_btn : null}
              // onClick={() => {
              //   setCurrentActive("Warehouse");
              //   //   let data = maindata.filter((i) => {
              //   //     return i.category === "Driver";
              //   //   });
              //   //   setMainData(data);
              // }}
              >
                Warehouse
              </button>
            </div>
          </div>
          <div className={`${styles.content} center`}>
            {data.lenth === 0 ? (
              <h1>there is no data</h1>
            ) : (
              data.map((worker) => {
                return (
                  <div className={`${styles.box}`} key={worker.id}>
                    <div className={`${styles.head}`}>
                      <img src={img} alt="img not found" />
                      <h2>{worker.name}</h2>
                    </div>
                    <div className={`${styles.status}`}>active</div>
                    <div className={`${styles.detials}`}>
                      <Link to={`/history/${worker.id}`} className={`center`}>
                        Work history
                      </Link>
                      <Link to={`/inf/${worker.id}`} className={`center`}>
                        View more
                      </Link>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}
