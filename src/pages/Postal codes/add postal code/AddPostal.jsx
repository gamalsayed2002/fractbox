import styles from "./add.module.css";
import Nav from "../../../components/nav/Nav";
import { GrMenu } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../../../context/NavContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../../components/LOADER/Loader";
export default function AddPostal() {
  let [code, setCode] = useState("");
  let [area, setArea] = useState("");

  let [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setLoader(true);
  //   const userData = {
  //     code: code,
  //     area: area,
  //   };

  //   fetch("fraktbox.com/public/api/postalcode/add", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userData),
  //   })
  //     .then((res) => {
  //       // if (!res.ok) {
  //       //   setLoader(false);
  //       //   console.log(res.status);
  //       //   throw new Error(res.msg);
  //       // }
  //       return res.json();
  //     })
  //     .then((res) => {
  //       if (res.data) {
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: "Your work has been saved",
  //           showConfirmButton: false,
  //           timer: 2000,
  //         });
  //         setLoader(false);
  //       } else {
  //         Swal.fire({
  //           icon: "error",
  //           title: "Oops...",
  //           text: res.msg,
  //         });
  //         setLoader(false);
  //       }
  //     })
  //     .catch((error) => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: error.message,
  //       });
  //       setLoader(false);
  //     });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    const token = localStorage.getItem("token");

    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "No Token Found",
        text: "Please log in to access the data.",
      });
      navigate("/");
    }

    const userData = {
      code: code,
      area: area,
    };

    fetch("https://fraktbox.com/public/api/postalcode/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok, status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        if (res.msg === "success") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/postal_codes")
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: res.msg || "Something went wrong on the server.",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message || "An unexpected error occurred.",
        });
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    setLoader(false);
  }, []);

  const { toggleNav } = useContext(NavContext);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <section className={`${styles.section} section`}>
          <GrMenu className="menu_icon center" onClick={toggleNav} />
          <Nav />
          <div className={`${styles.content} center`}>
            <form action="" className="center">
              <div className={`${styles.input_container}`}>
                <label htmlFor="name">Area name</label>
                <input
                  type="text"
                  id="name"
                  value={area}
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="postal">Postal code </label>
                <input
                  type="text"
                  id="postal"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
              </div>
              <div className={`${styles.btns} center`}>
                <button
                  className={`${styles.btn} center`}
                  onClick={handleSubmit}
                >
                  save
                </button>
                <Link to={`/postal_codes`} className={`${styles.btn} center`}>
                  cancel
                </Link>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
