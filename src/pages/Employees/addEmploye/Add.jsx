import styles from "./add.module.css";
import { GrMenu } from "react-icons/gr";
import { useContext, useEffect } from "react";
import { NavContext } from "../../../context/NavContext";
import Nav from "../../../components/nav/Nav";
import { RiFileUploadFill } from "react-icons/ri";
import { useState } from "react";
import Loader from "../../../components/LOADER/Loader";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function Add() {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [phone2, setPhone2] = useState("");
  let [email, setEmail] = useState("");
  let [roule, setRoule] = useState("");
  let [days, setDayes] = useState("");
  let [car, setCar] = useState("");
  let [image, setImage] = useState("");
  let [photo, setPhoto] = useState("");
  let [kilo_price, setKilo_price] = useState("");
  let [minute_price, setMinute_price] = useState("");
  let [carNumber, setCarNumber] = useState("");
  let [company, setCompany] = useState("");
  let [card, setCard] = useState(null);
  let [mva, setMva] = useState("");
  let [sex, setSex] = useState("");
  let [mvaImage, setMvaImage] = useState("");
  let [cardImage, setCardImage] = useState("");
  let [region, setRegion] = useState("");

  let [data, setData] = useState([]);
  let [loader, setLoader] = useState(true);

  let handelSubmit = () => {
    setLoader(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("work_days", days);
    formData.append("role_id", roule);
    formData.append("gender", sex);
    formData.append("MVA", mva);
    formData.append("identification", card);
    formData.append("phone_number", phone);
    formData.append("phone_number2", phone2);
    formData.append("car_type", car);
    formData.append("car_number", carNumber);
    formData.append("region_id", region);
    formData.append("image", photo);
    formData.append("price_per_kilometer", kilo_price);
    formData.append("price_per_minute", minute_price);

    fetch("https://fraktbox.com/public/api/worker/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
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
          title: "Request sent successfully",
          text: "The request has been sent to the server.",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        setLoader(false);
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Error sending request",
          text: error.message,
        });
      });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setCard(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCardImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleMvaUpload = (event) => {
    const file = event.target.files[0];
    setMva(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMvaImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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

    setLoader(false);

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
        console.log(data.data);
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
  useEffect(() => {
    getData();
  }, []);

  const { toggleNav } = useContext(NavContext);
  if (loader) {
    return <Loader />;
  }
  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />
        <div className={`${styles.content_container} center `}>
          <form className={`center`} onSubmit={handelSubmit}>
            <div className={`${styles.container} center`}>
              <div className={`${styles.input_container}`}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="phone">Phone number</label>
                <input
                  type="number"
                  id="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="phone">Phone number2</label>
                <input
                  type="number"
                  id="phone"
                  value={phone2}
                  onChange={(e) => {
                    setPhone2(e.target.value);
                  }}
                />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="roule">Rule</label>
                <select
                  name="roule"
                  id="roule"
                  value={roule}
                  onChange={(e) => {
                    setRoule(e.target.value);
                  }}
                >
                  <option value="Driver">Driver</option>
                  <option value="warehouse worker">warehouse worker</option>
                </select>
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="kilo">Price per kilometer </label>
                <input
                  type="number"
                  id="kilo"
                  value={kilo_price}
                  onChange={(e) => {
                    setKilo_price(e.target.value);
                  }}
                />
              </div>
              <div className={`${styles.input_container}`}>
                <label htmlFor="minute">Price per minute </label>
                <input
                  type="number"
                  id="minute"
                  value={minute_price}
                  onChange={(e) => {
                    setMinute_price(e.target.value);
                  }}
                />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="roule">Region</label>
                <select
                  name="region"
                  id="region"
                  value={region}
                  onChange={(e) => {
                    setRegion(e.target.value);
                    console.log(region);
                  }}
                >
                  {data.map((region) => (
                    <option value={region.id} key={region.id}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="days">Working days</label>
                <input
                  type="text"
                  id="days"
                  value={days}
                  onChange={(e) => {
                    setDayes(e.target.value);
                  }}
                />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="car">Car type</label>
                <input
                  type="text"
                  id="car"
                  value={car}
                  onChange={(e) => {
                    setCar(e.target.value);
                  }}
                />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="carNumber">car numbers</label>
                <input
                  type="text"
                  id="carNumber"
                  value={carNumber}
                  onChange={(e) => {
                    setCarNumber(e.target.value);
                  }}
                />
              </div>

              <div
                className={`${styles.input_container} ${styles.file} center`}
              >
                <label htmlFor="card" className={`center`}>
                  <h3>identification card</h3>

                  {cardImage ? (
                    <img
                      src={cardImage}
                      alt="Uploaded"
                      style={{ maxWidth: "100px", overflow: "hidden" }}
                    />
                  ) : (
                    <RiFileUploadFill className={`${styles.icon}`} />
                  )}
                </label>
                <input type="file" id="card" onChange={handleImageUpload} />
              </div>
              <div
                className={`${styles.input_container} ${styles.file} center`}
              >
                <label htmlFor="photo" className={`center`}>
                  <h3>Employe image</h3>

                  {photo ? (
                    <img
                      src={photo}
                      alt="Uploaded"
                      style={{ maxWidth: "100px", overflow: "hidden" }}
                    />
                  ) : (
                    <RiFileUploadFill className={`${styles.icon}`} />
                  )}
                </label>
                <input type="file" id="photo" onChange={handlePhotoUpload} />
              </div>

              <div
                className={`${styles.input_container} ${styles.file} center`}
              >
                <label htmlFor="mva" className={`center`}>
                  <h3>MVA</h3>

                  {mvaImage ? (
                    <img
                      src={mvaImage}
                      alt="Uploaded"
                      style={{ maxWidth: "100px", overflow: "hidden" }}
                    />
                  ) : (
                    <RiFileUploadFill className={`${styles.icon}`} />
                  )}
                </label>
                <input type="file" id="mva" onChange={handleMvaUpload} />
              </div>

              <div
                className={`${styles.input_container} ${styles.input_select}`}
              >
                <label htmlFor="sex">Gender</label>
                <select
                  name="sex"
                  id="sex"
                  value={sex}
                  onChange={(e) => {
                    setSex(e.target.value);
                  }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female </option>
                </select>
              </div>
            </div>

            <div className={`${styles.buttons} center`}>
              <button className="center" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
