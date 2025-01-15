import styles from "./codes.module.css";
import Nav from "../../components/nav/Nav";
import { GrMenu } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../../context/NavContext";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../../components/LOADER/Loader";
export default function Codes() {
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
    }

    fetch("fraktbox.com/public/api/postalcodes", {
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
        setLoader(false);
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <section className={`${styles.section} section`}>
          <GrMenu className="menu_icon center" onClick={toggleNav} />
          <Nav />
          <div className={`${styles.all_content}`}>
            <h3>Postal codes</h3>
            <div className={`${styles.container} center`}>
              <div className={`${styles.input_container} center`}>
                <input type="text" placeholder="" />
                <Link
                  to={`/add_postal_code`}
                  className={`${styles.icon_container} center`}
                >
                  <FaPlus className={`${styles.icon} center`} />
                </Link>
              </div>
              <div className={`${styles.content} center`}>
                <div className={`${styles.boxes_contaienr} center`}>
                  {data.map((i) => {
                    return (
                      <Link key={i.id} className={`${styles.box} center`}>
                        <span>{i.area}</span>
                        <span>{i.code}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
