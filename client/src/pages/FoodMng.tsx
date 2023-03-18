import AddFood from "../components/admin/addFood/AddFood";
import FoodInformation from "../components/admin/foodInformation/FoodInformation";
import UpdateFood from "../components/admin/updateFood/UpdateFood";

const FoodMng = () => {
  return (
    <div>
      <section>
        <AddFood />
        <UpdateFood />
      </section>
      <section>
        <FoodInformation/>
      </section>
    </div>
  );
};
export default FoodMng;
