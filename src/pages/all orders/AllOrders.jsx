import styles from "./all_orders.module.css";
import { GrMenu } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../../context/NavContext";
import Nav from "../../components/nav/Nav";
import { LuBox } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../components/LOADER/Loader";
export default function AllOrders() {
  const { toggleNav } = useContext(NavContext);
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

    fetch("https://fraktbox.com/public/api/dashboard-data", {
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
        {/* <h2 className={`${styles.title}`}>Orders</h2> */}
        <div className={`${styles.content} center`}>
          <div className={`${styles.container} center`}>
            <Link to={`/orders/delivered`} className={`${styles.box} center`}>
              <div className={`${styles.icon_container} center`}>
                <LuBox className={`${styles.icon} `} />
                <h3>total orders : {data.arrived_packages}</h3>
              </div>
              <span>Delivered</span>
            </Link>

            <Link to={`/orders/pending`} className={`${styles.box} center`}>
              <div className={`${styles.icon_container} center`}>
                <LuBox className={`${styles.icon} `} />
                <h3>total orders : {data.pending_packages}</h3>
              </div>
              <span style={{ background: "yellow" }}>Pending</span>
            </Link>

            <Link
              to={`/orders/not-delivered`}
              className={`${styles.box} center`}
            >
              <div className={`${styles.icon_container} center`}>
                <LuBox className={`${styles.icon} `} />
                <h3>total orders : {data.not_delivered_packages}</h3>
              </div>
              <span className="delete">Not delivered</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
