import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { JellyTriangle } from "@uiball/loaders";

function AllBeers() {
  const [beerList, setBeerList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredBeers, setFilteredBeers] = useState([]);

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearch(query);
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
      );
      setFilteredBeers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeerList(response.data);
      setIsLoading(false);
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilteredBeers(beerList);
    } else {
      const filteredArr = beerList.filter((eachBeer) =>
        eachBeer.name.includes(search)
      );
      setFilteredBeers(filteredArr);
    }
  }, [search, beerList]);

  return (
    <div>
      {isLoading === true ? (
        <JellyTriangle size={60} speed={1.75} color="black" />
      ) : (
        <div>
          <input type="text" value={search} onChange={handleSearch} />
          {filteredBeers.length > 0 ? (
            filteredBeers.map(
              ({ _id, image_url, name, tagline, contributed_by }) => {
                return (
                  <div key={_id}>
                    <img src={image_url} alt="beer" width="50em" />
                    <h3>{name}</h3>
                    <p>{tagline}</p>
                    <p>Created by: {contributed_by}</p>
                    <Link to={`/beers/${_id}`}>Details</Link>
                  </div>
                );
              }
            )
          ) : (
            <p>No beers found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default AllBeers;
