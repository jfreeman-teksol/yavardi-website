'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Logo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 549 124" style={{ height: '36px', width: 'auto' }}>
      <path fill="#000" d="M114.047.876H19.533c-7.64 0-13.858 6.218-13.858 13.858v94.532c0 7.64 6.219 13.858 13.858 13.858h94.533c7.64 0 13.858-6.218 13.858-13.858v-94.53c-.017-7.642-6.237-13.86-13.877-13.86"/>
      <path fill="#DBDBDB" d="m60.478 31.867 19.343 18.611H5.675V69.09H79.82L60.478 87.7h19.343l29.014-27.916L79.82 31.867z"/>
      <path fill="#000" d="m182.505 64.75 11.44-19.44q3.07-5.2 2.37-8.46-.7-3.25-5.07-3.25-.28 0-.28-.56t.28-.56q2.98 0 5.58.14 2.61.14 6.98.14 2.32 0 3.76-.14t3.49-.14q.19 0 .19.56t-.19.56q-1.86 0-4.46 1.62-2.61 1.63-5.21 4.42-2.61 2.79-4.84 6.51l-12.09 20.18Zm-5.39.37-14.14-21.95q-3.72-5.76-5.91-7.67-2.18-1.9-3.67-1.9-.28 0-.28-.56t.28-.56q1.4 0 2.88.14 1.49.14 2.89.14 2.6 0 5.58-.05 2.97-.04 5.62-.14 2.65-.09 4.33-.09.18 0 .18.56t-.18.56q-2.7 0-3.21 1.86-.51 1.86 1.16 4.37l13.39 21.11Zm-.56-3.35 10.32-.83v22.13q0 2.7.47 4.09.46 1.4 1.86 1.86 1.39.47 4.27.47.28 0 .28.56 0 .55-.28.55-2.41 0-5.34-.09-2.93-.09-6.47-.09-3.35 0-6.41.09-3.07.09-5.49.09-.19 0-.19-.55 0-.56.19-.56 2.88 0 4.32-.47 1.44-.46 1.96-1.86.51-1.39.51-4.09Z"/>
      <path fill="#000" d="M326.185 32.48q.28 0 .28.56t-.28.56q-3.44 0-6.46 2.97-3.02 2.98-4.88 8l-17.21 45.94q-.09.37-.97.37-.89 0-1.07-.37l-23.72-50.31q-1.58-3.26-3.25-4.93-1.68-1.67-3.82-1.67-.27 0-.27-.56t.27-.56q1.12 0 1.73.09.6.1 1.67.14 1.07.05 3.39.05 5.21 0 8.47-.05 3.25-.04 5.3-.14 2.04-.09 3.53-.09.28 0 .28.56t-.28.56q-4 0-5.3 2.23-1.3 2.23.47 6.04l16.92 36.09-4.37 7.62 15.62-41.29q1.68-4.56.24-7.63-1.44-3.06-6-3.06-.28 0-.28-.56t.28-.56q2.7 0 5.11.14 2.42.14 6.42.14 2.6 0 4.23-.14 1.63-.14 3.95-.14"/>
      <path fill="#000" d="m332.605 69.31 1.4-2.61h26.78l.65 2.61Zm50.78 20.18q.46 0 .46.56 0 .55-.46.55-2.79 0-5.81-.18-3.03-.19-5.82-.19-3.16 0-5.48.19-2.33.18-5.21.18-.37 0-.37-.55 0-.56.37-.56 3.81 0 4.42-1.54.6-1.53-1.72-6.09l-18.88-37.29 4.55-8-18.5 40.83q-2.51 5.58-.1 8.83 2.42 3.26 7.63 3.26.47 0 .47.56 0 .55-.47.55-2.79 0-5.11-.18-2.33-.19-5.86-.19-3.63 0-5.82.19-2.18.18-5.34.18-.38 0-.38-.55 0-.56.38-.56 2.51 0 4.32-1.07 1.81-1.07 3.63-3.91 1.81-2.83 4.14-8.04l20.18-44.36q.09-.28.83-.33.75-.04.84.33l23.25 45.75q2.23 4.37 3.86 6.93 1.63 2.56 3.07 3.63 1.44 1.07 2.93 1.07"/>
      <path fill="#000" d="M432.765 90.6q-1.39 0-4.51-3.48-3.11-3.49-7.48-10.09-4.38-6.61-9.86-15.81l8.55-2.61q7.44 11.26 12.7 18.04 5.25 6.79 9.34 9.82 4.1 3.02 7.82 3.02.18 0 .18.56 0 .55-.18.55h-10.61zm-19.99-58.4q8.55 0 13.16 3.12 4.6 3.11 4.6 8.69 0 5.49-3.07 9.72t-7.86 6.56q-4.79 2.32-10.09 2.32h-2.65q-1.35 0-2.46-.09v20.55q0 2.7.46 4.09.47 1.4 1.86 1.86 1.4.47 4.28.47.19 0 .19.56 0 .55-.19.55-2.42 0-5.39-.09-2.98-.09-6.51-.09-3.35 0-6.37.09-3.03.09-5.44.09-.28 0-.28-.55 0-.56.28-.56 2.88 0 4.27-.47 1.4-.46 1.91-1.86.51-1.39.51-4.09V40.01q0-2.69-.46-4.04-.47-1.35-1.86-1.86-1.4-.51-4.28-.51-.19 0-.19-.56t.19-.56q2.42 0 5.39.14 2.98.14 6.33.14 3.07 0 6.74-.28 3.67-.28 6.93-.28m7.16 15.35q0-5.49-1.12-8.37-1.11-2.89-3.07-3.96-1.95-1.07-4.46-1.07-3.72 0-5.3 1.4-1.58 1.39-1.58 4.65v19.71q1.3.19 2.79.28 1.49.1 2.6.1 5.49 0 7.81-3.03 2.33-3.02 2.33-9.71"/>
      <path fill="#000" d="M478.895 90.98q-2.98 0-7.44-.28-4.46-.28-8.18-.28-3.35 0-6.42.09t-5.49.09q-.18 0-.18-.55 0-.56.18-.56 2.89 0 4.33-.47 1.44-.46 1.95-1.86.51-1.39.51-4.09V40.01q0-2.69-.46-4.04-.47-1.35-1.91-1.86t-4.23-.51q-.28 0-.28-.56t.28-.56q2.42 0 5.39.14 2.98.14 6.42.14 3.35 0 7.35-.23 4-.24 6.88-.24 9.67 0 16.83 3.72 7.16 3.72 11.16 10.14t4 14.42q0 6.97-2.42 12.6-2.42 5.62-6.69 9.58-4.28 3.95-9.81 6.09-5.54 2.14-11.77 2.14m-.93-2.14q5.86 0 10.42-3.02 4.55-3.03 7.16-8.89 2.6-5.86 2.6-14.32 0-7.9-2.42-14.32-2.41-6.42-6.79-10.18-4.37-3.77-10.41-3.77-5.4 0-7.72 1.02-2.33 1.03-2.33 4.84v41.85q0 3.44 1.82 5.11 1.81 1.68 7.67 1.68"/>
      <path fill="#000" d="M535.435 83.07q0 2.7.47 4.09.46 1.4 1.86 1.86 1.39.47 4.28.47.28 0 .28.56 0 .55-.28.55-2.42 0-5.4-.09-2.97-.09-6.51-.09-3.34 0-6.41.09-3.07.09-5.49.09-.19 0-.19-.55 0-.56.19-.56 2.88 0 4.32-.47 1.45-.46 1.96-1.86.51-1.39.51-4.09V40.01q0-2.69-.51-4.04t-1.96-1.86q-1.44-.51-4.32-.51-.19 0-.19-.56t.19-.56q2.42 0 5.49.14 3.07.14 6.41.14 3.54 0 6.56-.14 3.02-.14 5.35-.14.28 0 .28.56t-.28.56q-2.79 0-4.23.55-1.45.56-1.91 1.96-.47 1.39-.47 4.09Z"/>
    </svg>
  );

  return (
    <nav style={{ background: scrolled ? 'rgba(219, 219, 219, 0.95)' : '#DBDBDB' }}>
      <style>{`
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          border-bottom: 1px solid #c8c8c8;
          transition: all 0.3s ease;
        }
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-links a {
          color: #000;
          font-weight: 500;
          font-size: 0.95rem;
          opacity: 0.7;
          transition: all 0.3s ease;
          position: relative;
          white-space: nowrap;
        }
        .nav-links a:hover, .nav-links a.active {
          opacity: 1;
        }
        .nav-cta {
          background: #000 !important;
          color: #fff !important;
          padding: 0.75rem 1.5rem !important;
          border-radius: 4px !important;
          font-weight: 700 !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        .nav-cta:hover {
          background: #222 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #000;
        }
        .mobile-nav {
          display: none;
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          background: #DBDBDB;
          border-bottom: 1px solid #c8c8c8;
          padding: 1rem 2rem;
          z-index: 999;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mobile-nav.open {
          display: flex;
        }
        .mobile-nav a {
          color: #000;
          font-weight: 500;
          font-size: 1rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid #c8c8c8;
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-menu-btn { display: block; }
        }
      `}</style>
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <Logo />
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/records">Engagement Records</Link>
          <Link href="/governance">Governance Assessment</Link>
          <Link href="/contact" className="nav-cta">Contact</Link>
        </div>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </button>
        {mobileMenuOpen && (
          <div className="mobile-nav open">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/records">Engagement Records</Link>
            <Link href="/governance">Governance Assessment</Link>
            <Link href="/contact" className="nav-cta">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
