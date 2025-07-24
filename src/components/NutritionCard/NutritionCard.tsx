import type { NutritionItem } from "../../type";

interface NutritionCardProps {
  item: NutritionItem;
}

const NutritionCard: React.FC<NutritionCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-5 w-full max-w-lg box-border">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 capitalize">
        {item.name}
      </h3>
      <ul className="list-none p-0 m-0">
        <li className="flex justify-between py-2 border-b border-dashed border-gray-200 last:border-b-0">
          <span className="font-bold text-gray-700">Total Fat:</span>{" "}
          <span className="text-gray-900">{item.fat_total_g} g</span>
        </li>
        <li className="flex justify-between py-2 border-b border-dashed border-gray-200 last:border-b-0">
          <span className="font-bold text-gray-700">Saturated Fat:</span>{" "}
          <span className="text-gray-900">{item.fat_saturated_g} g</span>
        </li>
        <li className="flex justify-between py-2 border-b border-dashed border-gray-200 last:border-b-0">
          <span className="font-bold text-gray-700">Sodium:</span>{" "}
          <span className="text-gray-900">{item.sodium_mg} mg</span>
        </li>
        <li className="flex justify-between py-2 border-b border-dashed border-gray-200 last:border-b-0">
          <span className="font-bold text-gray-700">Potassium:</span>{" "}
          <span className="text-gray-900">{item.potassium_mg} mg</span>
        </li>
        <li className="flex justify-between py-2 border-b border-dashed border-gray-200 last:border-b-0">
          <span className="font-bold text-gray-700">Cholesterol:</span>{" "}
          <span className="text-gray-900">{item.cholesterol_mg} mg</span>
        </li>
        <li className="flex justify-between py-2 border-b border-dashed border-gray-200 last:border-b-0">
          <span className="font-bold text-gray-700">Total Carbohydrates:</span>{" "}
          <span className="text-gray-900">{item.carbohydrates_total_g} g</span>
        </li>
        <li className="flex justify-between py-2 border-b border-dashed border-gray-200 last:border-b-0">
          <span className="font-bold text-gray-700">Fiber:</span>{" "}
          <span className="text-gray-900">{item.fiber_g} g</span>
        </li>
        <li className="flex justify-between py-2 border-b border-dashed border-gray-200 last:border-b-0">
          <span className="font-bold text-gray-700">Sugar:</span>{" "}
          <span className="text-gray-900">{item.sugar_g} g</span>
        </li>
      </ul>
    </div>
  );
};

export default NutritionCard;
