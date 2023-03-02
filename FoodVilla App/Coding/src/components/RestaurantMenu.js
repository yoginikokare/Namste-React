import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, RESTAURANT_MENU_API, ResMenu } from "../../constants";

const RestaurantMenu = () => {
  const params = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  console.log(params);

  async function getRestaurantDetails() {
    const data = await fetch(RESTAURANT_MENU_API);
    const json = await data.json();
    //setTimeout(() => {
      setRestaurantMenu(json.data);
   // }, 100);
  }

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  if(!restaurantMenu) {
    return;
  }

  return (
    <div style={{ display: "flex", padding: "10px"}}>
      <div className="px-5">
        <h1 className="p-5 text-xl font-bold">Restaurant Id: {restaurantMenu.id}</h1>
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
