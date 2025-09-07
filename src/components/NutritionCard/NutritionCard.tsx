import type { NutritionItem } from "../../type";

interface NutritionCardProps {
  item: NutritionItem;
}

const NutritionCard: React.FC<NutritionCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-300 bg-[#f5f5dc] shadow-lg p-6 md:p-8  lg:p-12  2xl:p-20 w-full min-w-[230px]  md:w-[450px]  lg:w-[500px] max-w-[550px] ">
      <h3 className="font-semibold text-2xl leading-[133%] text-gray-900 mb-4 capitalize">
        {item.name}
      </h3>
      <ul className="list-none p-0 m-0 w-full">
        <li className="flex justify-between w-full font-normal text-base leading-relaxed text-gray-800 pt-[5px] border-b border-dashed border-gray-800">
          <span className="font-bold text-gray-700">Total Fat:</span>
          <span className="text-gray-900">{item.fat_total_g} g</span>
        </li>
        <li className="flex justify-between w-full font-normal text-base leading-relaxed text-gray-800 pt-[5px] border-b border-dashed border-gray-800">
          <span className="font-bold text-gray-700">Saturated Fat:</span>{" "}
          <span className="text-gray-900">{item.fat_saturated_g} g</span>
        </li>
        <li className="flex justify-between w-full font-normal text-base leading-relaxed text-gray-800 pt-[5px] border-b border-dashed border-gray-800">
          <span className="font-bold text-gray-700">Sodium:</span>{" "}
          <span className="text-gray-900">{item.sodium_mg} mg</span>
        </li>
        <li className="flex justify-between w-full font-normal text-base leading-relaxed text-gray-800 pt-[5px] border-b border-dashed border-gray-800">
          <span className="font-bold text-gray-700">Potassium:</span>{" "}
          <span className="text-gray-900">{item.potassium_mg} mg</span>
        </li>
        <li className="flex justify-between w-full font-normal text-base leading-relaxed text-gray-800 pt-[5px] border-b border-dashed border-gray-800">
          <span className="font-bold text-gray-700">Cholesterol:</span>{" "}
          <span className="text-gray-900">{item.cholesterol_mg} mg</span>
        </li>
        <li className="flex justify-between w-full font-normal text-base leading-relaxed text-gray-800 pt-[5px] border-b border-dashed border-gray-800">
          <span className="font-bold text-gray-700">Total Carbohydrates:</span>{" "}
          <span className="text-gray-900">{item.carbohydrates_total_g} g</span>
        </li>
        <li className="flex justify-between w-full font-normal text-base leading-relaxed text-gray-800 pt-[5px] border-b border-dashed border-gray-800">
          <span className="font-bold text-gray-700">Fiber:</span>{" "}
          <span className="text-gray-900">{item.fiber_g} g</span>
        </li>
        <li className="flex justify-between w-full font-normal text-base leading-relaxed text-gray-800 pt-[5px] last:border-b-0">
          <span className="font-bold text-gray-700">Sugar:</span>{" "}
          <span className="text-gray-900">{item.sugar_g} g</span>
        </li>
      </ul>
    </div>
  );
};

export default NutritionCard;
