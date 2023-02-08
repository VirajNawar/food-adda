import { useState } from "react";
import { restrauntList } from "../config";
import ShimmerCard from "./ShimmerCard";


const ShimmerUi = () => {
  const [filteredRestaurantData, setFilteredRestaurantData] =
    useState(restrauntList);
  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search Here" />
        <button>Search</button>
      </div>

      <div className="body">
          {filteredRestaurantData.map((list) => {
            return <ShimmerCard {...list.data} key={list.data.id}  />;
          })}
        </div>
    </>
  );
};

export default ShimmerUi;
