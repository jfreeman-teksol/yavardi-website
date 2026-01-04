'use client';

import React, { useState, useEffect } from 'react';

export default function YavardiWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Logo SVG component
  const Logo = ({ style, variant = 'light' }) => {
    const textFill = variant === 'dark' ? '#FFFFFF' : '#000000';
    const iconBoxFill = variant === 'dark' ? '#FFFFFF' : '#000000';
    const arrowFill = '#DBDBDB';
    
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 549 124" preserveAspectRatio="xMidYMid meet" style={style}>
        <path fill={iconBoxFill} d="M114.047.876H19.533c-7.64 0-13.858 6.218-13.858 13.858v94.532c0 7.64 6.219 13.858 13.858 13.858h94.533c7.64 0 13.858-6.218 13.858-13.858v-94.53c-.017-7.642-6.237-13.86-13.877-13.86"/>
        <path fill={arrowFill} d="m60.478 31.867 19.343 18.611H5.675V69.09H79.82L60.478 87.7h19.343l29.014-27.916L79.82 31.867z"/>
        <path fill={textFill} d="m182.505 64.75 11.44-19.44q3.07-5.2 2.37-8.46-.7-3.25-5.07-3.25-.28 0-.28-.56t.28-.56q2.98 0 5.58.14 2.61.14 6.98.14 2.32 0 3.76-.14t3.49-.14q.19 0 .19.56t-.19.56q-1.86 0-4.46 1.62-2.61 1.63-5.21 4.42-2.61 2.79-4.84 6.51l-12.09 20.18Zm-5.39.37-14.14-21.95q-3.72-5.76-5.91-7.67-2.18-1.9-3.67-1.9-.28 0-.28-.56t.28-.56q1.4 0 2.88.14 1.49.14 2.89.14 2.6 0 5.58-.05 2.97-.04 5.62-.14 2.65-.09 4.33-.09.18 0 .18.56t-.18.56q-2.7 0-3.21 1.86-.51 1.86 1.16 4.37l13.39 21.11Zm-.56-3.35 10.32-.83v22.13q0 2.7.47 4.09.46 1.4 1.86 1.86 1.39.47 4.27.47.28 0 .28.56 0 .55-.28.55-2.41 0-5.34-.09-2.93-.09-6.47-.09-3.35 0-6.41.09-3.07.09-5.49.09-.19 0-.19-.55 0-.56.19-.56 2.88 0 4.32-.47 1.44-.46 1.96-1.86.51-1.39.51-4.09Z"/>
        <path fill={textFill} d="m221.655 69.31 1.4-2.61h26.78l.65 2.61Zm50.78 20.18q.47 0 .47.56 0 .55-.47.55-2.79 0-5.81-.18-3.02-.19-5.81-.19-3.17 0-5.49.19-2.33.18-5.21.18-.37 0-.37-.55 0-.56.37-.56 3.81 0 4.42-1.54.6-1.53-1.72-6.09l-18.88-37.29 4.56-8-18.51 40.83q-2.51 5.58-.09 8.83 2.41 3.26 7.62 3.26.47 0 .47.56 0 .55-.47.55-2.79 0-5.11-.18-2.33-.19-5.86-.19-3.63 0-5.81.19-2.19.18-5.35.18-.37 0-.37-.55 0-.56.37-.56 2.51 0 4.32-1.07 1.82-1.07 3.63-3.91 1.81-2.83 4.14-8.04l20.18-44.36q.09-.28.84-.33.74-.04.83.33l23.25 45.75q2.23 4.37 3.86 6.93 1.63 2.56 3.07 3.63 1.44 1.07 2.93 1.07"/>
        <path fill={textFill} d="M326.185 32.48q.28 0 .28.56t-.28.56q-3.44 0-6.46 2.97-3.02 2.98-4.88 8l-17.21 45.94q-.09.37-.97.37-.89 0-1.07-.37l-23.72-50.31q-1.58-3.26-3.25-4.93-1.68-1.67-3.82-1.67-.27 0-.27-.56t.27-.56q1.12 0 1.73.09.6.1 1.67.14 1.07.05 3.39.05 5.21 0 8.47-.05 3.25-.04 5.3-.14 2.04-.09 3.53-.09.28 0 .28.56t-.28.56q-4 0-5.3 2.23-1.3 2.23.47 6.04l16.92 36.09-4.37 7.62 15.62-41.29q1.68-4.56.24-7.63-1.44-3.06-6-3.06-.28 0-.28-.56t.28-.56q2.7 0 5.11.14 2.42.14 6.42.14 2.6 0 4.23-.14 1.63-.14 3.95-.14"/>
        <path fill={textFill} d="m332.605 69.31 1.4-2.61h26.78l.65 2.61Zm50.78 20.18q.46 0 .46.56 0 .55-.46.55-2.79 0-5.81-.18-3.03-.19-5.82-.19-3.16 0-5.48.19-2.33.18-5.21.18-.37 0-.37-.55 0-.56.37-.56 3.81 0 4.42-1.54.6-1.53-1.72-6.09l-18.88-37.29 4.55-8-18.5 40.83q-2.51 5.58-.1 8.83 2.42 3.26 7.63 3.26.47 0 .47.56 0 .55-.47.55-2.79 0-5.11-.18-2.33-.19-5.86-.19-3.63 0-5.82.19-2.18.18-5.34.18-.38 0-.38-.55 0-.56.38-.56 2.51 0 4.32-1.07 1.81-1.07 3.63-3.91 1.81-2.83 4.14-8.04l20.18-44.36q.09-.28.83-.33.75-.04.84.33l23.25 45.75q2.23 4.37 3.86 6.93 1.63 2.56 3.07 3.63 1.44 1.07 2.93 1.07"/>
        <path fill={textFill} d="M432.765 90.6q-1.39 0-4.51-3.48-3.11-3.49-7.48-10.09-4.38-6.61-9.86-15.81l8.55-2.61q7.44 11.26 12.7 18.04 5.25 6.79 9.34 9.82 4.1 3.02 7.82 3.02.18 0 .18.56 0 .55-.18.55h-10.61zm-19.99-58.4q8.55 0 13.16 3.12 4.6 3.11 4.6 8.69 0 5.49-3.07 9.72t-7.86 6.56q-4.79 2.32-10.09 2.32h-2.65q-1.35 0-2.46-.09v20.55q0 2.7.46 4.09.47 1.4 1.86 1.86 1.4.47 4.28.47.19 0 .19.56 0 .55-.19.55-2.42 0-5.39-.09-2.98-.09-6.51-.09-3.35 0-6.37.09-3.03.09-5.44.09-.28 0-.28-.55 0-.56.28-.56 2.88 0 4.27-.47 1.4-.46 1.91-1.86.51-1.39.51-4.09V40.01q0-2.69-.46-4.04-.47-1.35-1.86-1.86-1.4-.51-4.28-.51-.19 0-.19-.56t.19-.56q2.42 0 5.39.14 2.98.14 6.33.14 3.07 0 6.74-.28 3.67-.28 6.93-.28m7.16 15.35q0-5.49-1.12-8.37-1.11-2.89-3.07-3.96-1.95-1.07-4.46-1.07-3.72 0-5.3 1.4-1.58 1.39-1.58 4.65v19.71q1.3.19 2.79.28 1.49.1 2.6.1 5.49 0 7.81-3.03 2.33-3.02 2.33-9.71"/>
        <path fill={textFill} d="M478.895 90.98q-2.98 0-7.44-.28-4.46-.28-8.18-.28-3.35 0-6.42.09t-5.49.09q-.18 0-.18-.55 0-.56.18-.56 2.89 0 4.33-.47 1.44-.46 1.95-1.86.51-1.39.51-4.09V40.01q0-2.69-.46-4.04-.47-1.35-1.91-1.86t-4.23-.51q-.28 0-.28-.56t.28-.56q2.42 0 5.39.14 2.98.14 6.42.14 3.35 0 7.35-.23 4-.24 6.88-.24 9.67 0 16.83 3.72 7.16 3.72 11.16 10.14t4 14.42q0 6.97-2.42 12.6-2.42 5.62-6.69 9.58-4.28 3.95-9.81 6.09-5.54 2.14-11.77 2.14m-.93-2.14q5.86 0 10.42-3.02 4.55-3.03 7.16-8.89 2.6-5.86 2.6-14.32 0-7.9-2.42-14.32-2.41-6.42-6.79-10.18-4.37-3.77-10.41-3.77-5.4 0-7.72 1.02-2.33 1.03-2.33 4.84v41.85q0 3.44 1.82 5.11 1.81 1.68 7.67 1.68"/>
        <path fill={textFill} d="M535.435 83.07q0 2.7.47 4.09.46 1.4 1.86 1.86 1.39.47 4.28.47.28 0 .28.56 0 .55-.28.55-2.42 0-5.4-.09-2.97-.09-6.51-.09-3.34 0-6.41.09-3.07.09-5.49.09-.19 0-.19-.55 0-.56.19-.56 2.88 0 4.32-.47 1.45-.46 1.96-1.86.51-1.39.51-4.09V40.01q0-2.69-.51-4.04t-1.96-1.86q-1.44-.51-4.32-.51-.19 0-.19-.56t.19-.56q2.42 0 5.49.14 3.07.14 6.41.14 3.54 0 6.56-.14 3.02-.14 5.35-.14.28 0 .28.56t-.28.56q-2.79 0-4.23.55-1.45.56-1.91 1.96-.47 1.39-.47 4.09Z"/>
      </svg>
    );
  };

  // Page Components
  const HomePage = () => (
    <>
      {/* Hero Section - NEW */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #dbdbdb 0%, #e8e8e8 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 1.5rem',
        paddingTop: '100px'
      }}>
        {/* Top portion with lines - contains headline and question */}
        <div style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            position: 'absolute',
            top: '-100px',
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.04,
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
            backgroundSize: '12px 12px'
          }} />
          
          <div style={{ 
            maxWidth: '1000px', 
            margin: '0 auto', 
            textAlign: 'center', 
            position: 'relative', 
            zIndex: 1,
            padding: '3rem 0 2rem'
          }}>
            <h1 style={{ 
              fontSize: 'clamp(1.85rem, 4.5vw, 2.5rem)', 
              fontWeight: 900, 
              marginBottom: '2.5rem', 
              color: '#000',
              lineHeight: 1.3,
              letterSpacing: '-0.01em'
            }}>
              Your firm executes $15 million in billable work every year.
            </h1>
            
            <p style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: 900,
              color: '#000',
              marginBottom: '0',
              letterSpacing: '-0.01em'
            }}>
              How much of that work has digital proof of who authorized it?
            </p>
          </div>
        </div>
        
        {/* Bottom portion without lines - contains rest of hero content */}
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          textAlign: 'center', 
          position: 'relative', 
          zIndex: 1,
          padding: '2.5rem 0 3rem'
        }}>
          <div style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            lineHeight: 1.8,
            color: '#000',
            marginBottom: '2.5rem',
            fontWeight: 600,
            maxWidth: '900px',
            margin: '0 auto 2.5rem'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              When authorization isn't captured in real-time, billing review becomes exposure management.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Partners write down defensible work because they can't prove approval. Senior attorneys burn billable hours reconstructing old decisions. Disputes escalate because authority records don't exist.
            </p>
          </div>
          
          <p style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight: 900,
            color: '#000',
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em'
          }}>
            This is your Reconstruction Tax.
          </p>
          
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            fontWeight: 600,
            color: '#333',
            marginBottom: '3rem'
          }}>
            For a 35-attorney litigation practice, it costs over $1 million annually.
          </p>
          
          <p style={{
            fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
            fontWeight: 900,
            color: '#000',
            marginBottom: '3rem',
            letterSpacing: '-0.01em'
          }}>
            Yavardi closes the gap that causes it.
          </p>
          
          <a 
            href="https://calendly.com/jfreeman-yavardi/yavardi-governance-examination"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#0a1628',
              color: '#fff',
              padding: 'clamp(0.875rem, 2vw, 1.125rem) clamp(1.75rem, 4vw, 2.75rem)',
              borderRadius: '3px',
              textDecoration: 'none',
              fontWeight: 900,
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 4px 12px rgba(30, 58, 138, 0.15)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Schedule Governance Examination
          </a>
        </div>
      </section>

      {/* Understanding Reconstruction Tax - NEW SECTION */}
      <section style={{ 
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 2.5rem)', 
        background: 'linear-gradient(180deg, #1a1a1a 0%, #000 100%)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.02,
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px'
        }} />
        
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 2.75rem)', 
            fontWeight: 900, 
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            color: '#fff'
          }}>
            Understanding Reconstruction Tax
          </h2>
          
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
            lineHeight: 1.7, 
            color: '#b0b0b0', 
            marginBottom: 'clamp(3rem, 6vw, 4rem)',
            textAlign: 'center',
            fontWeight: 600
          }}>
            Mid-sized litigation practices lose over $1 million annually to pre-invoice write-downs and reconstruction labor.
          </p>
          
          {/* Revenue Loss */}
          <div style={{ 
            marginBottom: 'clamp(2rem, 4vw, 2.5rem)',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            borderRadius: '4px',
            borderLeft: '4px solid rgba(219, 219, 219, 0.4)'
          }}>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
              fontWeight: 900,
              color: '#fff',
              marginBottom: '1.25rem'
            }}>
              Revenue Loss at Billing Review
            </h3>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.8,
              color: '#b0b0b0',
              fontWeight: 500,
              marginBottom: '1.25rem'
            }}>
              When recorded billable work reaches billing review without proof of authorization, firms reduce invoices to limit exposure. For a 35-attorney firm recording $15 million in billable work annually, industry-standard realization rates mean roughly $1.8 million in recorded value gets written down before invoicing.
            </p>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.8,
              color: '#b0b0b0',
              fontWeight: 500,
              marginBottom: '1.25rem'
            }}>
              Some of that is intentional. Relationship discounts, pricing adjustments, judgment-based concessions.
            </p>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.8,
              color: '#fff',
              fontWeight: 700
            }}>
              The rest is defensive. Work gets reduced because approval can't be proven, scope wasn't documented, or authority is unclear. That defensive portion is addressable.
            </p>
          </div>
          
          {/* Capacity Loss */}
          <div style={{ 
            marginBottom: 'clamp(2rem, 4vw, 2.5rem)',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            borderRadius: '4px',
            borderLeft: '4px solid rgba(219, 219, 219, 0.4)'
          }}>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
              fontWeight: 900,
              color: '#fff',
              marginBottom: '1.25rem'
            }}>
              Capacity Loss to Reconstruction
            </h3>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.8,
              color: '#b0b0b0',
              fontWeight: 500,
              marginBottom: '1.25rem'
            }}>
              When disputes arise, senior attorneys reconstruct what happened.
            </p>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.8,
              color: '#b0b0b0',
              fontWeight: 500,
              marginBottom: '1.25rem'
            }}>
              Emails get searched. Calendars get reviewed. Partners debate historical decisions. Attorneys explain old work instead of producing new work.
            </p>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.8,
              color: '#fff',
              fontWeight: 700
            }}>
              This is billable-capable time that generates zero revenue. For most firms, reconstruction cycles consume 300-400 hours of senior attorney time annually.
            </p>
          </div>
          
          {/* What Yavardi Addresses */}
          <div style={{
            background: '#060d14',
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            borderRadius: '4px'
          }}>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
              fontWeight: 900,
              color: '#fff',
              marginBottom: '1.25rem'
            }}>
              What Yavardi Addresses
            </h3>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 500,
              marginBottom: '1.25rem'
            }}>
              Total exposure for a firm this size runs nearly $2 million per year.
            </p>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.8,
              color: '#fff',
              fontWeight: 700
            }}>
              Yavardi targets the portion caused by missing authority, unclear scope, and absent execution evidence during billing review.
            </p>
          </div>
        </div>
      </section>

      {/* What We Govern */}
      <section style={{ padding: 'clamp(4rem, 10vw, 7rem) clamp(1.5rem, 5vw, 2.5rem)', background: '#DBDBDB' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 900, 
            marginBottom: '1.5rem', 
            color: '#000',
            letterSpacing: '-0.02em',
            textAlign: 'center'
          }}>
            What We Govern
          </h2>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
            color: '#666', 
            textAlign: 'center', 
            marginBottom: '1rem',
            maxWidth: '750px',
            margin: '0 auto 1rem',
            fontWeight: 600
          }}>
            Yavardi governs execution, not intention. We focus on the points where informal decisions become irreversible system actions.
          </p>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
            color: '#000', 
            textAlign: 'center', 
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
            maxWidth: '750px',
            margin: '0 auto clamp(3rem, 6vw, 5rem)',
            fontWeight: 700
          }}>
            Without that governance, firms pay Reconstruction Tax.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)'
          }}>
            {[
              {
                title: 'Decision Authority',
                description: 'We ensure that legally consequential decisions are bound to identifiable individuals acting in defined roles, with authority recorded at the moment execution occurs.'
              },
              {
                title: 'Billing and Financial Actions',
                description: 'We govern how time adjustments, invoice modifications, and financial approvals are executed so revenue decisions remain defensible after distribution, audit, or dispute.'
              },
              {
                title: 'Documents and Workflow Finality',
                description: 'We control how documents move from draft to final, how discovery and production sets are assembled, and how workflow actions become binding records without reliance on reconstruction.'
              },
              {
                title: 'System Access and Identity',
                description: 'We establish controls over who can access which systems, when access is granted or revoked, and how identity is verified before consequential actions are executed.'
              }
            ].map((item, i) => (
              <div key={i} style={{
                background: '#e8e8e8',
                padding: 'clamp(2rem, 4vw, 3rem)',
                borderRadius: '4px',
                border: '1px solid #c8c8c8',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <h3 style={{ 
                  fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', 
                  fontWeight: 900, 
                  marginBottom: '1.25rem', 
                  color: '#000',
                  letterSpacing: '-0.01em'
                }}>{item.title}</h3>
                <p style={{ 
                  color: '#333', 
                  lineHeight: 1.7,
                  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                  fontWeight: 600
                }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Governance Breaks Down */}
      <section style={{ 
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1.5rem, 5vw, 2.5rem)', 
        background: 'linear-gradient(135deg, #c8c8c8 0%, #DBDBDB 100%)' 
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 900, 
            marginBottom: '1.5rem', 
            color: '#000',
            letterSpacing: '-0.02em',
            textAlign: 'center'
          }}>
            Where Governance Commonly Breaks Down
          </h2>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
            color: '#666', 
            textAlign: 'center', 
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 600
          }}>
            In most firms, system actions occur based on assumed approval rather than enforced authority.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { label: 'Billing', text: 'adjustments are made without defensible lineage.' },
              { label: 'Documents', text: 'are finalized without recorded approval events.' },
              { label: 'Discovery', text: 'decisions are executed without a provable chain of custody.' },
              { label: 'Settlement authority', text: 'is implied through conversation rather than bound through execution.' },
              { label: 'Work', text: 'completes, but authority remains invisible.' }
            ].map((item, i) => (
              <div key={i} style={{
                background: '#DBDBDB',
                padding: 'clamp(1.25rem, 3vw, 1.75rem) clamp(1.5rem, 4vw, 2.25rem)',
                borderRadius: '4px',
                borderLeft: '4px solid #0a1628',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                fontWeight: 600
              }}>
                <strong style={{ color: '#000', fontWeight: 700 }}>{item.label}</strong> {item.text}
              </div>
            ))}
          </div>
          
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
            color: '#2a2a2a', 
            marginTop: 'clamp(2.5rem, 5vw, 3.5rem)', 
            textAlign: 'center', 
            fontWeight: 700
          }}>
            Over time, these gaps accumulate into operational friction, partner disputes, client challenges, audit exposure, and unnecessary write-downs.
          </p>
        </div>
      </section>

      {/* Why Firms Currently Pay Their Reconstruction Tax - NEW SECTION */}
      <section style={{ 
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 2.5rem)', 
        background: '#DBDBDB'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 2.75rem)', 
            fontWeight: 900, 
            marginBottom: '2rem',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            color: '#000'
          }}>
            Why Firms Currently Pay Their Reconstruction Tax
          </h2>
          
          <div style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
            lineHeight: 1.8,
            color: '#333',
            fontWeight: 600
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Authority capture failure isn't negligence. It's a structural gap most firms have never examined. The systems work. Documents get filed. Invoices go out. Cases close. Nothing breaks visibly enough to force the question.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Write-downs happen gradually across hundreds of matters. Reconstruction labor gets absorbed into normal operations. The cost is real, but invisible. It shows up as margin pressure, not as a line item anyone tracks.
            </p>
            <p style={{ color: '#000', fontWeight: 700 }}>
              Governance eliminates the structural cause. Once authority capture is in place, the tax stops accruing.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ 
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 2.5rem)', 
        background: 'linear-gradient(135deg, #c8c8c8 0%, #DBDBDB 100%)' 
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(180deg, #0a1628 0%, #061018 100%)',
            borderRadius: '16px',
            padding: 'clamp(3rem, 6vw, 4.5rem) clamp(2rem, 5vw, 3.5rem)',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.02,
              backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
              backgroundSize: '20px 20px'
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ 
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', 
                fontWeight: 900, 
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
                color: '#fff'
              }}>
                Governance Entry
              </h2>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.15rem)', 
                marginBottom: 'clamp(2rem, 4vw, 2.5rem)', 
                color: '#b0b0b0',
                lineHeight: 1.6,
                fontWeight: 500
              }}>
                See if your firm meets the requirements for governance
              </p>
              <a 
                href="https://calendly.com/jfreeman-yavardi/yavardi-governance-examination"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#DBDBDB',
                  color: '#000',
                  padding: 'clamp(0.875rem, 2vw, 1rem) clamp(2rem, 4vw, 2.5rem)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                  transition: 'all 0.2s ease',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Schedule Governance Examination
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const ServicesPage = () => (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #dbdbdb 0%, #e8e8e8 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(5rem, 8vw, 6rem) 1.5rem clamp(2.5rem, 4vw, 3.5rem)'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.04,
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
          backgroundSize: '12px 12px'
        }} />
        
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          textAlign: 'center', 
          position: 'relative', 
          zIndex: 1
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
            fontWeight: 900, 
            marginBottom: '2rem', 
            color: '#000',
            lineHeight: 1.2,
            letterSpacing: '-0.02em'
          }}>
            Our Services
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            lineHeight: 1.7,
            color: '#333',
            fontWeight: 600,
            maxWidth: '750px',
            margin: '0 auto'
          }}>
            Technology Governance for Legal Operations
          </p>
        </div>
      </section>

      {/* Services Intro */}
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 2.5rem)', 
        background: '#DBDBDB' 
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#000',
            fontWeight: 600,
            marginBottom: '2rem'
          }}>
            Yavardi provides technology governance services focused on how legally consequential work is executed inside a law firm's digital environment.
          </p>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#000',
            fontWeight: 600,
            marginBottom: '2rem'
          }}>
            Our work addresses the point where human decisions become system actions, and whether those actions remain defensible when examined later.
          </p>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#000',
            fontWeight: 600
          }}>
            We work with firms whose legal operations rely on digital systems to manage documents, billing, communication, access, and workflow, and where informal execution creates operational, financial, and legal exposure.
          </p>
        </div>
      </section>

      {/* Environment Governance */}
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 2.5rem)', 
        background: 'linear-gradient(135deg, #c8c8c8 0%, #DBDBDB 100%)' 
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
            fontWeight: 900, 
            marginBottom: '1.5rem', 
            color: '#000',
            letterSpacing: '-0.02em'
          }}>
            Environment Governance
          </h2>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#333',
            fontWeight: 600,
            marginBottom: '1.5rem'
          }}>
            Environment governance establishes clarity around the firm's digital estate.
          </p>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#333',
            fontWeight: 600,
            marginBottom: '1.5rem'
          }}>
            This service defines which systems are recognized as part of legal operations, which identities are authorized to act, where client and matter data is permitted to reside, and which vendors and integrations are allowed to connect.
          </p>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#333',
            fontWeight: 600,
            marginBottom: '1.5rem'
          }}>
            By establishing clear boundaries, the firm reduces unmanaged system sprawl, informal access paths, and uncertainty around where legal work actually occurs.
          </p>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#333',
            fontWeight: 600
          }}>
            Environment governance allows leadership to understand, with precision, what exists inside the firm's operational footprint and how changes to that environment are controlled.
          </p>
        </div>
      </section>

      {/* Workflow Governance */}
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 2.5rem)', 
        background: '#DBDBDB' 
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
            fontWeight: 900, 
            marginBottom: '1.5rem', 
            color: '#000',
            letterSpacing: '-0.02em'
          }}>
            Workflow Governance
          </h2>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#333',
            fontWeight: 600,
            marginBottom: '1.5rem'
          }}>
            Workflow governance focuses on how legal work moves from intake through resolution across people, systems, and documents.
          </p>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#333',
            fontWeight: 600,
            marginBottom: '1.5rem'
          }}>
            This service governs who is allowed to act at each stage of a matter, what approvals are required before execution, and how those approvals are preserved when system actions occur. Governance is applied to document finalization, discovery and production decisions, billing adjustments, access changes, and other actions that carry legal or financial consequence.
          </p>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#333',
            fontWeight: 600
          }}>
            Legal work continues using the same tools and platforms. What changes is that execution is no longer driven by assumption or informal communication. System actions occur in a controlled, traceable manner that preserves authority at the moment execution takes place.
          </p>
        </div>
      </section>

      {/* Ongoing Governance */}
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 2.5rem)', 
        background: 'linear-gradient(135deg, #c8c8c8 0%, #DBDBDB 100%)' 
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
            fontWeight: 900, 
            marginBottom: '1.5rem', 
            color: '#000',
            letterSpacing: '-0.02em'
          }}>
            Ongoing Governance
          </h2>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#333',
            fontWeight: 600,
            marginBottom: '1.5rem'
          }}>
            Governance oversight maintains execution discipline as the firm evolves.
          </p>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#333',
            fontWeight: 600,
            marginBottom: '1.5rem'
          }}>
            As new tools are introduced, vendors are added, workflows change, and personnel move into new roles, execution risk can reappear if controls are not maintained.
          </p>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#333',
            fontWeight: 600
          }}>
            Ongoing governance oversight ensures that authority controls remain intact and that changes to the environment do not reintroduce unmanaged execution. This service supports long-term consistency, operational clarity, and defensibility without requiring repeated corrective efforts.
          </p>
        </div>
      </section>

      {/* Private Firm Intelligence */}
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 2.5rem)', 
        background: '#DBDBDB' 
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
            fontWeight: 900, 
            marginBottom: '1.5rem', 
            color: '#000',
            letterSpacing: '-0.02em'
          }}>
            Private Firm Intelligence
          </h2>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#333',
            fontWeight: 600,
            marginBottom: '1.5rem'
          }}>
            Private firm intelligence provides advanced knowledge access and drafting assistance using the firm's own work product, language, and internal data.
          </p>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#333',
            fontWeight: 600,
            marginBottom: '1.5rem'
          }}>
            This service enables retrieval of prior filings, documents, and internal knowledge while preserving confidentiality and control. Because the intelligence capability operates entirely within the firm's governed environment, it relies only on approved and final artifacts and does not introduce data exposure or ambiguity.
          </p>
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
            lineHeight: 1.8, 
            color: '#333',
            fontWeight: 600
          }}>
            Private firm intelligence enhances efficiency while preserving the integrity of legal work.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ 
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 2.5rem)', 
        background: 'linear-gradient(135deg, #c8c8c8 0%, #DBDBDB 100%)' 
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(180deg, #0a1628 0%, #061018 100%)',
            borderRadius: '16px',
            padding: 'clamp(3rem, 6vw, 4.5rem) clamp(2rem, 5vw, 3.5rem)',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.02,
              backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
              backgroundSize: '20px 20px'
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ 
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', 
                fontWeight: 900, 
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
                color: '#fff'
              }}>
                Ready to Establish Governance?
              </h2>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.15rem)', 
                marginBottom: 'clamp(2rem, 4vw, 2.5rem)', 
                color: '#b0b0b0',
                lineHeight: 1.6,
                fontWeight: 500
              }}>
                Schedule a governance examination to determine if your firm meets the requirements
              </p>
              <a 
                href="https://calendly.com/jfreeman-yavardi/yavardi-governance-examination"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#DBDBDB',
                  color: '#000',
                  padding: 'clamp(0.875rem, 2vw, 1rem) clamp(2rem, 4vw, 2.5rem)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                  transition: 'all 0.2s ease',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Schedule Examination
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const CaseRecordsPage = () => (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #dbdbdb 0%, #e8e8e8 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(5rem, 8vw, 6rem) 1.5rem clamp(2.5rem, 4vw, 3.5rem)'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.04,
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
          backgroundSize: '12px 12px'
        }} />
        
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          textAlign: 'center', 
          position: 'relative', 
          zIndex: 1
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
            fontWeight: 900, 
            marginBottom: '2rem', 
            color: '#000',
            lineHeight: 1.2,
            letterSpacing: '-0.02em'
          }}>
            Engagement Records
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            lineHeight: 1.7,
            color: '#333',
            fontWeight: 600,
            maxWidth: '750px',
            margin: '0 auto'
          }}>
            Documented findings from engagements with litigation practices and legal service organizations.
          </p>
        </div>
      </section>

      {/* Engagement Record 1 */}
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 2.5rem)', 
        background: '#DBDBDB' 
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            background: '#e8e8e8',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            borderRadius: '4px',
            border: '1px solid #c8c8c8',
            marginBottom: 'clamp(3rem, 6vw, 5rem)'
          }}>
            <p style={{ 
              fontSize: 'clamp(0.9rem, 1.5vw, 1rem)', 
              fontWeight: 700, 
              color: '#666',
              marginBottom: '1rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Private Legal Practice
            </p>
            
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', 
              fontWeight: 900, 
              marginBottom: '2rem', 
              color: '#000',
              letterSpacing: '-0.01em',
              lineHeight: 1.3
            }}>
              Authority Failure During Billing and System Transition
            </h2>
            
            <p style={{ 
              fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
              lineHeight: 1.8, 
              color: '#333',
              fontWeight: 600,
              marginBottom: '2.5rem'
            }}>
              A private litigation firm executed billing, accounting, and reporting actions during a system transition without preserved approval records at execution time. Review expectations existed, but authority was not bound to system actions. Financial discrepancies were identified after month-end close and required manual reconstruction.
            </p>
            
            <a 
              href="https://242296069.fs1.hubspotusercontent-na2.net/hubfs/242296069/Authority%20Breakdown%20During%20Billing%20and%20Reporting%20Transition%20-%20Case%20Record.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#0a1628',
                color: '#fff',
                padding: 'clamp(0.875rem, 2vw, 1rem) clamp(1.75rem, 4vw, 2.5rem)',
                borderRadius: '3px',
                textDecoration: 'none',
                fontWeight: 900,
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(10, 22, 40, 0.15)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              View Full Record (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Engagement Record 2 */}
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 2.5rem)', 
        background: 'linear-gradient(135deg, #c8c8c8 0%, #DBDBDB 100%)' 
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            background: '#DBDBDB',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            borderRadius: '4px',
            border: '1px solid #c8c8c8'
          }}>
            <p style={{ 
              fontSize: 'clamp(0.9rem, 1.5vw, 1rem)', 
              fontWeight: 700, 
              color: '#666',
              marginBottom: '1rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Distributed Legal Services
            </p>
            
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', 
              fontWeight: 900, 
              marginBottom: '2rem', 
              color: '#000',
              letterSpacing: '-0.01em',
              lineHeight: 1.3
            }}>
              Unconstrained Delegation of Institutional Guidance
            </h2>
            
            <p style={{ 
              fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', 
              lineHeight: 1.8, 
              color: '#333',
              fontWeight: 600,
              marginBottom: '2.5rem'
            }}>
              A legal services organization operating a distributed service model delegated the issuance of institutional guidance during live service delivery without execution-time authority constraints. Guidance was delivered without preserved records identifying approved sources, version validity, or authorization scope. When inaccuracies surfaced, validation occurred retrospectively rather than at the moment institutional positions were issued.
            </p>
            
            <a 
              href="https://242296069.fs1.hubspotusercontent-na2.net/hubfs/242296069/Unconstrained%20Delegation%20of%20Institutional%20Guidance%20-%20Case%20Record.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#0a1628',
                color: '#fff',
                padding: 'clamp(0.875rem, 2vw, 1rem) clamp(1.75rem, 4vw, 2.5rem)',
                borderRadius: '3px',
                textDecoration: 'none',
                fontWeight: 900,
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(10, 22, 40, 0.15)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              View Full Record (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ 
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 2.5rem)', 
        background: 'linear-gradient(135deg, #c8c8c8 0%, #DBDBDB 100%)' 
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(180deg, #0a1628 0%, #061018 100%)',
            borderRadius: '16px',
            padding: 'clamp(3rem, 6vw, 4.5rem) clamp(2rem, 5vw, 3.5rem)',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.02,
              backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
              backgroundSize: '20px 20px'
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ 
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', 
                fontWeight: 900, 
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
                color: '#fff'
              }}>
                Prevent Governance Failures
              </h2>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.15rem)', 
                marginBottom: 'clamp(2rem, 4vw, 2.5rem)', 
                color: '#b0b0b0',
                lineHeight: 1.6,
                fontWeight: 500
              }}>
                Schedule an examination to identify authority gaps in your firm
              </p>
              <a 
                href="https://calendly.com/jfreeman-yavardi/yavardi-governance-examination"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#DBDBDB',
                  color: '#000',
                  padding: 'clamp(0.875rem, 2vw, 1rem) clamp(2rem, 4vw, 2.5rem)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                  transition: 'all 0.2s ease',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Schedule Examination
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Form submission would be handled by your backend. For now, this is a demo.');
    };

    return (
      <>
        {/* Hero */}
        <section style={{
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #dbdbdb 0%, #e8e8e8 100%)',
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(5rem, 8vw, 6rem) 1.5rem clamp(2.5rem, 4vw, 3.5rem)'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.04,
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
            backgroundSize: '12px 12px'
          }} />
          
          <div style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            textAlign: 'center', 
            position: 'relative', 
            zIndex: 1
          }}>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
              fontWeight: 900, 
              marginBottom: '2rem', 
              color: '#000',
              lineHeight: 1.2,
              letterSpacing: '-0.02em'
            }}>
              Contact Us
            </h1>
            
            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
              lineHeight: 1.7,
              color: '#333',
              fontWeight: 600,
              maxWidth: '750px',
              margin: '0 auto'
            }}>
              Ready to discuss governance for your firm?
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section style={{ 
          padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 2.5rem)', 
          background: '#DBDBDB' 
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#000' }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '1px solid #c8c8c8',
                      borderRadius: '4px',
                      fontSize: '1rem',
                      background: '#fff'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#000' }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '1px solid #c8c8c8',
                      borderRadius: '4px',
                      fontSize: '1rem',
                      background: '#fff'
                    }}
                  />
                </div>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#000' }}>
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    border: '1px solid #c8c8c8',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    background: '#fff'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#000' }}>
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    border: '1px solid #c8c8c8',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    background: '#fff'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#000' }}>
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    border: '1px solid #c8c8c8',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    background: '#fff',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <button
                type="submit"
                style={{
                  width: '100%',
                  background: '#0a1628',
                  color: '#fff',
                  padding: '1rem 2rem',
                  borderRadius: '4px',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Send Message
              </button>
            </form>
            
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
                Or email us directly:
              </p>
              <a 
                href="mailto:contact@yavardi.com" 
                style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 700, 
                  color: '#0a1628',
                  textDecoration: 'none'
                }}
              >
                contact@yavardi.com
              </a>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: '#DBDBDB',
        transition: 'all 0.3s ease',
        borderBottom: '1px solid #c8c8c8'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '1rem 2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div 
            onClick={() => navigateTo('home')}
            style={{ cursor: 'pointer' }}
          >
            <Logo style={{ height: '40px', width: 'auto', display: 'block' }} variant="light" />
          </div>
          
          {/* Desktop Navigation */}
          <div style={{ 
            display: isMobile ? 'none' : 'flex',
            gap: '2.5rem', 
            alignItems: 'center' 
          }}>
            <a 
              onClick={() => navigateTo('home')}
              style={{ 
                color: '#000', 
                textDecoration: 'none', 
                fontWeight: 500, 
                fontSize: '1.05rem',
                transition: 'opacity 0.2s',
                opacity: currentPage === 'home' ? 1 : 0.8,
                cursor: 'pointer'
              }}
            >
              Home
            </a>
            <a 
              onClick={() => navigateTo('services')}
              style={{ 
                color: '#000', 
                textDecoration: 'none', 
                fontWeight: 500, 
                fontSize: '1.05rem',
                transition: 'opacity 0.2s',
                opacity: currentPage === 'services' ? 1 : 0.8,
                cursor: 'pointer'
              }}
            >
              Services
            </a>
            <a 
              onClick={() => navigateTo('case-records')}
              style={{ 
                color: '#000', 
                textDecoration: 'none', 
                fontWeight: 500, 
                fontSize: '1.05rem',
                transition: 'opacity 0.2s',
                opacity: currentPage === 'case-records' ? 1 : 0.8,
                cursor: 'pointer'
              }}
            >
              Engagement Records
            </a>
            <a 
              onClick={() => navigateTo('contact')}
              style={{ 
                background: '#0a1628', 
                color: '#fff', 
                padding: '0.75rem 1.75rem', 
                borderRadius: '3px', 
                textDecoration: 'none', 
                fontWeight: 900,
                fontSize: '1.05rem',
                transition: 'all 0.2s',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: isMobile ? 'block' : 'none',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#000'
            }}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && isMobile && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.5rem 2.5rem',
            background: '#DBDBDB',
            borderTop: '1px solid #e0e0e0'
          }}>
            <a 
              onClick={() => navigateTo('home')}
              style={{ 
                color: '#000', 
                textDecoration: 'none', 
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              Home
            </a>
            <a 
              onClick={() => navigateTo('services')}
              style={{ 
                color: '#000', 
                textDecoration: 'none', 
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              Services
            </a>
            <a 
              onClick={() => navigateTo('case-records')}
              style={{ 
                color: '#000', 
                textDecoration: 'none', 
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              Engagement Records
            </a>
            <a 
              onClick={() => navigateTo('contact')}
              style={{ 
                background: '#0a1628', 
                color: '#fff', 
                padding: '0.75rem 1.75rem', 
                borderRadius: '3px', 
                textDecoration: 'none', 
                fontWeight: 900,
                textAlign: 'center',
                display: 'inline-block',
                cursor: 'pointer'
              }}
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'case-records' && <CaseRecordsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer style={{ 
        background: '#DBDBDB', 
        color: '#333', 
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 2.5rem)', 
        textAlign: 'center' 
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <Logo style={{ height: '48px', width: 'auto', display: 'block' }} variant="light" />
        </div>
        <p style={{ fontSize: '1rem', marginBottom: '1.25rem', color: '#333' }}>
          Technology Governance for Legal Operations
        </p>
        <p style={{ fontSize: '1rem' }}>
          <a href="mailto:contact@yavardi.com" style={{ color: '#333', textDecoration: 'none' }}>
            contact@yavardi.com
          </a>
        </p>
        <p style={{ fontSize: '0.9rem', marginTop: '2.5rem', color: '#555' }}>
          © {new Date().getFullYear()} Yavardi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
