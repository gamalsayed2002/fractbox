import Nav from "../../components/nav/Nav";
import styles from "./notifications.module.css";
import { GrMenu } from "react-icons/gr";
import { useContext } from "react";
import { NavContext } from "../../context/NavContext";
export default function Notifications() {
  const { toggleNav } = useContext(NavContext);
  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />

        <div className={`${styles.content} content center`}>


          <div className={`${styles.container} center`}>
            
            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>


            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>


            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>


            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>


            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

            <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>


             <div className={`${styles.box}`}>
              <h4>yesterday,02:45pm</h4>
              <p>Ahmed Ali delivered 10 more packages than last week</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
