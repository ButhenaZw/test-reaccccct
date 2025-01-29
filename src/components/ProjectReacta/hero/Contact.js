import React from "react";
import "./Contact.css";
import Navbar from "../nav/navbar";
import { useTranslation } from "react-i18next";

export const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded-lg text-white font-bold ${className}`} {...props}>
    {children}
  </button>
);

export const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow-md p-4 ${className}`}>{children}</div>
);

export const CardContent = ({ children }) => <div>{children}</div>;

const Homepage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bodya">
      <div className="homepage">
        <Navbar />
        <div style={{ backgroundColor: "#fcb404", height: "2px", width: "100%" }}></div>

        <section className="hero-section">
          <div>
            <img
              style={{ width: "450px", position: "relative", bottom: "0px" }}
              src="https://i.imgur.com/2C7SRyN.jpeg"
              alt="Hero"
            />
          </div>
          <div>
            <div style={{ position: "relative", bottom: "100px", left: "360px" }}>
              <button className="arabic" onClick={() => i18n.changeLanguage("ar")}>AR</button>
              <button className="english" onClick={() => i18n.changeLanguage("en")}>EN</button>
            </div>
            <h1 className="hero-title">{t("heroTitle")}</h1>
            <h4 className="hero-text">{t("heroText")}</h4>
            <Button className="cta-button">{t("getStarted")}</Button>
          </div>
        </section>

        <section className="image-section"></section>
      </div>
    </div>
  );
};

export default Homepage;
