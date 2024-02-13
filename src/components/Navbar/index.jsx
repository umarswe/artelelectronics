import Logo from "../../assets/images/Shared/Artel-logo.svg";
import Language from "../../assets/images/Shared/Language.svg";
import Phone from "../../assets/images/Shared/Phone.svg";
import Menu from "../../assets/images/Shared/Menu.svg";
import Close from "../../assets/images/Shared/Close.svg";
import HiddenMenu from "../HiddenMenu";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarListRef = useRef(null);
  const menuTitleRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [menuTitle, setMenuTitle] = useState("Меню");
  const [menuIcon, setMenuIcon] = useState(Menu);

  const handleMenu = () => {
    setShowMenu(!showMenu);
    setMenuTitle(menuTitle === "Меню" ? "Закрыть" : "Меню");
    setMenuIcon(menuIcon === Menu ? Close : Menu);
    navbarListRef.current.classList.toggle("menu-visible");
    menuTitleRef.current.classList.toggle("menu__title-open");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (navbarListRef.current &&
          !navbarListRef.current.contains(event.target)) ||
        event.target.nodeName == "A" ||
        event.target.parentElement.nodeName == "A"
      ) {
        // TODO: improve menu closing later
        setTimeout(() => setShowMenu(false), 0);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className="navbar" ref={navbarListRef}>
      <div className="navbar__list">
        <div className="navbar__logo">
          <Link to="/">
            <img className="navbar__logo-image" src={Logo} alt="logo" />
          </Link>
          <span className="navbar__logo-stick"></span>
          <select className="navbar__logo-option">
            <option>Ташкент</option>
          </select>
        </div>

        <div className="navbar__info">
          <div className="navbar__contact">
            <img
              className="navbar__contact-image"
              src={Language}
              alt="Language"
            />
            <select className="navbar__contact-option">
              <option>RU</option>
              <option>EN</option>
              <option>UZ</option>
            </select>
            <img className="navbar__contact-phone" src={Phone} alt="Phone" />
            <p className="navbar__contact-info">+998 78 148-88-88</p>
          </div>

          <div className="navbar__buttons">
            <button className="navbar__buttons-business">Бизнес</button>
            <button
              className="navbar__buttons-menu"
              ref={menuTitleRef}
              onClick={handleMenu}
            >
              <span className="navbar__buttons-menu_title">{menuTitle}</span>
              <img src={menuIcon} alt="Menu" />
            </button>
          </div>
        </div>
      </div>

      {showMenu && <HiddenMenu />}
    </div>
  );
}

export default Navbar;
