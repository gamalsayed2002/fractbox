import Nav from "../../components/nav/Nav";
import styles from "./notifications.module.css";
import { GrMenu } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../../context/NavContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../components/LOADER/Loader";
export default function Notifications() {
  const { toggleNav } = useContext(NavContext);
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
      return;
    }

    fetch("https://fraktbox.com/public/api/notifications", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
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
      .then((res) => {
        setData(res.data);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
        setLoader(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  if (loader) {
    return <Loader />;
  }
  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />

        <div className={`${styles.content} content center`}>
          <div className={`${styles.container} center`}>
            {data.map((i) => (
              <div className={`${styles.box}`} key={i.id}>
                <h4>{i.timestamp}</h4>
                <h3>{i.title}</h3>
                <p>{i.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
