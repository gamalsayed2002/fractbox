import { useContext, useState } from "react";
import styles from "./company.module.css";
import { GrMenu } from "react-icons/gr";
import Nav from "../../../components/nav/Nav";
import { NavContext } from "../../../context/NavContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import img from "../imgs/BMS.jpeg";
import Swal from "sweetalert2";
export default function Company_History() {
  let { id } = useParams();

  let [loader, setLoader] = useState(true);
  let [data, setData] = useState([]);

  let navigate = useNavigate();
  const getData = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "No Token Found",
        text: "Please log in to access the data.",
      });
      navigate("/");
    }

    setLoader(true);

    fetch("https://fraktbox.com/public/api/companies", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok, status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setData(data.data);
        console.log(data);
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const { toggleNav } = useContext(NavContext);
  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />
        <div className={`${styles.all_content}`}>
          <header className={`${styles.header} `}>
            <img src={img} alt="" />
            <div className={`${styles.info}`}>
              <h2>Glasses</h2>
              <h4>110$</h4>
            </div>
          </header>
          <div className={`${styles.container} center`}>
            <div className={`${styles.input_container} center`}>
              <input type="date" placeholder="search" />
            </div>
            <div className={`${styles.content} center`}>
              <div className={`${styles.boxes_container} center`}>
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>{" "}
                <Link className={`${styles.box}`}>
                  <h3>july 4th,2024</h3>
                  <p>224 packeges</p>
                  <p>total cost 10 $</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
