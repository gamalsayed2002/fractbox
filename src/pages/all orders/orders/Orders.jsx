import styles from "./orders.module.css";
import { GrMenu } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../../../context/NavContext";
import Nav from "../../../components/nav/Nav";
import { LuBox } from "react-icons/lu";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../../components/LOADER/Loader";

export default function Orders() {
  const { toggleNav } = useContext(NavContext);
  // const getData = () => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     Swal.fire({
  //       icon: "warning",
  //       title: "No Token Found",
  //       text: "Please log in to access the data.",
  //     });
  //     navigate("/");
  //     return;
  //   }

  //   fetch(`https://fraktbox.com/public/api/packages/${key}`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(
  //           `Network response was not ok, status: ${response.status}`
  //         );
  //       }
  //       return response.json();
  //     })
  //     .then((res) => {
  //       setData(res);
  //       console.log(data);
  //       setLoader(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       Swal.fire({
  //         icon: "error",
  //         title: "Error",
  //         text: error.message,
  //       });
  //       setLoader(false);
  //     });
  // };
  // let getLink = () => {
  //   key.toString();
  //   if (key === "pending") {
  //     setLink("https://fraktbox.com/public/api/packages/pending");
  //     console.log(link);
  //     console.log(key);
  //     getData();
  //   } else if (key === "delivered") {
  //     setLink("https://fraktbox.com/public/api/packages/delivered");
  //     console.log(link);
  //     console.log(key);
  //     getData();
  //   } else if (key === "notDelivered") {
  //     setLink("https://fraktbox.com/public/api/packages/not-delivered");
  //     console.log(link);
  //     console.log(key);
  //     getData();
  //   } else {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Error",
  //       text: "wrong path",
  //     });
  //     navigate("/");
  //   }
  // };

  // search functin
  const { key } = useParams();
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

    fetch(`http://fraktbox.com/public/api/packages/${key}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok, status: ${response.status}}`
          );
        }
        return response.json();
      })
      .then((res) => {
        setData(res);
        console.log(data);
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
  // let

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value.length === 0) {
      setLoader(true);
      getData();
    } else if (value.length > 3) {
      fetch(`https:fraktbox.com/public/api/packages/search?query=${value}`, {
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
          setData(res.data);
        })
        .catch((error) => {
          console.error("Error:", error);
          Swal.fire("Error fetching data", error.message, "error");
        });
    }
  };

  useEffect(() => {
    getData();
  }, [key]);
  if (loader) {
    return <Loader />;
  }
  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />
        {/* <h2 className={`${styles.title}`}>Orders</h2> */}
        <div className={`${styles.content} center`}>
          <div className={`${styles.input_container} center`}>
            <input
              type="text"
              placeholder="Enter order number or phone number"
              onChange={handleInputChange}
            />
          </div>

          <div className={`${styles.content_container} center`}>
            {data.map((i) => {
              return (
                <Link
                  to={`/order_details/${i.id}`}
                  className={`${styles.box} center`}
                >
                  <span>
                    <LuBox />
                  </span>
                  <h3>order number : 2001215</h3>
                </Link>
              );
            })}

            <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>
            <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>  <Link
              to={`/order_details/`}
              className={`${styles.box} center`}
            >
              <span>
                <LuBox />
              </span>
              <h3>order number : 2001215</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
