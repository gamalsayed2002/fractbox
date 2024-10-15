import styles from "./all_orders.module.css";
import { GrMenu } from "react-icons/gr";
import { useContext } from "react";
import { NavContext } from "../../context/NavContext";
import Nav from "../../components/nav/Nav";
import { LuBox } from "react-icons/lu";
import { Link } from "react-router-dom";
export default function AllOrders() {
  const { toggleNav } = useContext(NavContext);
  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />
        {/* <h2 className={`${styles.title}`}>Orders</h2> */}
        <div className={`${styles.content} center`}>
          <div className={`${styles.container} center`}>
            <Link to={`/orders`} className={`${styles.box} center`}>
              <div className={`${styles.icon_container} center`}>
                <LuBox className={`${styles.icon} `} />
                <h3>total orders : 34577</h3>
              </div>
              <span>Delivered</span>
            </Link>

            <Link to={`/orders`} className={`${styles.box} center`}>
              <div className={`${styles.icon_container} center`}>
                <LuBox className={`${styles.icon} `} />
                <h3>total orders : 34577</h3>
              </div>
              <span>Delivered</span>
            </Link>

            <Link to={`/orders`} className={`${styles.box} center`}>
              <div className={`${styles.icon_container} center`}>
                <LuBox className={`${styles.icon} `} />
                <h3>total orders : 34577</h3>
              </div>
              <span>Delivered</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
