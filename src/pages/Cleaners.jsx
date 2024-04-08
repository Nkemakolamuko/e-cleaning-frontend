import React, { useState } from "react";
import Title from "../components/Title";
import CleanersCard from "../components/cleanersNearby/CleanersCard";

const Cleaners = () => {
  const [border, setBorder] = useState("All");
  const [favHandler, setFavHandler] = useState(false);

  const names = [
    {
      name: "Ugo Best",
      favorite: favHandler,
      id: 1,
    },
    {
      name: "Tony Best",
      favorite: favHandler,
      id: 2,
    },
    {
      name: "Euvoria",
      favorite: favHandler,
      id: 3,
    },
    {
      name: "Nkem Best",
      favorite: favHandler,
      id: 4,
    },
    {
      name: "Sheri Best",
      favorite: favHandler,
      id: 5,
    },
    {
      name: "Anto Best",
      favorite: favHandler,
      id: 6,
    },
    {
      name: "Diamond Best",
      favorite: favHandler,
      id: 7,
    },
  ];

  const handleFav = () => {
    setFavHandler(!favHandler);
  };
  return (
    <div>
      <section className="top-0 sticky z-50 bg-green-50 cleaners">
        <Title title="Dry Cleaners Nearby" />

        {/* Drop Down */}
        <section className="flex items-center gap-6 md:gap-28 w-full h-fit border-b text-nowrap">
          <div
            className="flex flex-col group cursor-pointer transition-all duration-300"
            onClick={() => setBorder("Favorite")}
          >
            <p
              className={`${
                border === "Favorite"
                  ? "tracking-widest px-1 md:px-3"
                  : "tracking-widest text-slate-400 group-hover:text-slate-800 px-1 md:px-3 scale-90"
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
                  ? "tracking-widest px-1 md:px-3"
                  : "tracking-widest text-slate-400   group-hover:text-slate-800 px-1 md:px-3 scale-90"
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
                  ? "tracking-widest px-1 md:px-3"
                  : "tracking-widest text-slate-400 group-hover:text-slate-800 px-1 md:px-3 scale-90"
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
      <section className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full md:max-w-[75%] mt-8">
        {border === "Favorite" && (
          <>
            {names.map((name, i) => (
              <CleanersCard
                name={name.name}
                key={name.id}
                handleFav={handleFav}
                fav={name.favorite}
              />
            ))}
          </>
        )}

        {border === "Area" && (
          <>
            <CleanersCard />
            <CleanersCard fav={favHandler} />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard fav={favHandler} />
            <CleanersCard fav={favHandler} />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard fav={favHandler} />
            <CleanersCard fav={favHandler} />
          </>
        )}

        {border === "All" && (
          <>
            <CleanersCard />
            <CleanersCard />
            <CleanersCard fav={favHandler} />
            <CleanersCard fav={favHandler} />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard fav={favHandler} />
            <CleanersCard fav={favHandler} />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard fav={favHandler} />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard fav={favHandler} />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard />
            <CleanersCard />
          </>
        )}
      </section>

      <h2 className="mt-[100px]">
        I'd use the design in Google Discoveries on mobile as my cards design
        here with Action Buttons - And an infinite scroll
      </h2>
    </div>
  );
};

export default Cleaners;
