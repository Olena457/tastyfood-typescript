import type { Cocktail } from "../../type";

import FALLBACK_BROKEN_IMAGE from "../../assets/images/def.jpg";

interface CocktailCardProps {
  cocktail: Cocktail;
}

export default function CocktailCard({ cocktail }: CocktailCardProps) {
  const imageUrl = cocktail.thumbnail;

  return (
    <div className="item-card flex flex-col h-[560px] sm:h-[580px] md:h-[600px] lg:h-[620px] xl:h-[640px]">
      <img
        src={imageUrl}
        alt={cocktail.name}
        className="item-image mb-4"
        onError={(e) => {
          e.currentTarget.src = FALLBACK_BROKEN_IMAGE;
          e.currentTarget.onerror = null;
        }}
      />
      <h2 className="item-title mb-2 line-clamp-2 px-4 text-center">
        {cocktail.name}
      </h2>
      <div className="px-4 py-2 overflow-y-auto custom-scrollbar flex-grow">
        <div className="text-center mb-4">
          <strong className="block text-base font-semibold text-gray-800 mb-1">
            Ingredients:
          </strong>
          <ul className="list-disc list-inside">
            {cocktail.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-1 text-sm">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mb-4">
          <strong className="block text-base font-semibold text-gray-800 mb-1 ">
            Instructions:
          </strong>
          <p className="text-sm text-gray-600">{cocktail.instructions}</p>
        </div>
      </div>
    </div>
  );
}
