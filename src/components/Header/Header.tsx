import { NavLink } from "react-router-dom";
import dishLogo from "../../assets/icons/dish.svg";
import clsx from "clsx";

export default function Header() {
  return (
    <header className="header-main">
      <div className="header-content-wrapper">
        <nav className="nav-wrapper">
          <NavLink to="/" className="logo-link">
            <div className="logo-text">Good Food</div>
            <img src={dishLogo} alt="logo" className="header-logo" />
          </NavLink>
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
