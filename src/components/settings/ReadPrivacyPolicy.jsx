import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import CloseButton from "../CloseButton";
import { BgContext } from "../../App";

const ReadPrivacyPolicy = ({ handleClosePrivacy }) => {
  const { darkMode } = useContext(BgContext);
  return (
    <div className="w-full h-screen bg-slate-500/75 flex items-center absolute top-0 p-[10px] md:p-[50px] flex-col text-sm">
      <div
        className={`w-full rounded-md flex flex-col gap-2 bg-white text-center ${
          darkMode ? "border-2 dark-mode" : ""
        }`}
      >
        <div
          className={`flex items-center mb-2 border-b px-4 pt-2 pb-0 ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          <h2 className="!tracking-widest font-medium text-lg text-center">
            Privacy Policy
          </h2>

          <div className="ml-auto">
            <CloseButton handleModalClose={handleClosePrivacy} />
          </div>
        </div>
        <div
          className={`flex flex-col px-4 md:px-12 pb-6 text-start ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          <p>
            1. Your data and activities are secured with a third-party security
            agency and will never be shared with anyone or advertisers
          </p>
          <br />
          <p>
            {" "}
            2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Incidunt ex molestias exercitationem, fugiat eaque possimus omnis
            corporis maxime dignissimos at repudiandae autem in dolores eos
            optio. Ad maxime sapiente, necessitatibus velit magni nisi neque.
            Praesentium cupiditate quidem nulla corporis consectetur illo
            explicabo laudantium? Aperiam optio nihil odio, est atque
            necessitatibus.
          </p>{" "}
          <br />
          <p>
            3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Incidunt ex molestias exercitationem, fugiat eaque possimus omnis
            corporis maxime dignissimos at repudiandae autem in dolores eos
            optio. Ad maxime sapiente, necessitatibus velit magni nisi neque.
            Praesentium cupiditate quidem nulla corporis consectetur illo
            explicabo laudantium? Aperiam optio nihil odio, est atque
            necessitatibus.
          </p>{" "}
          <br />
          <p>
            4. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Incidunt ex molestias exercitationem, fugiat eaque possimus omnis
            corporis maxime dignissimos at repudiandae autem in dolores eos
            optio. Ad maxime sapiente, necessitatibus velit magni nisi neque.
            Praesentium cupiditate quidem nulla corporis consectetur illo
            explicabo laudantium? Aperiam optio nihil odio, est atque
            necessitatibus.
          </p>{" "}
          <br />
          <p>
            5. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Incidunt ex molestias exercitationem, fugiat eaque possimus omnis
            corporis maxime dignissimos at repudiandae autem in dolores eos
            optio. Ad maxime sapiente, necessitatibus velit magni nisi neque.
            Praesentium cupiditate quidem nulla corporis consectetur illo
            explicabo laudantium? Aperiam optio nihil odio, est atque
            necessitatibus.
          </p>{" "}
          <br />
          <p>
            6. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Incidunt ex molestias exercitationem, fugiat eaque possimus omnis
            corporis maxime dignissimos at repudiandae autem in dolores eos
            optio. Ad maxime sapiente, necessitatibus velit magni nisi neque.
            Praesentium cupiditate quidem nulla corporis consectetur illo
            explicabo laudantium? Aperiam optio nihil odio, est atque
            necessitatibus.
          </p>{" "}
        </div>
        <br />
      </div>
    </div>
  );
};

export default ReadPrivacyPolicy;
