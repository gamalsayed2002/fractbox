import { useContext } from "react";
import { NavContext } from "../../context/NavContext";
import styles from "./nav.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Nav() {
  const { toggleNav, isNavOpen } = useContext(NavContext);

  return (
    <header className={`${styles.header} ${isNavOpen ? "show" : ""}`}>
      <div className={`${styles.icon} center`} onClick={toggleNav}>
        <AiOutlineClose />
      </div>
      <nav>
        <ul className={`coulmn`}>
          <Link to="/notifications" className={`${styles.link} center`}>
            Notifications
          </Link>
          <Link to={`/employees`} className={`${styles.link} center`}>
            Employees
          </Link>

          <Link to={`/all_orders`} className={`${styles.link} center`}>
            Orders
          </Link>

          <Link to={`/tracking`} className={`${styles.link} center`}>
            Tracking
          </Link>

          <Link to={`/finance`} className={`${styles.link} center`}>
            Finance
          </Link>

          <Link to={`/postal_codes`} className={`${styles.link} center`}>
            Postal codes
          </Link>

          <Link to={`/regions`} className={`${styles.link} center`}>
            regions
          </Link>
          
          <Link to={`/stores`} className={`${styles.link} center`}>
            Stores
          </Link>
        </ul>
      </nav>
    </header>
  );
}
