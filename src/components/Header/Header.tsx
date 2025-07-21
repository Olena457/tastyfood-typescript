import { NavLink } from "react-router-dom";

export default function Header() {
  const baseLinkClasses =
    "px-4 py-2 rounded-md transition-colors duration-200 ease-in-out";
  const activeLinkClasses = "bg-blue-600 text-white shadow-md";
  const inactiveLinkClasses =
    "text-gray-700 hover:bg-gray-200 hover:text-gray-900";
  return (
    <header className="bg-yellow-500 shadow-sm py-3">
      <nav className="flex justify-center gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseLinkClasses} ${
              isActive ? activeLinkClasses : inactiveLinkClasses
            }`
          }
        >
          All Recipes
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `${baseLinkClasses} ${
              isActive ? activeLinkClasses : inactiveLinkClasses
            }`
          }
        >
          Favorites Recipe
        </NavLink>
      </nav>
    </header>
  );
}
