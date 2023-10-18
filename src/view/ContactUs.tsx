import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import SignUp from "../components/common/SignUp";
import ContactForm from "../components/contactUs/ContactForm";
import ContactHero from "../components/contactUs/ContactUsHero";
const ContactUs: React.FC = () => {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactForm />
      <SignUp />
      <Footer />
    </>
  );
};

export default ContactUs;
