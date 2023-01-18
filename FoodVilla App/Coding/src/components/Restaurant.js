import { IMG_CDN_URL } from "../../constants";

const Restaurant = ({
  cloudinaryImageId,
  name,
  lastMileTravelString,
  cuisines,
}) => {
  //console.log(props);
  return (
    <div className="restaurant-card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{lastMileTravelString} minutes</h3>
      {<h3>{cuisines.join(", ")}</h3>}
    </div>
  );
};

export default Restaurant;
