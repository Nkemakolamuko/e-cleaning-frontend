import React, { useState } from "react";
import Title from "../components/Title";
import CleanersCard from "../components/cleanersNearby/CleanersCard";
import FavoriteCleaners from "../components/cleanersNearby/FavoriteCleaners";

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
  const [border, setBorder] = useState("All");
  const [favHandler, setFavHandler] = useState(false);
  const [forFavNames, setForFavNames] = useState(names);
  const [yourFavorites, setYourFavorites] = useState([]);

  const handleFav = (id) => {
    setForFavNames(
      names.map((val) =>
        val.id === id ? { ...val, favorite: !val.favorite } : val
      )
    );
    const favFound = forFavNames.find((val) => val.id == id);

    if (yourFavorites.includes(favFound)) {
      console.log("Exist");
      alert("Exist");
      return;
    } else {
      setYourFavorites([
        ...yourFavorites,
        { ...favFound, favorite: !favFound.favorite },
      ]);
      console.log("Else block ", yourFavorites);
      alert("Added to favorite!");
    }
  };

  // console.log(yourFavorites);

  return (
    <div>
      <section className="top-0 sticky z-50 bg-white cleaners">
        <Title title="Dry Cleaners Nearby" />

        {/* Nav */}
        <section className="flex items-center gap-6 md:gap-28 w-full h-fit border-b text-nowrap shadow-lg md:shadow-lg">
          <div
            className="flex flex-col group cursor-pointer transition-all duration-300"
            onClick={() => setBorder("Favorite")}
          >
            <p
              className={`${
                border === "Favorite"
                  ? "!tracking-widest px-1 md:px-3"
                  : "!tracking-widest text-slate-400 group-hover:text-slate-800 px-1 md:px-3 scale-90"
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
                  : "!tracking-widest text-slate-400   group-hover:text-slate-800 px-1 md:px-3 scale-90"
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
                  : "!tracking-widest text-slate-400 group-hover:text-slate-800 px-1 md:px-3 scale-90"
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
                  // handleFav={() => handleFav(name.id)}
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
