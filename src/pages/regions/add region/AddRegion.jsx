import styles from "./add.module.css";
import { GrMenu } from "react-icons/gr";
import { useContext, useState } from "react";
import Nav from "../../../components/nav/Nav";
import { NavContext } from "../../../context/NavContext";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../../../components/LOADER/Loader";
export default function AddRegion() {
  let [loader, setLoader] = useState(false);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    fetch("https://fraktbox.com/public/api/region/add", {
      method: "POST",
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
  };

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

        <button type="sumbit"> save</button>
      </form>
    </section>
  );
}
