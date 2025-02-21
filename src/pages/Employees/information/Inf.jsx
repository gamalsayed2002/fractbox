import { useEffect, useState } from "react";
import styles from "./inf.module.css";
import { GrMenu } from "react-icons/gr";
import { useContext } from "react";
import { NavContext } from "../../../context/NavContext";
import Nav from "../../../components/nav/Nav";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/LOADER/Loader";
import Swal from "sweetalert2";
import { RiFileUploadFill } from "react-icons/ri";
export default function Inf() {
  let [loader, setLoader] = useState(true);
  const { toggleNav } = useContext(NavContext);
  const { id } = useParams();
  let naviaget = useNavigate();
  // ////////////////////////////////////////////////
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [phone2, setPhone2] = useState("");
  let [email, setEmail] = useState("");
  let [roule, setRoule] = useState("");
  let [days, setDayes] = useState("");
  let [car, setCar] = useState("");
  let [carNumber, setCarNumber] = useState("");
  let [company, setCompany] = useState("");
  let [license, setLicense] = useState("");
  let [card, setCard] = useState(null);
  let [cardImage, setCardImage] = useState(null);
  let [mvaImage, setMvaImage] = useState(null);
  let [mva, setMva] = useState(null);
  let [sex, setSex] = useState("");
  const handleCardUpload = (event) => {
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
  const handleMvapload = (event) => {
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

    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "No Token Found",
        text: "Please log in to access the data.",
      });

      return;
    }

    fetch(`http://fraktbox.com/public/api/worker/${id}`, {
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
        setName(res.data.name);
        setEmail(res.data.email);
        setDayes(res.data.work_days);
        setSex(res.data.gender);
        setMva(res.data.MVA);
        setCard(res.data.identification);
        setPhone(res.data.phone_number);
        setCar(res.data.car_type);
        setRoule(res.data.role_id);
        setCarNumber(res.data.car_number);
        setCompany(res.data.company_name);
        setLicense(res.data.company_license);
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

  const fire = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "are you shure?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "yes",
      denyButtonText: `no`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setLoader(true);
        fetch(`https://fraktbox.com/public/api/workers/${id}/fire`, {
          method: "Post",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((response) => {
            if (!response.ok) {
              console.log(response);
              throw new Error(
                `Network response was not ok, status: ${response.status}`
              );
            }
            return response.json();
          })
          .then((res) => {
            Swal.fire("worker has been removed!", "", "success");
            setLoader(false);
            naviaget("/employees");
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
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const edit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone_number", phone);
    formData.append("phone_number2", phone2);
    formData.append("email", email);
    formData.append("role", roule);
    formData.append("work_days", days);
    formData.append("car_type", car);
    formData.append("car_number", carNumber);
    formData.append("company_name", company);
    formData.append("license", license);
    formData.append("identification", card);
    formData.append("MVA", mva);
    formData.append("gender", sex);

    setLoader(true);

    fetch(`http://fraktbox.com/public/worker/update/${id}`, {
      method: "PUT",
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
      .then((res) => {
        Swal.fire("Worker has been updated!", "", "success");
        setLoader(false);
        navigate("/employees");
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <section className={`${styles.section} section`}>
          <GrMenu className="menu_icon center" onClick={toggleNav} />
          <Nav />
          <div className={`${styles.content_container} center `}>
            <form className={`center`}>
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
                    id="phone2"
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
                  <label htmlFor="roule">Roule</label>
                  <select
                    name="sex"
                    id="sex"
                    value={roule}
                    onChange={(e) => setRoule(e.target.value)}
                  >
                    <option value="driver">Driver</option>
                    <option value="houseworker">House worker</option>
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

                <div className={`${styles.input_container}`}>
                  <label htmlFor="company">Company name</label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                  />
                </div>
                <div className={`${styles.input_container}`}>
                  <label htmlFor="companyNumber">Company license number</label>
                  <input
                    type="text"
                    id="companyNumber"
                    value={license}
                    onChange={(e) => {
                      setLicense(e.target.value);
                    }}
                  />
                </div>
                <div
                  className={`${styles.input_container} ${styles.input_select}`}
                >
                  <h3>Sex</h3>
                  <div className={`${styles.container} center`}>
                    <select
                      name="sex"
                      id="sex"
                      value={sex}
                      onChange={(e) => setSex(e.target.value)}
                    >
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                    </select>
                  </div>
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
                      <img
                        src={card}
                        alt="img not found"
                        style={{ maxWidth: "100px", overflow: "hidden" }}
                      />
                    )}
                  </label>
                  <input type="file" id="card" onChange={handleCardUpload} />
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
                      <img
                        src={mva}
                        alt="img not found"
                        style={{ maxWidth: "100px", overflow: "hidden" }}
                      />
                    )}
                  </label>
                  <input type="file" id="mva" onChange={handleMvapload} />
                </div>
              </div>

              <div className={`${styles.buttons} center`}>
                <button className="center" onClick={edit}>
                  edit
                </button>
                <button className="center" onClick={fire}>
                  fire
                </button>
                <button className="center">contact</button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
