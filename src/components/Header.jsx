'use client'
import Link from 'next/link';
import { useState } from 'react';
import '../Styles/Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container custom-container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <Link href="/" className="logo-link">
              <span className="logo-text">Saturnova</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="contact-button-container">
            <Link href="/contact" className="contact-button global-btn">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button
              onClick={toggleMenu}
              className="menu-toggle"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            <Link href="/" className="mobile-nav-link">
              Home
            </Link>
            <Link href="/about" className="mobile-nav-link">
              About
            </Link>
            <Link href="/services" className="mobile-nav-link">
              Services
            </Link>
            <Link href="/portfolio" className="mobile-nav-link">
              Portfolio
            </Link>
            <Link href="/contact" className="mobile-nav-link mobile-contact">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}