import React, { useContext, useEffect } from "react";
import { GrMenu } from "react-icons/gr";
import Nav from "../../components/nav/Nav";
import { NavContext } from "../../context/NavContext";

function Tracking() {
  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: -34.397, lng: 150.644 }, // Adjust the center as needed
      });

      fetch("http://fraktbox.com/public/api/active-drivers-locations")
        .then((response) => response.json())
        .then((drivers) => {
          drivers.forEach((driver) => {
            new window.google.maps.Marker({
              position: {
                lat: parseFloat(driver.latitude),
                lng: parseFloat(driver.longitude),
              },
              map: map,
            });
          });
        })
        .catch((error) =>
          console.error("Error fetching driver locations:", error)
        );
    };

    // Load the Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA7bC1Tu9K19KDkJpcH2_g-RK15hJsSgdg&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = initMap;
    document.head.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);
  const { toggleNav } = useContext(NavContext);
  return (
    <section className={`section`} >
      <GrMenu className="menu_icon center" onClick={toggleNav} />
      <Nav />
  
      <div id="map" style={{ height: "96%", width: "100%",margin:"15px",borderRadius:"10px" }}></div>
    </section>
  );
}

export default Tracking;
