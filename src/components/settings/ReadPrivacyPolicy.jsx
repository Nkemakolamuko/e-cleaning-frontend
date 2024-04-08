import React from "react";
import { FaTimes } from "react-icons/fa";
import CloseButton from "../CloseButton";

const ReadPrivacyPolicy = ({ handleClosePrivacy }) => {
  return (
    <div className="w-full h-screen bg-slate-500/75 flex items-center justify-center absolute top-0 p-[10px] md:p-[100px] flex-col">
      <div className="ml-auto">
        <CloseButton handleModalClose={handleClosePrivacy} />
      </div>
      <div className="w-full px-4 py-6 rounded-md bg-white overflow-auto flex flex-col">
        <h2 className="tracking-widest font-medium text-lg mb-4 text-center">
          Privacy Policy
        </h2>
        <p>
          1. Your data and activities are secured with a third-party security
          agency and will never be shared with anyone or advertisers
        </p>
        <br />
        <p>
          {" "}
          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          ex molestias exercitationem, fugiat eaque possimus omnis corporis
          maxime dignissimos at repudiandae autem in dolores eos optio. Ad
          maxime sapiente, necessitatibus velit magni nisi neque. Praesentium
          cupiditate quidem nulla corporis consectetur illo explicabo
          laudantium? Aperiam optio nihil odio, est atque necessitatibus.
        </p>{" "}
        <br />
        <p>
          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          ex molestias exercitationem, fugiat eaque possimus omnis corporis
          maxime dignissimos at repudiandae autem in dolores eos optio. Ad
          maxime sapiente, necessitatibus velit magni nisi neque. Praesentium
          cupiditate quidem nulla corporis consectetur illo explicabo
          laudantium? Aperiam optio nihil odio, est atque necessitatibus.
        </p>{" "}
        <br />
        <p>
          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          ex molestias exercitationem, fugiat eaque possimus omnis corporis
          maxime dignissimos at repudiandae autem in dolores eos optio. Ad
          maxime sapiente, necessitatibus velit magni nisi neque. Praesentium
          cupiditate quidem nulla corporis consectetur illo explicabo
          laudantium? Aperiam optio nihil odio, est atque necessitatibus.
        </p>{" "}
        <br />
        <p>
          5. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          ex molestias exercitationem, fugiat eaque possimus omnis corporis
          maxime dignissimos at repudiandae autem in dolores eos optio. Ad
          maxime sapiente, necessitatibus velit magni nisi neque. Praesentium
          cupiditate quidem nulla corporis consectetur illo explicabo
          laudantium? Aperiam optio nihil odio, est atque necessitatibus.
        </p>{" "}
        <br />
        <p>
          6. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          ex molestias exercitationem, fugiat eaque possimus omnis corporis
          maxime dignissimos at repudiandae autem in dolores eos optio. Ad
          maxime sapiente, necessitatibus velit magni nisi neque. Praesentium
          cupiditate quidem nulla corporis consectetur illo explicabo
          laudantium? Aperiam optio nihil odio, est atque necessitatibus.
        </p>{" "}
        <br />
      </div>
    </div>
  );
};

export default ReadPrivacyPolicy;
