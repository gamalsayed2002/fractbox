import { Link, useNavigate } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import styles from "./home.module.css";
// nav
import { GrMenu } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../../context/NavContext";
import Loader from "./../../components/LOADER/Loader";
import Swal from "sweetalert2";
import Employees from "./../Employees/Employees";

export default function Home() {
  const { toggleNav } = useContext(NavContext);
  let [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  let [employees, setEmaployees] = useState("");
  let [orders, setOrders] = useState("");
  let [traking, setTraking] = useState("");
  let [postalCodes, setPostalCodes] = useState("");
  let [finance, setFinance] = useState("");

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

    fetch("https://fraktbox.com/public/api/dashboard/counts", {
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
        setOrders(res.packages_count.original.count);
        setEmaployees(res.active_drivers_count);
        setPostalCodes(res.postal_codes_count.original.count);
        setFinance(res.total_journey_prices);

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
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <section className={`${styles.section} section`}>
          <GrMenu className="menu_icon center" onClick={toggleNav} />
          <Nav />

          <div className={`${styles.container} center`}>
            <div className={`${styles.container} center`}>
              <Link to={`/employees`} className={`${styles.box}`}>
                <h4>Employees</h4>

                <h3>{employees}</h3>
                <div className={`${styles.more}`}>more</div>
              </Link>

              <Link to={`/notifications`} className={`${styles.box}`}>
                <h4>Notifications</h4>
                <h3>11,033</h3>
                <div className={`${styles.more}`}>more</div>
              </Link>

              <Link to={`/all_orders`} className={`${styles.box}`}>
                <h4>Orders</h4>
                <h3>{orders}</h3>
                <div className={`${styles.more}`}>more</div>
              </Link>

              <Link className={`${styles.box}`}>
                <h4>Tracking</h4>
                <h3>{traking}</h3>
                <div className={`${styles.more}`}>more</div>
              </Link>

              <Link to={`/finance`} className={`${styles.box}`}>
                <h4>Finance</h4>
                <h3>{finance} NOK</h3>
                <div className={`${styles.more}`}>more</div>
              </Link>

              <Link to={`/postal_codes`} className={`${styles.box}`}>
                <h4>Postal codes</h4>
                <h3>10,000</h3>
                <div className={`${styles.more}`}>more</div>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
