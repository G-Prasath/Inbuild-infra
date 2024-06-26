import React, { useState } from 'react';
import { NAV_LINKS } from '../data/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const NAV_LINK_CLASSES = "text-zinc-500 dark:text-zinc-300 hover:border-zinc-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-md font-medium";
const DROPDOWN_ITEM_CLASSES = "block px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-800 hover:text-white dark:hover:bg-zinc-800 hover:border-zinc-300";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-white dark:bg-zinc-1000 shadow-lg sticky top-0 z-[999999]">

      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-auto">
          <div className="flex justify-between items-center w-full">
            <div className="flex-shrink-0 flex items-center py-2">
              <img className="w-[50px]" src="/logo.png" alt="Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {NAV_LINKS.map((link, index) => (
                <NavItem
                  key={index}
                  link={link}
                  isMenuOpen={hoveredMenu === index}
                  setHoveredMenu={() => setHoveredMenu(index)}
                  clearHoveredMenu={() => setHoveredMenu(null)}
                />
              ))}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="bg-zinc-50 dark:bg-zinc-900 inline-flex items-center justify-center p-2 rounded-md text-zinc-400 dark:text-zinc-300 hover:text-zinc-500 dark:hover:text-white hover:bg-zinc-100 ">
              <RiMenu3Fill className={`text-[30px] text-zinc-800 ${isMobileMenuOpen ? "hidden" : ""}`} />
              <IoClose className={`text-[30px] text-zinc-800 ${isMobileMenuOpen ? "" : "hidden"}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sm:hidden"
          >
            <div className="pt-2 pb-3 space-y-1">
              {NAV_LINKS.map((link, index) => (
                <MobileNavItem key={index} link={link} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

const NavItem = ({ link, isMenuOpen, setHoveredMenu, clearHoveredMenu }) => {
  if (link.subMenu.length > 0) {
    return (
      <div
        className="relative"
        onMouseEnter={setHoveredMenu}
        onMouseLeave={clearHoveredMenu}
      >
        <button className={NAV_LINK_CLASSES + " flex items-center"}>
          {link.label}
          <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute z-10 mt-0 min-w-48 bg-white dark:bg-zinc-700 rounded-md py-1"
            >
              {link.subMenu.map((subLink, index) => (
                <a key={index} href={subLink.href} className={DROPDOWN_ITEM_CLASSES}>{subLink.label}</a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return <a href={link.href} className={NAV_LINK_CLASSES}>{link.label}</a>;
};

const MobileNavItem = ({ link }) => {
  const [isMobileProductsMenuOpen, setIsMobileProductsMenuOpen] = useState(false);

  if (link.subMenu.length > 0) {
    return (
      <div className="sticky bg-transparent top-0 left-0">
        <button onClick={() => setIsMobileProductsMenuOpen(!isMobileProductsMenuOpen)} className="w-full text-left block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300">
          {link.label}
          <svg className="ml-2 h-5 w-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <AnimatePresence>
          {isMobileProductsMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-2 space-y-1"
            >
              {link.subMenu.map((subLink, index) => (
                <a key={index} href={subLink.href} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-800 hover:text-white dark:hover:bg-zinc-800 hover:border-zinc-300">{subLink.label}</a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return <a href={link.href} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300">{link.label}</a>;
};

export default Navbar;
