import styles from "./orders.module.css";
import { GrMenu } from "react-icons/gr";
import { useContext } from "react";
import { NavContext } from "../../../context/NavContext";
import Nav from "../../../components/nav/Nav";
import { LuBox } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Orders() {
  const { toggleNav } = useContext(NavContext);
  return (
    <>
      <section className={`${styles.section} section`}>
        <GrMenu className="menu_icon center" onClick={toggleNav} />
        <Nav />
        {/* <h2 className={`${styles.title}`}>Orders</h2> */}
        <div className={`${styles.content} center`}>
          <div className={`${styles.input_container} center`}>
            <input type="text"  placeholder="Enter order number or phone number" />
          </div>
          <div className={`${styles.content_container} center`}>
            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>



            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>



            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>

            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>




            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>



            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>



            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>

            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>



            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>



            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>



            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>

            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>



            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>



            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>

            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>


            <Link to={`/order_details`} className={`${styles.box} center`}>
            <span><LuBox/></span>
            <h3>order number : 2001215</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
