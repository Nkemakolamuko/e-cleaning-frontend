import React, { useState } from "react";
import Title from "../components/Title";
import ContactImage from "../components/contact.us/ContactImage";
import {
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaX,
  FaXTwitter,
} from "react-icons/fa6";
import ActionButtons from "../components/contact.us/ContactActionButtons";
import { GiChatBubble } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [action, setAction] = useState("");
  const handleClick = (value) => {
    setAction(value);
    // alert(value);
  };

  return (
    <section className="relative">
      <Title title="Contact Us" />

      <div className="mt-5 w-full flex items-center justify-center">
        <ContactImage means={action || "---"} />
      </div>

      {/* Turn to components */}
      <section className="flex flex-col md:flex-row item-center justify-between mt-5 mx-auto max-w-[800px] gap-2 md:gap-4">
        <ul className="flex flex-col mx-auto w-full gap-2 group">
          <ActionButtons
            to="tel:08069487650"
            text="Phone"
            logo={<FaPhone className="w-5 h-5" />}
            bg="shadow-lg shadow-black/10 !bg-white !text-black"
            bgHover="hover:shadow-xl hover:shadow-black/20 !md:hover:bg-slate-200 !active:bg-slate-200"
            handleClick={() => handleClick("Phone")}
          />
          <ActionButtons
            to="mailto:e-laundry@gmail.com"
            text="Email"
            logo={<FaEnvelope className="w-5 h-5" />}
            bg="shadow-lg shadow-black/10 bg-neutral-950 md:bg-neutral-900"
            bgHover="hover:shadow-xl hover:shadow-black/20 md:hover:bg-neutral-950"
            handleClick={() => handleClick("Email")}
          />
          <ActionButtons
            text="Twitter (X)"
            logo={<FaXTwitter className="w-5 h-5" />}
            bg="shadow-lg shadow-black/10 bg-blue-700 md:bg-blue-600"
            bgHover="hover:shadow-xl hover:shadow-black/20 md:hover:bg-blue-700"
            handleClick={() => handleClick("Twitter")}
          />
        </ul>

        <ul className="flex flex-col mx-auto w-full gap-2 group">
          <ActionButtons
            text="WhatsApp"
            logo={<FaWhatsapp className="w-5 h-5" />}
            bg="shadow-lg shadow-black/10 bg-green-500"
            bgHover="hover:shadow-xl hover:shadow-black/20 md:hover:bg-green-600"
            handleClick={() => handleClick("WhatsApp")}
          />

          <ActionButtons
            text="LinkedIn"
            logo={<FaLinkedin className="w-5 h-5" />}
            bg="shadow-lg shadow-black/10 bg-blue-500 md:bg-blue-400"
            bgHover="hover:shadow-xl hover:shadow-black/20 md:hover:bg-blue-500"
            handleClick={() => handleClick("LinkedIn")}
          />

          <ActionButtons
            text="Start Live Chat - tawk.to will do here"
            logo={<GiChatBubble className="w-5 h-5" />}
            bg="shadow-lg shadow-black/10 bg-green-400"
            bgHover="hover:shadow-xl hover:shadow-black/20 md:hover:bg-green-500"
            handleClick={() => handleClick("Live-Chat")}
          />
        </ul>
      </section>
    </section>
  );
};

export default Contact;
