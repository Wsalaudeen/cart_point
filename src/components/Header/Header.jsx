import Hamburger from "hamburger-react";
import React, { useRef, useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const firstMenuItemRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    if (isOpen && firstMenuItemRef.current) {
      firstMenuItemRef.current.focus();
    } else if (!isOpen && hamburgerRef.current) {
      hamburgerRef.current.focus();
    }
  }, [isOpen]);

  // handle keyboard navigation for menu items mainly for keyboard users
  const handleMenuItemKey = (event) => {
    const menuItems = document.querySelectorAll('[role="menuitem"]');
    const activeElement = document.activeElement;
    const currentIndex = Array.from(menuItems).indexOf(activeElement);

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (currentIndex < menuItems.length - 1) {
          menuItems[currentIndex + 1].focus();
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (currentIndex > 0) {
          menuItems[currentIndex - 1].focus();
        }
        break;
      case "Escape":
        setOpen(false); // Close the menu on Escape key press
        break;
      default:
        break;
    }
  };

  return (
    <nav className="header" role="navigation" aria-label="Main Navigation">
      <div className="logo">
        <h1>CartPoint</h1>
      </div>
      <div className="menu-icon">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className="hamburger"
          ref={hamburgerRef}
        />
      </div>
      <div className={`navbar-elements ${isOpen ? "active" : ""}`} role="menu">
        <NavLink
          to="/"
          aria-label="Home"
          role="menuitem"
          tabIndex={isOpen ? 0 : -1} //Enusre focusability based on menu state
          onKeyDown={handleMenuItemKey} // handle arrow keys and Escape key
          ref={firstMenuItemRef} // Reference the first menu item
        >
          Home
        </NavLink>

        <NavLink
          to="/post"
          aria-label="Post"
          role="menuitem"
          tabIndex={isOpen ? 0 : -1}
          onKeyDown={handleMenuItemKey}
        >
          Post
        </NavLink>

        <NavLink
          to="/contact"
          aria-label="Contact"
          role="menuitem"
          tabIndex={isOpen ? 0 : -1}
          onKeyDown={handleMenuItemKey}
        >
          Contact
        </NavLink>

        <NavLink
          to="/register"
          aria-label="Register"
          role="menuitem"
          tabIndex={isOpen ? 0 : -1}
          onKeyDown={handleMenuItemKey}
        >
          Register
        </NavLink>

        <div className="cart">
          <NavLink
            to="cart"
            aria-label="shopping Cart"
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
            onKeyDown={handleMenuItemKey}
          >
            <FaShoppingCart size={30} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
