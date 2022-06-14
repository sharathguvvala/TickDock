import Navbar from "../components/Navbar";
import poster from "../public/img/poster.svg";
import email from "../public/img/email.svg";
import recent from "../public/img/recent.svg";
import Image from "next/image";
import ContactForm from "../components/contact/ContactForm";


function addEvent() {


  return (
    <div>
      <Navbar />
      <div className="mt-10  max-w-7xl mx-auto flex items-center justify-center">
        <h2>Add Event here</h2>
      </div>
      <ContactForm />

    </div>
  );
}
export default addEvent;
