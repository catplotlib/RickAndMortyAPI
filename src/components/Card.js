import React from "react";
var d = "";
var a = "";
const Card = ({ key, id, name, status, species, image }) => {
  if (status === "Alive") {
    d = "🟢";
  } else {
    d = "🔴";
  }
  if (species === "Human") {
    a = "🧍";
  } else if (species === "Animal") {
    a = "🐻";
  } else {
    a = "👽";
  }

  return (
    <div>
      <div className="container m-4 mx-auto p-9 bg-white max-w-xs rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
        <img className="rounded-xl" src={image} alt="" />
        <div className="flex justify-between items-center">
          <div>
            <h1 className="mt-5 text-2xl font-semibold">{name}</h1>
            <p className="mt-4">
              {a} {species}
            </p>
            <p className="mt-2">
              {d} {status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
