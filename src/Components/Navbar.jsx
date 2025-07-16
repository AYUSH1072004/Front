import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenu, setIsMenu] = React.useState(false);

  const menuToggle = () => {
    setIsMenu(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenu(false);
  };

  return (
    <>
      <header id='navbar' className='bg-bodyColor fixed top-0 left-0 w-full z-50'>
        <nav className='flex justify-between items-center h-16 sm:h-20 px-10'>
          <div className='font-DancingScript text-2xl sm:text-3xl'>Perfume.com</div>

          {/* Menu Panel */}
          <div
            id='nav-menu'
            className={`
              bg-cardColor absolute top-0 ${isMenu ? 'left-0' : 'left-[-100%]'} w-full min-h-[80vh]
              transform transition-all duration-300 ease-in-out
              flex justify-center items-center
              md:static md:min-h-fit md:w-auto md:bg-transparent
            `}
          >
            <ul className='flex md:flex-row flex-col items-center gap-6' onClick={closeMenu}>
              <li><NavLink to='/' className='nav-links active'>Home</NavLink></li>
              <li><NavLink to='/product' className='nav-links'>Product's</NavLink></li>
              <li><NavLink to='/mens' className='nav-links'>Men's</NavLink></li>
              <li><NavLink to='/humans' className='nav-links'>Human's</NavLink></li>
              <li><NavLink to='/signup' className='nav-links'>SignUp</NavLink></li>
              <li><NavLink to='/signin' className='nav-links'>SignIn</NavLink></li>
            </ul>
          </div>

          {/* Toggle Button (only visible on mobile) */}
          <div className='text-xl sm:text-3xl cursor-pointer z-50 md:hidden'>
            <i
              className={`${isMenu ? 'ri-close-fill' : 'ri-apps-fill'} md:hidden`}
              id='menu-btn'
              onClick={menuToggle}
            ></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
