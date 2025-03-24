import styles from "../regions.module.css";

// nav
import { GrMenu } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import Nav from "../../../components/nav/Nav";
import { NavContext } from "../../../context/NavContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../../../components/LOADER/Loader";
import AddDriver from "./add driver/AddDriver";

export default function DriverList() {
  let navigate = useNavigate();
  let { id } = useParams();
  let [loader, setLoader] = useState(true);
  let [data, setData] = useState([]);
  let [select, setSelect] = useState(false);

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

    setLoader(true);
    fetch(` https://fraktbox.com/public/api/regions/${id}/drivers`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        setData(res.data);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        Swal.fire({
          title: "Error!",
          text: "There was an error fetching your data.",
          icon: "error",
        });
        setLoader(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handelDelete = (driverId) => {
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

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fraktbox.com/public/api/clear-region-for-role`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((res) => {
            Swal.fire("Deleted!", "The driver has been deleted.", "success");
            setTimeout(() => {
              window.location.reload();
            }, 2500);
          })
          .catch((error) => {
            console.error("Error:", error.message);
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting the driver.",
              icon: "error",
            });
          });
      }
    });
  };

  const { toggleNav } = useContext(NavContext);
  if (loader) {
    return <Loader />;
  }
  return (
    <section className={`${styles.section} section`}>
      <GrMenu className="menu_icon center" onClick={toggleNav} />
      <Nav />
      {select ? (
        <AddDriver id={id} />
      ) : (
        <div className={`${styles.container} center`}>
          <div className={`${styles.input_container} center`}>
            <input type="text" placeholder="" />
            <button
              onClick={() => {
                setSelect(true);
              }}
              className={`${styles.icon_container} center`}
            >
              <FaPlus className={`${styles.icon} center`} />
            </button>
          </div>

          <div className={`${styles.content_container} center`}>
            <div className={`${styles.content} center`}>
              {data.map((item) => {
                return (
                  <div className={`${styles.box} center`} key={item.id}>
                    <div className={`${styles.info} center`}>
                      <span>Driver Name :{item.name}</span>

                      <span>total packeges : {item.total_packages}</span>
                    </div>
                    <div className={`${styles.links} between`}>
                      <Link
                        to={`/history/${item.id}`}
                        className={`${styles.link} center`}
                      >
                        Details
                      </Link>
                      <button
                        className={`${styles.link} center delete`}
                        onClick={() => {
                          handelDelete(item.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
