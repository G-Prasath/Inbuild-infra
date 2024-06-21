import React, { useState } from 'react';
import { NAV_LINKS } from '../data/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINK_CLASSES = "text-zinc-500 dark:text-zinc-300 hover:border-zinc-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium";
const DROPDOWN_ITEM_CLASSES = "block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isMobileProductsMenuOpen, setIsMobileProductsMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProductsMenu = () => setIsProductsMenuOpen(!isProductsMenuOpen);
  const toggleMobileProductsMenu = () => setIsMobileProductsMenuOpen(!isMobileProductsMenuOpen);

  return (
    <nav className="bg-white dark:bg-zinc-800 shadow-md">

      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between items-center w-full">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="https://placehold.co/40x40" alt="Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {NAV_LINKS.map((link, index) => (
                <NavItem key={index} link={link} isProductsMenuOpen={isProductsMenuOpen} toggleProductsMenu={toggleProductsMenu} />
              ))}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button onClick={toggleMobileMenu} className="bg-zinc-50 dark:bg-zinc-900 inline-flex items-center justify-center p-2 rounded-md text-zinc-400 dark:text-zinc-300 hover:text-zinc-500 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
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
                <MobileNavItem key={index} link={link} isMobileProductsMenuOpen={isMobileProductsMenuOpen} toggleMobileProductsMenu={toggleMobileProductsMenu} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavItem = ({ link, isProductsMenuOpen, toggleProductsMenu }) => {
  if (link.subMenu.length > 0) {
    return (
      <div className="relative">
        <button onClick={toggleProductsMenu} className={NAV_LINK_CLASSES + " flex items-center"}>
          {link.label}
          <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <AnimatePresence>
          {isProductsMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute z-10 mt-2 min-w-48 bg-white dark:bg-zinc-700 rounded-md py-1"
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

const MobileNavItem = ({ link, isMobileProductsMenuOpen, toggleMobileProductsMenu }) => {
  if (link.subMenu.length > 0) {
    return (
      <div className="sticky bg-transparent top-0 left-0">
        <button onClick={toggleMobileProductsMenu} className="w-full text-left block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300">
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
                <a key={index} href={subLink.href} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300">{subLink.label}</a>
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
