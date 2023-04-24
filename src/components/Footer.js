import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        {" "}
        <div className="footer-background">
          <div className="logo-footer">
            <img
              src="/Kasa.footer.png"
              alt="Kasa footer logo"
              className="image-footer"
            />
          </div>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
