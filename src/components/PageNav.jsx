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
            <NavLink to="/contact-us">צור קשר</NavLink>
          </li>
          <li>
            <NavLink to="/vision">חזון החברה</NavLink>
          </li>
          <li>
            <NavLink to="/activities">תחומי עיסוק</NavLink>
          </li>
          <li>
            <NavLink to="/">בית</NavLink>
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
