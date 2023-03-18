import AddFood from "../components/admin/addFood/AddFood";
import FoodInformation from "../components/admin/foodInformation/FoodInformation";
import UpdateFood from "../components/admin/updateFood/UpdateFood";

const FoodMng = () => {
  return (
    <div className="food-mng-page">
      <AddFood />
      <FoodInformation />
    </div>
  );
};
export default FoodMng;
