import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, ResMenu } from "../../constants";

const RestaurantMenu = () => {
  const params = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  console.log(params);

  async function getRestaurantDetails() {
    //const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=19.0138356&lng=73.1013971&menuId=359507", {credentials: "include"});
    //const resMenu = await data.json();
    setTimeout(() => {
      setRestaurantMenu(ResMenu.data);
    }, 100);
  }

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  if(!restaurantMenu) {
    return;
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h1>Restaurant Id: {restaurantMenu.id}</h1>
        <img src={IMG_CDN_URL + restaurantMenu.cloudinaryImageId}></img>
        <h2>{restaurantMenu.name}</h2>
        <h3>{restaurantMenu.city}</h3>
        <h3>{restaurantMenu.area}</h3>
        <h3>{restaurantMenu.avgrating}</h3>
        <h3>{restaurantMenu.costForTwoMsg}</h3>
      </div>
      <div>
        {Object.values(restaurantMenu?.menu?.items).map((item)=><li key={item.id}>{item.name}</li>)}
      </div>
    </div>
  );
};

export default RestaurantMenu;
