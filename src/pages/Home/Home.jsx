import { Link, useNavigate } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import styles from "./home.module.css";
// nav
import { GrMenu } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../../context/NavContext";
import Loader from "./../../components/LOADER/Loader";
import Swal from "sweetalert2";

export default function Home() {
  const { toggleNav } = useContext(NavContext);
  let [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setLoader(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "you must login first",
      });
      navigate("/");
    }
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
                <h3>5,568</h3>
                <div className={`${styles.more}`}>more</div>
              </Link>

              <Link to={`/notifications`} className={`${styles.box}`}>
                <h4>Notifications</h4>
                <h3>11,033</h3>
                <div className={`${styles.more}`}>more</div>
              </Link>

              <Link to={`/all_orders`} className={`${styles.box}`}>
                <h4>Orders</h4>
                <h3>11,033</h3>
                <div className={`${styles.more}`}>more</div>
              </Link>

              <Link className={`${styles.box}`}>
                <h4>Tracking</h4>
                <h3>553</h3>
                <div className={`${styles.more}`}>more</div>
              </Link>

              <Link to={`/finance`} className={`${styles.box}`}>
                <h4>Finance</h4>
                <h3>110,699 NOK</h3>
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
