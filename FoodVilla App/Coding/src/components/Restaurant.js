import { IMG_CDN_URL } from "../../constants";

const Restaurant = ({
  cloudinaryImageId,
  name,
  lastMileTravelString,
  cuisines,
}) => {
  //console.log(props);
  return (
    <div className="w-[200] h-[250] m-2 p-2 bg-pink-100">
      <img className="max-w-full" src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2 className="text-sm font-bold">{name}</h2>
      <h3 className="text-sm">{lastMileTravelString} minutes</h3>
      <h4 className="text-sm">{cuisines.join(", ")}</h4>
    </div>
  );
};

export default Restaurant;
