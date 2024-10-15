import { GrMenu } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import Nav from "../../components/nav/Nav";
import styles from "./employees.module.css";
import { useContext, useState } from "react";
import { NavContext } from "../../context/NavContext";
import { Link } from "react-router-dom";
import img from "./imgs/BMS.jpeg";
export default function Employees() {
  const { toggleNav } = useContext(NavContext);
  let [currentActive, setCurrentActive] = useState("Driver");
  let [mainData, setMainData] = useState([]);

  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />

        <div className={`${styles.container} center`}>
          <Link to={`/add`} className={`${styles.plus_icon} center`}>
            <FaPlus className={`${styles.icon} center`} />
          </Link>
          <div className={`${styles.header} center`}>
            <div className={`${styles.search_container} center`}>
              <input type="text" placeholder="search" />
            </div>
            <div className={`${styles.filter} center`}>
              <button
              // className={currentActive === "Driver" ? styles.acrive_btn : null}
              // onClick={() => {
              //   setCurrentActive("Driver");
              //   //   let data = maindata.filter((i) => {
              //   //     return i.category === "Driver";
              //   //   });
              //   //   setMainData(data);
              // }}
              >
                Driver
              </button>

              <button
              // className={currentActive === "Driver" ? styles.active_btn : null}
              // onClick={() => {
              //   setCurrentActive("Warehouse");
              //   //   let data = maindata.filter((i) => {
              //   //     return i.category === "Driver";
              //   //   });
              //   //   setMainData(data);
              // }}
              >
                Warehouse
              </button>
            </div>
          </div>
          <div className={`${styles.content} center`}>
            <div className={`${styles.box}`}>
              <div className={`${styles.head}`}>
                <img src={img} alt="img not found" />
                <h2>Gamal sayed</h2>
              </div>
              <div className={`${styles.status}`}>active</div>
              <div className={`${styles.detials}`}>
                <Link to={`/history`} className={`center`}>
                  Work history
                </Link>
                <Link to={`/inf`} className={`center`}>
                  View more
                </Link>
              </div>
            </div>

            <div className={`${styles.box}`}>
              <div className={`${styles.head}`}>
                <img src={img} alt="img not found" />
                <h2>Gamal sayed</h2>
              </div>
              <div className={`${styles.status}`}>active</div>
              <div className={`${styles.detials}`}>
                <Link className={`center`}>Work history</Link>
                <Link className={`center`}>View more</Link>
              </div>
            </div>

            <div className={`${styles.box}`}>
              <div className={`${styles.head}`}>
                <img src={img} alt="img not found" />
                <h2>Gamal sayed</h2>
              </div>
              <div className={`${styles.status}`}>active</div>
              <div className={`${styles.detials}`}>
                <Link className={`center`}>Work history</Link>
                <Link className={`center`}>View more</Link>
              </div>
            </div>

            <div className={`${styles.box}`}>
              <div className={`${styles.head}`}>
                <img src={img} alt="img not found" />
                <h2>Gamal sayed</h2>
              </div>
              <div className={`${styles.status}`}>active</div>
              <div className={`${styles.detials}`}>
                <Link className={`center`}>Work history</Link>
                <Link className={`center`}>View more</Link>
              </div>
            </div>

            <div className={`${styles.box}`}>
              <div className={`${styles.head}`}>
                <img src={img} alt="img not found" />
                <h2>Gamal sayed</h2>
              </div>
              <div className={`${styles.status}`}>active</div>
              <div className={`${styles.detials}`}>
                <Link className={`center`}>Work history</Link>
                <Link className={`center`}>View more</Link>
              </div>
            </div>

            <div className={`${styles.box}`}>
              <div className={`${styles.head}`}>
                <img src={img} alt="img not found" />
                <h2>Gamal sayed</h2>
              </div>
              <div className={`${styles.status}`}>active</div>
              <div className={`${styles.detials}`}>
                <Link className={`center`}>Work history</Link>
                <Link className={`center`}>View more</Link>
              </div>
            </div>

            <div className={`${styles.box}`}>
              <div className={`${styles.head}`}>
                <img src={img} alt="img not found" />
                <h2>Gamal sayed</h2>
              </div>
              <div className={`${styles.status}`}>active</div>
              <div className={`${styles.detials}`}>
                <Link className={`center`}>Work history</Link>
                <Link className={`center`}>View more</Link>
              </div>
            </div>

            <div className={`${styles.box}`}>
              <div className={`${styles.head}`}>
                <img src={img} alt="img not found" />
                <h2>Gamal sayed</h2>
              </div>
              <div className={`${styles.status}`}>active</div>
              <div className={`${styles.detials}`}>
                <Link className={`center`}>Work history</Link>
                <Link className={`center`}>View more</Link>
              </div>
            </div>

            <div className={`${styles.box}`}>
              <div className={`${styles.head}`}>
                <img src={img} alt="img not found" />
                <h2>Gamal sayed</h2>
              </div>
              <div className={`${styles.status}`}>active</div>
              <div className={`${styles.detials}`}>
                <Link className={`center`}>Work history</Link>
                <Link className={`center`}>View more</Link>
              </div>
            </div>

            <div className={`${styles.box}`}>
              <div className={`${styles.head}`}>
                <img src={img} alt="img not found" />
                <h2>Gamal sayed</h2>
              </div>
              <div className={`${styles.status}`}>active</div>
              <div className={`${styles.detials}`}>
                <Link className={`center`}>Work history</Link>
                <Link className={`center`}>View more</Link>
              </div>
            </div>

            <div className={`${styles.box}`}>
              <div className={`${styles.head}`}>
                <img src={img} alt="img not found" />
                <h2>Gamal sayed</h2>
              </div>
              <div className={`${styles.status}`}>active</div>
              <div className={`${styles.detials}`}>
                <Link className={`center`}>Work history</Link>
                <Link className={`center`}>View more</Link>
              </div>
            </div>

            <div className={`${styles.box}`}>
              <div className={`${styles.head}`}>
                <img src={img} alt="img not found" />
                <h2>Gamal sayed</h2>
              </div>
              <div className={`${styles.status}`}>active</div>
              <div className={`${styles.detials}`}>
                <Link className={`center`}>Work history</Link>
                <Link className={`center`}>View more</Link>
              </div>
            </div>


            
          </div>
        </div>
      </section>
    </>
  );
}
