import React, { useState } from 'react';

function Avateer({user}) {
  const [isOpen, setIsOpen] = useState(false);
    console.log(user);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hs-dropdown relative inline-flex">
      <button
        id="hs-dropdown-custom-trigger"
        type="button"
        onClick={toggleMenu}
        className={`hs-dropdown-toggle py-1 pl-1 pr-3 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800`}
      >
        <img
          className="w-8 h-auto rounded-full"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400">{user?.displayName.split(' ')[0]}</span>
        
      </button>

      <div
        className={`hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-${isOpen ? '100' : '0'} hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700`}
        aria-labelledby="hs-dropdown-custom-trigger"
      >
        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
          Newsletter
        </a>
        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover.bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-gray-300" href="#">
          Purchases
        </a>
        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover-bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-gray-300" href="#">
          Downloads
        </a>
        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover-bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-gray-300" href="#">
          Team Account
        </a>
      </div>
    </div>
  );
}

export default Avateer;
