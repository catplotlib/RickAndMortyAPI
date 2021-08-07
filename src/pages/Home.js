import React, { useState, useEffect } from "react";
import Card from "../components/Card";
const url = "https://rickandmortyapi.com/api/character?name=";
const Home = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(randomCharacter);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, [searchTerm]);

  const getData = async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      setAllData(data.results);
      setFilteredData(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    setSearchTerm(value);
    let result = [];
    if (filteredData.length < 1) {
      setError(true);
    } 
    else {
      result = allData.filter((data) => {
        return data.name.search(value) != -1;
      });
      setFilteredData(result);
    }
  };

  if (error) {
    return (
      <div className="container mx-auto px-4">
        <div className="flex w-full flex-col items-center mt-16 min-h-screen">
          <form>
            <input
              className="shadow w-64 sm:w-auto md:w-96 appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              onChange={(event) => handleSearch(event)}
              placeholder="Search a character"
            />
          </form>
          <h5
            style={{ fontFamily: "Righteous" }}
            className="text-green-800 text-3xl md:text-4xl"
          >
            No characters found.
          </h5>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4">
      <div className="flex w-full flex-col items-center mt-16 min-h-screen">
        <div>
          <form>
            <input
              className="shadow w-64 sm:w-auto md:w-96 appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              onChange={(event) => handleSearch(event)}
              placeholder="Search a character"
            />
          </form>
        </div>
        <div className="mt-16 mb-16">
          <h5
            style={{ fontFamily: "Righteous" }}
            className="text-green-800 text-3xl md:text-4xl"
          >
            Characters
          </h5>
        </div>
        <div className="gap-x-7 grid grid-cols-1 md:grid-cols-3">
          {/* key={index} {...value} */}
          {filteredData.map((value, index) => {
            return <Card key={index} {...value} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
