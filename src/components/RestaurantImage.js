import { RES_IMAGES_URL } from "../utils/constants";

const RestaurantImage = ({ id }) => {
  return (
    <div className="image-container w-40 h-40 object-cover overflow-hidden border-2 border-slate-600">
      <img className="w-60" src={RES_IMAGES_URL + id} alt="restaurant image"></img>
    </div>
  );
};

export default RestaurantImage;
