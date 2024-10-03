import { useState } from "react";
import styles from "./Job.module.css";
import { RiFileUploadFill } from "react-icons/ri";
import { style } from "framer-motion/client";
export default function Job() {
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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCard(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <section className={`${styles.section}`}>
        <h2 className={`${styles.title}`}>Apply for a job</h2>
        <div className={`${styles.container} center`}>
          <form className={`center`}>
            <div className={`${styles.container} center`}>
              <div className={`${styles.input_container}`}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="phone">Phone number</label>
                <input type="number" id="phone" />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="roule">Roule</label>
                <input type="text" id="roule" />
                {/* <div className={`${styles.input_options_container}`}>
                <div className={`${styles.input_option}`}>Warehouse Worker</div>

                <div className={`${styles.input_option}`}>Driver</div>
              </div> */}
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="days">Working days</label>
                <input type="text" id="days" />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="car">Car type</label>
                <input type="text" id="car" />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="carNumber">car numbers</label>
                <input type="text" id="carNumber" />
              </div>

              <div className={`${styles.input_container}`}>
                <label htmlFor="company">Company name</label>
                <input type="text" id="company" />
              </div>
              <div className={`${styles.input_container}`}>
                <label htmlFor="companyNumber">Company license number</label>
                <input type="text" id="companyNumber" />
              </div>

              <div
                className={`${styles.input_container} ${styles.file} center`}
              >
                <label htmlFor="card" className={`center`}>
                  <h3>identification card</h3>
                  {card ? (
                    <img
                      src={card}
                      alt="Uploaded"
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  ) : (
                    <RiFileUploadFill className={`${styles.icon}`} />
                  )}
                </label>
                <input type="file" id="card" onChange={handleImageUpload} />
                <div className={`${styles.content}`}></div>
              </div>

              <div
                className={`${styles.input_container} ${styles.file} center`}
              >
                <label htmlFor="mva" className={`center`}>
                  <h3>MVA</h3>
                  <RiFileUploadFill className={`${styles.icon}`} />
                </label>
                <input type="file" id="mva" />
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
                      onClick={(e) => {
                        setSex(e.target.value);
                      }}
                    />
                  </div>
                  <div className={`center`}>
                    <label htmlFor="female">Female</label>
                    <input
                      type="radio"
                      name="sex"
                      id="female"
                      value={"Female"}
                      onClick={(e) => {
                        setSex(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
