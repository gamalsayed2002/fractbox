import styles from "./regions.module.css";
import Nav from "../../components/nav/Nav";

// nav
import { GrMenu } from "react-icons/gr";
import { MdAutoAwesome } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../../context/NavContext";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../../components/LOADER/Loader";

export default function Regions() {
  let [LOader, setLoader] = useState(true);
  let [data, setData] = useState([]);
  let navigate = useNavigate();

  const getData = () => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "No Token Found",
        text: "Please log in to access the data.",
      });
      navigate("/");
      return;
    }

    setLoader(true);

    fetch("https://fraktbox.com/public/api/regions", {
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
  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value.length === 0) {
      getData();
    } else if (value.length > 3) {
      fetch(`https://fraktbox.com/public/api/region/search?query=${value}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Network response was not ok, status: ${response.status} some thing happend`
            );
          }
          return response.json();
        })
        .then((res) => {
          if (res.data.length < 1) {
            Swal.fire(`there is no ${value} in data base`);
          }
          console.log(res);
          setData(res.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  useEffect(() => {
    getData();
  }, []);

  let aiData = () => {
    fetch("https://fraktbox.com/public/api/packages/assign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Package assigned successfully",
          text: "The package has been assigned to the worker.",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Error assigning package",
          text: error.message,
        });
      });
  };

  const { toggleNav } = useContext(NavContext);

  if (LOader) {
    return <Loader />;
  }

  return (
    <section className={`${styles.section} section`}>
      <GrMenu className="menu_icon center" onClick={toggleNav} />
      <Nav />

      <div className={`${styles.container} center`}>
        <div className={`${styles.input_container} center`}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <Link
            to={`/add_region`}
            className={`${styles.icon_container} center`}
          >
            <FaPlus className={`${styles.icon} center`} />
          </Link>
          <div className={`${styles.icon_container} center`}>
            {" "}
            <MdAutoAwesome
              className={`${styles.icon} center`}
              style={{ cursor: "pointer" }}
              onClick={aiData}
            />
          </div>
        </div>

        <div className={`${styles.content_container} center`}>
          <div className={`${styles.content} center`}>
            {data.map((region, index) => (
              <div className={`${styles.box} center`} key={region.id}>
                <div className={`${styles.info} center`}>
                  <span>Region Name: {region.name}</span>
                  <span>Region Number: {region.code}</span>
                </div>
                <div className={`${styles.links} between`}>
                  <Link
                    to={`/edit_region/${region.id}`}
                    className={`${styles.link} center`}
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/driver_list/${region.id}`}
                    className={`${styles.link} center`}
                  >
                    Driver List
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
