import classNames from 'classnames';
import { useEffect, useState } from 'react';
import menuItems from '../utils/menuItems';
import styles from '../styles/components/Header.module.scss';

function Header () {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const menuIcon = document.querySelector('#menu-bars');
      menuIcon.classList.add('fa-bars');
      menuIcon.classList.remove('fa-times');
      setToggleMenu(false);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const sectionList = document.querySelectorAll('section');
      sectionList.forEach((section) => {
        const id = section.getAttribute('id');
        const menuItem = document.querySelector(`header nav a[href="#${id}"]`);
        if (menuItem) {
          const scrollY = window.scrollY;
          const sectionTop = section.offsetTop - 150;
          const activeLinkClass = classNames(styles['active-link']);
          if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + section.offsetHeight
          ) {
            menuItem.classList.add(activeLinkClass);
          } else {
            menuItem.classList.remove(activeLinkClass);
          }
        }
      });
    });
  }, []);

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu);
    const menuIcon = document.querySelector('#menu-bars');
    menuIcon.classList.toggle('fa-bars', toggleMenu);
    menuIcon.classList.toggle('fa-times', !toggleMenu);
  };

  return (
    <header className={styles.header}>
      <img src='/images/svg-logo.svg' alt="logo" className={styles.header__logo}>
      </img>
      <nav
        id='nav'
        className={classNames(styles.header__nav, {
          [styles['show-menu']]: toggleMenu
        })}
      >
        {menuItems.map((item) => {
          return (
            <a
              key={item.id}
              href={item.href}
              className={classNames(styles['header__nav-link'], {
                [styles['active-link']]: item.active
              })}
              onClick={onMenuClick}
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </a>
          );
        })}
      </nav>
      <div className={styles.header__icons}>
        <span
          id='menu-bars'
          className={classNames('fas fa-bars', styles.menu)}
          onClick={onMenuClick}
        />
      </div>
    </header>
  );
}

export default Header;
