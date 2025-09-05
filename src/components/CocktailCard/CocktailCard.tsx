import { Link } from "react-router-dom";
import type { Cocktail } from "../../type";
import FALLBACK_BROKEN_IMAGE from "../../assets/images/mango.jpg";

interface CocktailCardProps {
  cocktail: Cocktail;
}
export default function CocktailCard({ cocktail }: CocktailCardProps) {
  const imageUrl = cocktail.thumbnail;

  return (
    <div className="item-card p-5  align-center md:px-[15px] md:py-[25px] xl:p-6">
      <img
        src={imageUrl}
        alt={cocktail.name}
        className="item-image"
        onError={(e) => {
          e.currentTarget.src = FALLBACK_BROKEN_IMAGE;
          e.currentTarget.onerror = null;
        }}
      />
      <div className="flex flex-col items-start w-full mb-4">
        <h3 className="item-title md:text-lg">{cocktail.name}</h3>
      </div>
      <div className="flex items-center w-full mt-auto">
        <Link
          to={`/cocktail/${encodeURIComponent(cocktail.id)}`}
          className="learn-more-btn"
        >
          <button type="button">Show Recipe</button>
        </Link>
      </div>
    </div>
  );
}
