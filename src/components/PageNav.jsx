import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import Logo from './Logo';
import styles from './PageNav.module.css';

function PageNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuIconClasses = `${isOpen ? 'open' : ''}`;
  console.log(menuIconClasses);

  return (
    <header>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <Logo />
        <ul>
          <li>
            <NavLink to="/">צור קשר</NavLink>
          </li>
          <li>
            <NavLink to="/test">המוקד</NavLink>
          </li>
          <li>
            <NavLink to="/test">סוגי הבטחה</NavLink>
          </li>
          <li>
            <NavLink to="/test">אודות</NavLink>
          </li>
          <li>
            <NavLink to="/test">בית</NavLink>
          </li>
        </ul>
        <div
          className={`bx bx-${isOpen ? 'x' : 'menu'} ${
            styles.burgerIcon
          }`}
          onClick={toggleMenu}
        ></div>
      </nav>
    </header>
  );
}

export default PageNav;
