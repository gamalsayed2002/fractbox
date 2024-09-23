import { useContext } from "react";
import { NavContext } from "../../context/NavContext";
import styles from "./nav.module.css";
import { AiOutlineClose } from "react-icons/ai";
export default function Nav() {
  const { toggleNav, isNavOpen } = useContext(NavContext);

  return (
    <header className={`${styles.header} ${isNavOpen ? "show" : ""}`}>
      <div className={`${styles.icon} center`} onClick={toggleNav}>
        <AiOutlineClose />
      </div>
      <nav>
        {/* <div className={`${styles.logo}`}>
          <img src={logo} alt="logo not found" />
        </div> */}
        <ul className={`coulmn`}>
          <navLink to={`/home`} className={`${styles.link} center`}>
            Notifications
          </navLink>
          <navLink to={`/home`} className={`${styles.link} center`}>
            Employees{" "}
          </navLink>

          <navLink to={`/home`} className={`${styles.link} center`}>
            Orders{" "}
          </navLink>

          <navLink to={`/home`} className={`${styles.link} center`}>
            Tracking{" "}
          </navLink>

          <navLink to={`/home`} className={`${styles.link} center`}>
            Finance{" "}
          </navLink>

          <navLink to={`/home`} className={`${styles.link} center`}>
            Postal codes
          </navLink>
        </ul>
      </nav>
    </header>
  );
}
