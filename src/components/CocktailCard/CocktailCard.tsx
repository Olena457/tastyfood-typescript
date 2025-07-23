import { useState } from "react";
import type { Cocktail } from "../../type";

// const FALLBACK_BROKEN_IMAGE = ...; // **REMOVED**

interface CocktailCardProps {
  cocktail: Cocktail;
}

export default function CocktailCard({ cocktail }: CocktailCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // const imageUrl = cocktail.thumbnail; // **REMOVED**

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center relative overflow-hidden h-[500px] sm:h-[550px] md:h-[580px] lg:h-[600px] 2xl:h-[650px]">
      {/* <img // **REMOVED**
        src={imageUrl}
        alt={cocktail.name}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
        onError={(e) => {
          e.currentTarget.src = FALLBACK_BROKEN_IMAGE;
          e.currentTarget.onerror = null;
        }}
      /> */}
      <div className="p-4 flex flex-col justify-between flex-grow w-full">
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          {cocktail.name}
        </h2>

        <div className="text-gray-700 text-sm mb-2 text-left w-full">
          <strong className="block text-base font-semibold text-gray-800 mb-1">
            Ingredients:
          </strong>
          <ul className="list-disc list-inside px-4 max-h-[100px] overflow-y-auto">
            {cocktail.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-1 text-sm">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-gray-600 text-sm mt-4 text-left w-full flex-grow relative">
          <strong className="block text-base font-semibold text-gray-800 mb-1">
            Instructions:
          </strong>
          <p
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? "max-h-full" : "max-h-[120px]"
            }`}
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: isExpanded ? "unset" : 6,
            }}
          >
            {cocktail.instructions}
          </p>
          {!isExpanded && cocktail.instructions.length > 200 && (
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          )}
        </div>

        <button
          onClick={toggleExpand}
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors self-center w-full"
        >
          {isExpanded ? "Show Less" : "Learn More"}
        </button>
      </div>
    </div>
  );
}
