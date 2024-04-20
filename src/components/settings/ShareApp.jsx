import React, { useState } from "react";
import CloseButton from "../CloseButton";
import {
  FaEnvelope,
  FaFacebook,
  FaShareFromSquare,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import {
  EmailShareButton,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

import {
  FacebookShareCount,
  HatenaShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount,
} from "react-share";

const ShareApp = ({ handleCloseShare }) => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <div className="w-full h-screen bg-slate-500/75 flex items-center justify-center md:justify-center gap-2 absolute top-0 p-[10px] md:px-[100px] lg:px-[300px] flex-col">
      <div className="w-full rounded-md flex flex-col gap-2 bg-white text-center">
        <div className="flex items-center mb-2 border-b px-4 py-2 md:py-6 ">
          <h2 className="tracking-widest font-semibold text-lg flex items-center justify-center gap-2">
            <FaShareFromSquare className="md:w-6 md:h-6" /> Share Via
          </h2>
          <div className="ml-auto">
            <CloseButton handleModalClose={handleCloseShare} />
          </div>
        </div>

        {loading && (
          <p className="p-3 bg-green-50 text-center text-green-700 text-sm">
            Loading...
          </p>
        )}

        <div className="flex flex-col px-4 pb-2 md:pb-4 gap-2">
          <WhatsappShareButton url="https://wa.me/" title="24/7_E-CLEANING">
            <p
              className="w-full bg-green-500 hover:bg-green-600 text-white p-3 md:p-4  tracking-widest rounded font-semibold cursor-pointer flex items-center justify-start gap-2 transition-all duration-300"
              onClick={() => setLoading(true)}
            >
              <FaWhatsapp className="w-6 h-6" />
              WhatsApp
            </p>
          </WhatsappShareButton>

          <TwitterShareButton
            url="https://twitter.com/"
            title="24/7_E-CLEANING"
          >
            <p
              className="w-full bg-neutral-900 hover:bg-neutral-950 text-white p-3 md:p-4  tracking-widest rounded font-semibold cursor-pointer flex items-center justify-start gap-2 transition-all duration-300"
              onClick={() => setLoading(true)}
            >
              <FaXTwitter className="w-6 h-6" />
              Twitter
            </p>
          </TwitterShareButton>

          <FacebookShareButton
            url="https://www.facebook.com/"
            quote="24/7_E-CLEANING"
          >
            <p
              className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 md:p-4  tracking-widest rounded font-semibold cursor-pointer flex items-center justify-start gap-2 transition-all duration-300"
              onClick={() => setLoading(true)}
            >
              <FaFacebook className="w-6 h-6" />
              FaceBook
            </p>
          </FacebookShareButton>

          <EmailShareButton
            url="https://mail.google.com/"
            subject="24/7_E-CLEANING"
            body="Share via Email"
          >
            <p
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 md:p-4  tracking-widest rounded font-semibold cursor-pointer flex items-center justify-start gap-2 transition-all duration-300"
              onClick={() => setLoading(true)}
            >
              <FaEnvelope className="w-6 h-6" />
              Email
            </p>
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};

export default ShareApp;
