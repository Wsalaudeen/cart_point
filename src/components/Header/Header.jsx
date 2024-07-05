import Hamburger from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="header">
      <div className="logo">
        <h1>CartPoint</h1>
      </div>
      <div className="hamburger-wrapper">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          aria-label="Toggle menu"
          className="hamburger"
        />
      </div>
    </nav>
  );
};

export default Header;
