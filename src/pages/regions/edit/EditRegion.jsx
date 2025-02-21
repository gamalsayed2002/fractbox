import styles from "../add region/add.module.css";
import { GrMenu } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import Nav from "../../../components/nav/Nav";
import { NavContext } from "../../../context/NavContext";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../../components/LOADER/Loader";
export default function EditRegion() {
  let { id } = useParams();
  let [loader, setLoader] = useState(false);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
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
    e.preventDefault();
    setLoader(true);
    fetch(`https://fraktbox.com/public/api/regions/${id}/drivers`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, name }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "Data submitted successfully!",
          icon: "success",
        });

        setCode("");
        setName("");
        navigate("/regions");
      })
      .catch((error) => {
        setLoader(false);
        Swal.fire({
          title: "Error!",
          text: "There was an error submitting your data.",
          icon: "error",
        });
      });
  }
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
    fetch(`https://fraktbox.com/public/api/regions/${id}/drivers`, {
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
        console.log(res);
        setCode(res.code); // Assuming res has a property 'code'
        setName(res.name); // Assuming res has a property 'name'
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error:", error);
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
  const { toggleNav } = useContext(NavContext);
  if (loader) {
    return <Loader />;
  }
  return (
    <section className={`${styles.section} section`}>
      <GrMenu className="menu_icon center" onClick={toggleNav} />
      <Nav />
      <form className={`${styles.container} center`} onSubmit={handleSubmit}>
        <h1>Add New Reigon</h1>
        <div className={`${styles.input_container} center`}>
          <label htmlFor="name">Reigon Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className={`${styles.input_container} center`}>
          <label htmlFor="Number">Reigon Number</label>
          <input
            type="number"
            id="Number"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <button type="sumbit"> save</button>
          <button className="delete"> delete</button>
        </div>
      </form>
    </section>
  );
}
