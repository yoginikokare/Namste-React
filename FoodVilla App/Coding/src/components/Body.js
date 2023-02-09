import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { restaurantList } from "../../constants";
import { Link } from "react-router-dom";

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
  const [searchText, setSearchText] = useState("");
  const [allRestaurant, setRestaurantList]= useState([]);
  const [filteredRestaurant, setFilterdRestaurant] = useState([]);

  console.log(useState());
  
  useEffect(()=>{
    getRestaurant();
  }, []);

  async function getRestaurant() {
    //due to cors error commeting this api call but its work with cors chrome extenstion
    //const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0138356&lng=73.1013971&page_type=DESKTOP_WEB_LISTING');
    setTimeout(() => {
      const restaurant = restaurantList;//await data.json();
      setRestaurantList(restaurant);
      setFilterdRestaurant(restaurant);
      console.log(restaurant);
    }, 1000);  
  }

  console.log("render()");

  //Conditional Rendering
  //If restaurant is thr => then load actual UI
  //If resturant is not thr => load shimmer  
  if(allRestaurant.length === 0) {
    return (<Shimmer/>);
  }

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
          filteredRestaurant.length === 0 ?  (<h1>No Filter Record Found</h1>) : 
          filteredRestaurant.map((restaurant) => (
            <Link to={'/restaurant/' + restaurant.data.id} key={restaurant.data.id}><Restaurant {...restaurant.data}/></Link>
        ))
        }
      </div>
    </div>
  );
};

export default Body;
