import { FaPlus } from "react-icons/fa";

import styles from "./employees.module.css";
import { useContext, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import Loader from "../../../../components/LOADER/Loader";
export default function AddDriver({ id }) {
  console.log(id)
  let [loader, setLoader] = useState(true);
  let [data, setData] = useState([]);
  let navigate = useNavigate();
  const getData = () => {
    setLoader(true);
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

    fetch("https://fraktbox.com/public/api/workers/unassigned", {
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
        setData(res.workers);
       
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

  //

  const updateRegion = (workerId) => {
    const token = localStorage.getItem("token");
    console.log(workerId);
    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "No Token Found",
        text: "Please log in to perform this action.",
      });
      return;
    }

    fetch(`https://fraktbox.com/public/api/workers/${workerId}/update-region`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ region_id: id }), // Replace with the correct payload
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
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Worker successfully added to the region!",
        });
        console.log("Response:", res);
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value.length === 0) {
      setLoader(true);
      getData();
    } else if (value.length > 3) {
      fetch(`https://fraktbox.com/public/api/workers/search?name=${value}`, {
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
            setData("there is no data");
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
  }, []);
  if (loader) {
    return <Loader />;
  }
  return (
    <>
      <div className={`${styles.container} center`}>
        <div className={`${styles.header} center`}>
          <div className={`${styles.search_container} center`}>
            <input
              type="text"
              placeholder="search"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={`${styles.content} center`}>
          {data.length === 0 ? (
            <h1>there is no data</h1>
          ) : (
            data.map((worker) => {
              return (
                <div className={`${styles.box}`} key={worker.id}>
                  <div className={`${styles.head}`}>
                    <h2>{worker.name}</h2>
                  </div>
                  <div className={`${styles.status}`}>active</div>
                  <div className={`${styles.detials}`}>
                    <Link to={`/history/${worker.id}`} className={`center`}>
                      Work history
                    </Link>
                    <button
                      className={`center delete`}
                      style={{ borderRadius: "10px", padding: "0 5px" }}
                      onClick={() => {
                        updateRegion(worker.id);
                      }}
                    >
                      Add to region
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
