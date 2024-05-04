import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import CleanersCard from "../components/cleanersNearby/CleanersCard";
import FavoriteCleaners from "../components/cleanersNearby/FavoriteCleaners";
import { BgContext } from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Still on this -- the favorite stuff -- I need it to remain true when set to true and be unable to add it to favorites if it's true -- I want to add toggle option as well

const names = [
  {
    name: "Ugo Best",
    favorite: false,
    id: 1,
  },
  {
    name: "Tony Best",
    favorite: false,
    id: 2,
  },
  {
    name: "Euvoria",
    favorite: false,
    id: 3,
  },
  {
    name: "Nkem Best",
    favorite: false,
    id: 4,
  },
  {
    name: "Sheri Best",
    favorite: false,
    id: 5,
  },
  {
    name: "Anto Best",
    favorite: false,
    id: 6,
  },
  {
    name: "Diamond Best",
    favorite: false,
    id: 7,
  },
];
const Cleaners = () => {
  const { darkMode } = useContext(BgContext);
  const [border, setBorder] = useState("All");
  const [favHandler, setFavHandler] = useState(false);
  const [forFavNames, setForFavNames] = useState(names);
  const [yourFavorites, setYourFavorites] = useState([]);
  const [favId, setFavId] = useState(null);

  const handleFav = (id) => {
    setFavId(id);
    setForFavNames(
      names.map((val) =>
        val.id === id ? { ...val, favorite: !val?.favorite } : val
      )
    );
  };

  useEffect(() => {
    const addedToFav = () => {
      // This one negates the favorite to false
      setForFavNames(
        names.map((val) =>
          val.id === favId ? { ...val, favorite: !val?.favorite } : val
        )
      );
      const favFound = forFavNames.find((val) => val.id == favId);

      if (yourFavorites.includes(favFound) || favId == null) {
        // toast.error("Cleaner exist in favorite or network error - try again!", {
        //   position: "bottom-left",
        // });
        // console.log("Exist");
        return;
      } else {
        setYourFavorites([
          ...yourFavorites,
          { ...favFound, favorite: !favFound?.favorite },
        ]);
        toast.success("Cleaner added to favorite!", {
          autoClose: 2000,
        });
      }
    };
    addedToFav();
  }, [favId]);

  const handleFavRemove = (id) => {
    const youSure = window.confirm("Are you sure?");
    if (youSure) {
      setYourFavorites(yourFavorites.filter((fav) => fav.id !== id));
      toast.success("Cleaner removed from favorite!", {
        autoClose: 2000,
      });
    } else {
      toast.error("Cancelled", {
        autoClose: 1000,
        position: "bottom-left",
      });
      return;
    }
  };

  return (
    <div>
      <ToastContainer />
      <section className={`bg-white ${darkMode ? "dark-mode" : ""}`}>
        <Title title="Dry Cleaners Nearby" />

        {/* Nav */}
        <section className="flex items-center gap-6 md:gap-28 w-full h-fit border-b text-nowrap">
          <div
            className="flex flex-col group cursor-pointer transition-all duration-300"
            onClick={() => setBorder("Favorite")}
          >
            <p
              className={`${
                border === "Favorite"
                  ? "!tracking-widest px-1 md:px-3"
                  : `!tracking-widest text-slate-400 group-hover:text-slate-800 px-1 md:px-3 scale-90 ${
                      darkMode ? "group-hover:!text-slate-200" : ""
                    }`
              }`}
            >
              Favorite
            </p>
            <p
              className={`${
                border === "Favorite"
                  ? "h-1 w-full bg-green-500 group-hover:bg-green-600"
                  : "h-0 w-0"
              }`}
            ></p>
          </div>
          <div
            className="flex flex-col group cursor-pointer transition-all duration-300"
            onClick={() => setBorder("Area")}
          >
            <p
              className={`${
                border === "Area"
                  ? "!tracking-widest px-1 md:px-3"
                  : `!tracking-widest text-slate-400 group-hover:text-slate-800 px-1 md:px-3 scale-90 ${
                      darkMode ? "group-hover:!text-slate-200" : ""
                    }`
              }`}
            >
              Your Area
            </p>
            <p
              className={`${
                border === "Area"
                  ? "h-1 w-full bg-green-500 group-hover:bg-green-600"
                  : "h-0 w-0"
              }`}
            ></p>
          </div>
          <div
            className="flex flex-col group cursor-pointer transition-all duration-300"
            onClick={() => setBorder("All")}
          >
            <p
              className={`${
                border === "All"
                  ? "!tracking-widest px-1 md:px-3"
                  : `!tracking-widest text-slate-400 group-hover:text-slate-800 px-1 md:px-3 scale-90 ${
                      darkMode ? "group-hover:!text-slate-200" : ""
                    }`
              }`}
            >
              All
            </p>
            <p
              className={`${
                border === "All"
                  ? "h-1 w-full bg-green-500 group-hover:bg-green-600"
                  : "h-0 w-0"
              }`}
            ></p>
          </div>
        </section>
      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full md:max-w-[95%] mt-8">
        {border === "Favorite" && (
          <>
            {yourFavorites.length !== 0 ? (
              yourFavorites.map((name, i) => (
                <FavoriteCleaners
                  name={name.name}
                  key={name.id}
                  handleFavRemove={() => handleFavRemove(name.id)}
                  // fav={name.favorite}
                />
              ))
            ) : (
              <p className="text-slate-600">No Favorites added yet</p>
            )}
          </>
        )}

        {border === "Area" && (
          <>
            {forFavNames.map((name, i) => (
              <CleanersCard
                name={name.name}
                key={name.id}
                handleFav={() => handleFav(name.id)}
                addedToFavorite={name.favorite}
                fav={name.favorite}
              />
            ))}
          </>
        )}

        {border === "All" && (
          <>
            {forFavNames.map((name, i) => (
              <CleanersCard
                name={name.name}
                key={name.id}
                handleFav={() => handleFav(name.id)}
                addedToFavorite={name.favorite}
                fav={name.favorite}
              />
            ))}
          </>
        )}
      </section>

      {/* <h2 className="mt-[100px]">
        I'd use the design in Google Discoveries on mobile as my cards design
        here with Action Buttons - And an infinite scroll
      </h2> */}
    </div>
  );
};

export default Cleaners;
