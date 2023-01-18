import { useState } from "react";
import Restaurant from "./Restaurant";
import { restaurantList } from "../../constants";

function filterData(searchText, restaurantData) {
  if(searchText=="") {
    return restaurantData;
  }
  const restaurants = restaurantData.filter((restaurant)=>{
    return restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase());
  })
  return restaurants;
}

const Body = () => {
  const [searchText, setSearchText] = useState("king");
  const [allRestaurant, setRestaurantList]= useState(restaurantList);
  const [filteredRestaurant, setFilterdRestaurant] = useState(restaurantList);
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" className="search-input" value={searchText} onChange={(e)=> {
          setSearchText(e.target.value);
        }}/>
        <button type="button" className="search-btn" onClick={()=>{
          const data = filterData(searchText, allRestaurant);
          setFilterdRestaurant(data);
        }}>
          search
        </button>
      </div>
      <h1>{searchText}</h1>
      <div className="resaturant-list">
        {
          filteredRestaurant.map((restaurant) => (
            <Restaurant {...restaurant.data} key={restaurant.data.id} />
          ))}
      </div>
    </div>
  );
};

export default Body;
