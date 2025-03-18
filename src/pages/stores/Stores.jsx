import { GrMenu } from "react-icons/gr";
import styles from "./stores.module.css";
import Nav from "../../components/nav/Nav";
import { NavContext } from "../../context/NavContext";
import { useContext, useState } from "react";
import { RiFileUploadFill } from "react-icons/ri";

import image from "./imgs/BMS.jpeg";
import { MdCancelPresentation } from "react-icons/md";
export default function Stores() {
  let [img, setImag] = useState("");
  let [showImg, setShowImg] = useState("");
  const { toggleNav } = useContext(NavContext);
  const handleImgUpload = (event) => {
    console.log(localStorage.getItem("token"));
    const file = event.target.files[0];
    setImag(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setShowImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <section className={`${styles.section} section`}>
      <GrMenu className="menu_icon center" onClick={toggleNav} />
      <Nav />
      <div className={`${styles.container}`}>
        <form>
          <div className={`${styles.input_container}`}>
            <label htmlFor="img">
              {showImg ? (
                <img src={showImg} alt="img not upload" />
              ) : (
                <>
                  {" "}
                  <RiFileUploadFill className={`${styles.icon}`} />
                </>
              )}
            </label>
            <input
              type="file"
              id="img"
              style={{ display: "none" }}
              onChange={handleImgUpload}
            />
          </div>
        </form>
        <div className={`${styles.imgs_container}`}>
          <div className={styles.img}>
            {" "}
            <img src={image} alt="img not found" />
            <MdCancelPresentation className={`${styles.icon}`} />
          </div>

          <div className={styles.img}>
            {" "}
            <img src={image} alt="img not found" />
            <MdCancelPresentation className={`${styles.icon}`} />
          </div>

          <div className={styles.img}>
            {" "}
            <img src={image} alt="img not found" />
            <MdCancelPresentation className={`${styles.icon}`} />
          </div>

          <div className={styles.img}>
            {" "}
            <img src={image} alt="img not found" />
            <MdCancelPresentation className={`${styles.icon}`} />
          </div>

          <div className={styles.img}>
            {" "}
            <img src={image} alt="img not found" />
            <MdCancelPresentation className={`${styles.icon}`} />
          </div>

          <div className={styles.img}>
            {" "}
            <img src={image} alt="img not found" />
            <MdCancelPresentation className={`${styles.icon}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
