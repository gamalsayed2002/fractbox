import { GrMenu } from "react-icons/gr";
import Nav from "../../../components/nav/Nav";
import styles from "./add.module.css";
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../../../context/NavContext";
import { RiFileUploadFill } from "react-icons/ri";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/LOADER/Loader";

export default function Add_company() {
  let [loader, setLoader] = useState(true);

  let Navigate = useNavigate();
  let [logo, setLogo] = useState(null);
  let [contract, setContract] = useState(null);
  let [name, setName] = useState("");
  let [license, setLicense] = useState("");
  let [number, setNumber] = useState("");
  let [email, setEmail] = useState("");
  let [price, setPrice] = useState("");
  let [address, setAddress] = useState("");
  let [weight, setWaight] = useState("");

  useEffect(() => {
    setLoader(false);
  }, []);

  let submit = (e) => {
    e.preventDefault();
    setLoader(true);
    const formData = new FormData();
    formData.append("photo", logo);
    formData.append("contract", contract);
    formData.append("name", name);
    formData.append("license", license);
    formData.append("phone", number);
    formData.append("email", email);
    formData.append("price", price);
    formData.append("address", address);
    formData.append("weight", weight);
    const token = localStorage.getItem("token");
    fetch("https://fraktbox.com/public/api/company/add", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        Navigate("/companies");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong! ${error}`,
        });
        setLoader(false);
      });
  };

  const { toggleNav } = useContext(NavContext);
  if (loader) {
    return <Loader />;
  }
  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />
        <div className={`${styles.all_content}`}>
          <h2 className={`${styles.title}`}>Add new company</h2>
          <div className={`${styles.container} center`}>
            <form encType="multipart/form-data" onSubmit={submit}>
              <div className={`${styles.input_container}`}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder=""
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="license">Company license number</label>
                <input
                  type="number"
                  placeholder=""
                  id="license"
                  value={license}
                  onChange={(e) => {
                    setLicense(e.target.value);
                  }}
                />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  placeholder=""
                  id="address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="number">Number</label>
                <input
                  type="number"
                  placeholder=""
                  id="number"
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder=""
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="price">Package price</label>
                <input
                  type="number"
                  placeholder=""
                  id="price"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="weight">weight</label>
                <input
                  type="number"
                  placeholder=""
                  id="weight"
                  value={weight}
                  onChange={(e) => {
                    setWaight(e.target.value);
                  }}
                />
              </div>

              <div
                className={`${styles.input_container} ${styles.logo} ${styles.file}`}
              >
                <label htmlFor="img" className={`center`}>
                  <h3> Company logo</h3>
                  {logo ? (
                    <img
                      src={logo}
                      alt="Uploaded"
                      style={{
                        width: "50px",
                        height: "50px",
                        overflow: "hidden",
                        borderRadius: "100%",
                      }}
                    />
                  ) : (
                    <RiFileUploadFill className={`${styles.icon}`} />
                  )}
                </label>
                <input
                  type="file"
                  id="img"
                  onChange={(e) => {
                    setLogo(e.target.files[0]);
                  }}
                />
              </div>
              <div
                className={`${styles.input_container} ${styles.contract} ${styles.file}`}
              >
                <label htmlFor="contract" className={`center`}>
                  <h3>Contract </h3>
                  {contract ? (
                    <img
                      src={contract}
                      alt="Uploaded"
                      style={{
                        width: "50px",
                        height: "50px",
                        overflow: "hidden",
                        borderRadius: "100%",
                      }}
                    />
                  ) : (
                    <RiFileUploadFill className={`${styles.icon}`} />
                  )}
                </label>
                <input
                  type="file"
                  placeholder=""
                  id="contract"
                  onChange={(e) => {
                    setContract(e.target.files[0]);
                  }}
                />
              </div>
              <button type="submit">save</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
