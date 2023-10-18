import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import SignUp from "../components/common/SignUp";
import ContactForm from "../components/contactUs/ContactForm";
const ContactUs: React.FC = () => {
  return (
    <>
      <Header />
      <ContactForm />
      <SignUp />
      <Footer />
    </>
  );
};

export default ContactUs;
