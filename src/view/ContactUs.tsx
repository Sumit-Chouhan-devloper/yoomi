import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import SignUp from "../components/common/SignUp";
import ContactForm from "../components/contactUs/ContactForm";
import ContactHero from "../components/contactUs/ContactUsHero";
const ContactUs: React.FC = () => {
  return (
    <>
      <div className=" relative z-50">
        {" "}
        <Header />
      </div>
      <div className=" relative z-0">
        {" "}
        <ContactHero />
        <ContactForm />
        <SignUp />
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
