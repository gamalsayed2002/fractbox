import React, { useEffect } from "react";
import Nav from "../../../components/nav/Nav";
import styles from "./details.module.css";
import { useContext, useState } from "react";
import { NavContext } from "../../../context/NavContext";
import { GrMenu } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../../components/LOADER/Loader";
import Companys from "./../../finance/Companys";
export default function Details() {
  const { toggleNav } = useContext(NavContext);
  const { id } = useParams();
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [phone_number, setPhoneNumber] = useState("");
  let [email, setEmail] = useState("");
  let [code, setCode] = useState("");
  let [elements, setElement] = useState("");
  let [method, setMethod] = useState("");
  let [photo, setPhoto] = useState("");
  let [workerId, setWorkerId] = useState("");
  let [password, setPassword] = useState("");
  let [companyes, setCompanyes] = useState([]);
  let [company, setCompany] = useState("");
  let [workers, setWorkers] = useState([]);
  let [worker, setWorker] = useState("");
  let [status, setStatus] = useState("");

  let [loader, setLoader] = useState(true);
  let navigate = useNavigate();
  const getCompanies = () => {
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
        setCompanyes(data.data);

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
  const getWorkers = () => {
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

    fetch("https://fraktbox.com/public/api/workers", {
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
        setWorkers(data.data);

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
  const getData = () => {
    if (id > 0) {
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
      fetch(`https://fraktbox.com/public/api/package/${id}`, {
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
          console.log(res.data);
          setAddress(res.data.address);
          setCode(res.data.code);
          setElement(res.data.elements);
          setEmail(res.data.email);
          setMethod(res.data.method);
          setName(res.data.name);
          setPhoneNumber(res.data.phone_number);
          setPhoto(res.data.photo);
          setWorkerId(res.data.worker_id);
          setPassword(res.data.password);
          setCompany(res.data.company_id);
          setLoader(false);
          console.log(company);
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
    } else {
      getCompanies();
      getWorkers();
    }
  };

  useEffect(() => {
    getData();
  }, []);
  if (loader) {
    return <Loader />;
  }

  let save = () => {
    if (id > 0) {
      setLoader(true);
      const token = localStorage.getItem("token");

      fetch(`https://fraktbox.com/public/api/package/update/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          address,
          phone_number,
          email,
          code,
          elements,
          password,
          method,
          company_id: company,
          worker_id: workerId,
          damage: "",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setLoader(false);
          Swal.fire({
            title: "Success!",
            text: "Data sent successfully!",
            icon: "success",
          });
        })
        .catch((error) => {
          setLoader(false);
          console.log(error);
          Swal.fire({
            title: "Error!",
            text: "Failed to send data.",
            icon: "error",
          });
        });
    } else {
      setLoader(true);
      const token = localStorage.getItem("token");

      if (!token) {
        Swal.fire({
          icon: "error",
          title: "Unauthorized",
          text: "Please log in to continue",
        });
        return;
      }

      const data = {
        name,
        address,
        phone_number,
        email,
        code,
        elements,
        password: "123456789",
        method,
        company_id: company,
        worker_id: worker,
        status,
        damage: "",
      };
      console.log(data);

      fetch("https://fraktbox.com/public/api/package/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.msg === "Package added successfully") {
            setLoader(false);
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Package added successfully",
            });
          } else {
            setLoader(false);
            console.log(result);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Something went wrong",
            });
          }
        })
        .catch((error) => {
          setLoader(false);
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to add package",
          });
        });
    }
  };

  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />
        <div className={`${styles.content} center`}>
          <form className="center">
            <div className={`${styles.input_container}`}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={name}
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className={`${styles.input_container}`}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                value={address}
                id="address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>

            <div className={`${styles.input_container}`}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                value={phone_number}
                id="phone"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>
            <div className={`${styles.input_container}`}>
              <label htmlFor="phone">Method</label>
              <input
                type="text"
                value={method}
                id="phone"
                onChange={(e) => {
                  setMethod(e.target.value);
                }}
              />
            </div>
            <div className={`${styles.input_container}`}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className={`${styles.input_container}`}>
              <label htmlFor="inside">what's inside</label>
              <input
                type="text"
                value={elements}
                id="inside"
                onChange={(e) => {
                  setElement(e.target.value);
                }}
              />
            </div>

            <div className={`${styles.input_container}`}>
              <label htmlFor="code">Code</label>
              <input
                type="text"
                value={code}
                id="code"
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </div>

            {id === "0" ? (
              <>
                {" "}
                <div className={`${styles.input_container}`}>
                  <label htmlFor="worker">Select worker</label>
                  <select
                    id="worker"
                    value={worker}
                    onChange={(e) => {
                      setWorker(e.target.value);
                    }}
                  >
                    {workers.map((worker) => {
                      return (
                        <option key={worker.id} value={worker.id}>
                          {worker.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className={`${styles.input_container}`}>
                  <label htmlFor="status">status</label>
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                      console.log(status);
                    }}
                  >
                    <option>pending</option>
                    <option>not delivered</option>
                    <option>delivered</option>
                  </select>
                </div>
                <div className={`${styles.input_container}`}>
                  <label htmlFor="company">Select company</label>
                  <select
                    id="company"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                  >
                    {companyes.map((company) => {
                      return (
                        <option key={company.id} value={company.id}>
                          {company.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </>
            ) : (
              ""
            )}
          </form>
          <div className={styles.btns}>
            <button
              onClick={() => {
                navigate("/all_orders");
              }}
            >
              cancel
            </button>
            <button className="delete" onClick={save}>
              save
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
