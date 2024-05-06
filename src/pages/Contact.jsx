import React, { useEffect, useState } from "react";
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
import { FaPhoneAlt, FaTimes } from "react-icons/fa";

const Contact = () => {
  const [action, setAction] = useState("");
  const [showChat, setShowChat] = useState(false);
  const handleClick = (value) => {
    setAction(value);
    // alert(value);
  };

  useEffect(() => {
    // Load Tawk.to script when component mounts
    if (showChat) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://embed.tawk.to/663ab11807f59932ab3d1bd4/1htak7j3g";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.body.appendChild(script);

      // Clean up function to remove the script when component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showChat]);

  useEffect(() => {
    // Toggle Tawk.to chat widget visibility based on showChat state
    if (showChat) {
      if (typeof Tawk_API !== "undefined") {
        Tawk_API.showWidget();
      }
    } else {
      if (typeof Tawk_API !== "undefined") {
        Tawk_API.hideWidget();
      }
    }
  }, [showChat]);

  return (
    <>
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
              bg="shadow-lg shadow-black/10 bg-neutral-950 md:bg-neutral-900 border"
              bgHover="hover:shadow-xl hover:shadow-black/20 md:hover:bg-neutral-950"
              handleClick={() => handleClick("Email")}
            />
            <ActionButtons
              text="Twitter (X)"
              logo={<FaXTwitter className="w-5 h-5" />}
              bg="shadow-lg shadow-black/10 bg-blue-700 md:bg-blue-600"
              bgHover="hover:shadow-xl hover:shadow-black/20 md:hover:bg-blue-700"
              handleClick={() => handleClick("Twitter")}
              // to={}
            />
          </ul>

          <ul className="flex flex-col mx-auto w-full gap-2 group">
            <ActionButtons
              text="WhatsApp"
              logo={<FaWhatsapp className="w-5 h-5" />}
              bg="shadow-lg shadow-black/10 bg-green-500"
              bgHover="hover:shadow-xl hover:shadow-black/20 md:hover:bg-green-600"
              handleClick={() => handleClick("WhatsApp")}
              // to={}
            />

            <ActionButtons
              text="LinkedIn"
              logo={<FaLinkedin className="w-5 h-5" />}
              bg="shadow-lg shadow-black/10 bg-blue-500 md:bg-blue-400"
              bgHover="hover:shadow-xl hover:shadow-black/20 md:hover:bg-blue-500"
              handleClick={() => handleClick("LinkedIn")}
              // to={}
            />

            <ActionButtons
              // I'd check for a live chat Saas
              // to={}
              text={`${showChat ? "Close Live Chat" : "Start Live Chat"}`}
              logo={
                !showChat ? <GiChatBubble className="w-5 h-5" /> : <FaTimes />
              }
              bg={`shadow-lg shadow-black/10 ${
                showChat ? "bg-rose-500" : "bg-green-400"
              }`}
              bgHover="hover:shadow-xl hover:shadow-black/20 md:hover:bg-green-500"
              handleClick={() => {
                handleClick("Live-Chat");
                setShowChat(!showChat);
              }}
            />
          </ul>
        </section>
      </section>
    </>
  );
};

export default Contact;
