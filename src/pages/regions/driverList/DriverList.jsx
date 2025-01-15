import styles from "../regions.module.css";

// nav
import { GrMenu } from "react-icons/gr";
import { useContext } from "react";
import Nav from "../../../components/nav/Nav";
import { NavContext } from "../../../context/NavContext";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function DriverList() {
  const { toggleNav } = useContext(NavContext);
  return (
    <section className={`${styles.section} section`}>
      <GrMenu className="menu_icon center" onClick={toggleNav} />
      <Nav />

      <div className={`${styles.container} center`}>
        <div className={`${styles.input_container} center`}>
          <input type="text" placeholder="" />
          <Link
            to={`/add_company`}
            className={`${styles.icon_container} center`}
          >
            <FaPlus className={`${styles.icon} center`} />
          </Link>
        </div>

        <div className={`${styles.content_container} center`}>
          <div className={`${styles.content} center`}>
            <div className={`${styles.box} center`}>
              <div className={`${styles.info} center`}>
                <span>Driver Name : ...</span>

                <span>total packeges : ...</span>
              </div>
              <div className={`${styles.links} between`}>
                <Link className={`${styles.link} center`}>Details</Link>
                <Link to={`/driver_list`} className={`${styles.link} center`} >
               Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
