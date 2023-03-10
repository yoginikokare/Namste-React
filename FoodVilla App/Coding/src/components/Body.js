import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { RESTAURANT_lIST_API, RESTAURANT_LIST } from "../../constants";
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
    const data = await fetch(RESTAURANT_lIST_API);
    //setTimeout(() => {
      const restaurant = await data.json();
     // const restaurant = RESTAURANT_LIST;
      setRestaurantList(restaurant?.data?.cards[2]?.data?.data?.cards);
      setFilterdRestaurant(restaurant?.data?.cards[2]?.data?.data?.cards);
      console.log(restaurant);
    //}, 1000);  
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
      <div className="bg-blue-200 p-2">
        <input type="text" className="search-input" value={searchText} onChange={(e)=> {
          setSearchText(e.target.value);
        }}/>
        <button type="button" className="bg-red-100 px-2" onClick={()=>{
          const data = filterData(searchText, allRestaurant);
          setFilterdRestaurant(data);
        }}>
          search
        </button>
      </div>
      <h1>{searchText}</h1>
      <div className="flex flex-wrap item-stretch">
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
