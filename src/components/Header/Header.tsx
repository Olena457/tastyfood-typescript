import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Header() {
  return (
    <header className="header-main">
      <div className="header-content-wrapper">
        <nav className="nav-wrapper">
          <NavLink
            to="/"
            className="w-full-logo text-center  bg-gradient-to-r from-[#5f8b5a] via-[#dff5a0] to-[#5f8b5a] px-2  rounded-full"
          >
            <h6 className="text-[#5f8b5a] lg:text-3xl font-script py-2 px-2">
              F & D
            </h6>
          </NavLink>

          <NavLink
            to="/home"
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
          <NavLink
            to="/nutrition"
            className={({ isActive }) =>
              clsx("nav-link-base", {
                "nav-link-active": isActive,
                "nav-link-inactive": !isActive,
              })
            }
          >
            Nutrition
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
