import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Header() {
  return (
    <header className="header-main">
      <nav className="nav-wrapper">
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx("nav-link-base", {
              "nav-link-active": isActive,
              "nav-link-inactive": !isActive,
            })
          }
        >
          Food
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            clsx("nav-link-base", {
              "nav-link-active": isActive,
              "nav-link-inactive": !isActive,
            })
          }
        >
          Favorites
        </NavLink>
        <NavLink
          to="/cocktail"
          className={({ isActive }) =>
            clsx("nav-link-base", {
              "nav-link-active": isActive,
              "nav-link-inactive": !isActive,
            })
          }
        >
          Cocktails
        </NavLink>
      </nav>
    </header>
  );
}
