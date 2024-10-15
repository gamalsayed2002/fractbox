import { GrMenu } from "react-icons/gr";
import styles from "./history.module.css";
import Nav from "../../../components/nav/Nav";
import { NavContext } from "../../../context/NavContext";
import { useContext } from "react";
import { IoAlarm } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { FaRoad } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
export default function History() {
  const { toggleNav } = useContext(NavContext);
  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />
        <main className={`${styles.main} center `}>
          <div className={`${styles.input_container} center `}>
            <input type="date" />
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
