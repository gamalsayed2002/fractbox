import { useEffect, useState } from "react";
import styles from "./Job.module.css";
import { RiFileUploadFill } from "react-icons/ri";
import Loader from "../../components/LOADER/Loader";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Job() {
  let [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setLoader(false);
  }, []);

  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [roule, setRoule] = useState("");
  let [days, setDayes] = useState("");
  let [car, setCar] = useState("");
  let [carNumber, setCarNumber] = useState("");
  let [company, setCompany] = useState("");
  let [card, setCard] = useState(null);
  let [mva, setMva] = useState("");
  let [sex, setSex] = useState("");

  const handleMvaUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMva(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCardUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCard(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    setLoader(true);
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("roule", roule);
    formData.append("days", days);
    formData.append("car", car);
    formData.append("carNumber", carNumber);
    formData.append("company", company);
    formData.append("mva", mva); // Base64 or file depending on your backend requirement
    formData.append("sex", sex);

    if (card) {
      formData.append("card", card); // Assuming this is a file or base64 image
    }

    fetch("https://fraktbox.com/public/api/worker/add", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            error.message || "An unexpected error occurred please try again",
        });
        setLoader(false);
      });
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <section className={`${styles.section}`}>
          <div className={`${styles.container} center`}>
            <form className={`center`} onSubmit={handleSubmit}>
              <h2 className={`${styles.title}`}>Apply for a job</h2>
              <div className={`${styles.container} center`}>
                <div className={`${styles.input_container}`}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className={`${styles.input_container}`}>
                  <label htmlFor="phone">Phone number</label>
                  <input
                    type="number"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className={`${styles.input_container}`}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className={`${styles.input_container}`}>
                  <label htmlFor="roule">Role</label>
                  <select
                    id="roule"
                    value={roule}
                    onChange={(e) => setRoule(e.target.value)}
                  >
                    <option value="Driver">Driver</option>
                    <option value="Houseworker">Houseworker</option>
                  </select>
                </div>

                <div className={`${styles.input_container}`}>
                  <label htmlFor="days">Working days</label>
                  <input
                    type="text"
                    id="days"
                    value={days}
                    onChange={(e) => setDayes(e.target.value)}
                  />
                </div>

                <div className={`${styles.input_container}`}>
                  <label htmlFor="car">Car type</label>
                  <input
                    type="text"
                    id="car"
                    value={car}
                    onChange={(e) => setCar(e.target.value)}
                  />
                </div>

                <div className={`${styles.input_container}`}>
                  <label htmlFor="carNumber">Car numbers</label>
                  <input
                    type="text"
                    id="carNumber"
                    value={carNumber}
                    onChange={(e) => setCarNumber(e.target.value)}
                  />
                </div>

                <div className={`${styles.input_container}`}>
                  <label htmlFor="company">Company name</label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>

                <div className={`${styles.input_container}`}>
                  <label htmlFor="companyNumber">Company license number</label>
                  <input
                    type="text"
                    id="companyNumber"
                    value={mva}
                    onChange={(e) => setMva(e.target.value)}
                  />
                </div>

                <div
                  className={`${styles.input_container} ${styles.file} center`}
                >
                  <label htmlFor="card" className={`center`}>
                    <h3>Identification card</h3>
                    {card ? (
                      <img
                        src={card}
                        alt="Uploaded"
                        style={{ maxWidth: "100px", overflow: "hidden" }}
                      />
                    ) : (
                      <RiFileUploadFill className={`${styles.icon}`} />
                    )}
                  </label>
                  <input type="file" id="card" onChange={handleCardUpload} />
                </div>

                <div
                  className={`${styles.input_container} ${styles.file} center`}
                >
                  <label htmlFor="mva" className={`center`}>
                    <h3>MVA</h3>
                    {mva ? (
                      <img
                        src={mva}
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
                  <h3>Sex</h3>
                  <div className={`${styles.container} center`}>
                    <div className={`center`}>
                      <label htmlFor="male">Male</label>
                      <input
                        type="radio"
                        name="sex"
                        id="male"
                        value={"Male"}
                        checked={sex === "Male"} // To manage radio button state
                        onChange={(e) => setSex(e.target.value)}
                      />
                    </div>
                    <div className={`center`}>
                      <label htmlFor="female">Female</label>
                      <input
                        type="radio"
                        name="sex"
                        id="female"
                        value={"Female"}
                        checked={sex === "Female"} // To manage radio button state
                        onChange={(e) => setSex(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button className="center" type="submit">
                Save
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
