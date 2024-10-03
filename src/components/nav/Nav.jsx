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
          <Link to={`/home`} className={`${styles.link} center`}>
            Employees
          </Link>

          <Link to={`/home`} className={`${styles.link} center`}>
            Orders
          </Link>

          <Link to={`/home`} className={`${styles.link} center`}>
            Tracking
          </Link>

          <Link to={`/home`} className={`${styles.link} center`}>
            Finance
          </Link>

          <Link to={`/home`} className={`${styles.link} center`}>
            Postal codes
          </Link>
        </ul>
      </nav>
    </header>
  );
}
