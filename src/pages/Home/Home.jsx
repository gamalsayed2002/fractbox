import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import styles from "./home.module.css";
// nav
import { GrMenu } from "react-icons/gr";
import { useContext } from "react";
import { NavContext } from "../../context/NavContext";

export default function Home() {
  const { toggleNav, isNavOpen } = useContext(NavContext);
  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />

        <div className={`${styles.container} center`}>
          <div className={`${styles.container} center`}>
            <Link className={`${styles.box}`}>
              <h4>Employees</h4>
              <h3>5,568</h3>
              <div className={`${styles.more}`}>more</div>
            </Link>

            <Link className={`${styles.box}`}>
              <h4>Employees</h4>
              <h3>5,568</h3>
              <div className={`${styles.more}`}>more</div>
            </Link>

            <Link className={`${styles.box}`}>
              <h4>Orders</h4>
              <h3>11,033</h3>
              <div className={`${styles.more}`}>more</div>
            </Link>

            <Link className={`${styles.box}`}>
              <h4>Tracking</h4>
              <h3>553</h3>
              <div className={`${styles.more}`}>more</div>
            </Link>

            <Link className={`${styles.box}`}>
              <h4>Finance</h4>
              <h3>110,699 NOK</h3>
              <div className={`${styles.more}`}>more</div>
            </Link>

            <Link className={`${styles.box}`}>
              <h4>Postal codes</h4>
              <h3>10,000</h3>
              <div className={`${styles.more}`}>more</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
