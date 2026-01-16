'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Records() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '70px' }}>
        <section style={{
          background: 'linear-gradient(135deg, #000, #1a1a1a)',
          padding: '8rem 1.5rem 4rem',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          color: '#fff'
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', width: '100%' }}>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', fontWeight: 900, color: '#fff' }}>
              Engagement Records
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#ddd', marginTop: '1rem' }}>
              Real workflows where authority gaps created exposure.
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                Authority Failure During Billing and System Transition
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
                Billing, reporting, and partner compensation continued during an active system transition. Staff selected which numbers to use when systems disagreed. Partners were paid based on incomplete records. Correction required reconstruction while new work continued.
              </p>
              <a href="https://242296069.fs1.hubspotusercontent-na2.net/hubfs/242296069/Authority%20Breakdown%20During%20Billing%20and%20Reporting%20Transition%20-%20Case%20Record%20(1).pdf" target="_blank"
                style={{
                  display: 'inline-block',
                  background: '#000',
                  color: '#fff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}>
                View Full Record →
              </a>
            </div>

            <div style={{ marginTop: '3rem', paddingTop: '3rem', borderTop: '1px solid #e0e0e0' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                Unconstrained Delegation of Institutional Guidance
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
                Firm policy documents were updated in shared systems without an approval process. Changes cascaded to matter procedures, billing practices, and client communications. Responsibility for guidance updates was unclear. Corrections created compliance questions.
              </p>
              <a href="https://242296069.fs1.hubspotusercontent-na2.net/hubfs/242296069/Unconstrained%20Delegation%20of%20Institutional%20Guidance%20-%20Case%20Record.pdf" target="_blank"
                style={{
                  display: 'inline-block',
                  background: '#000',
                  color: '#fff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}>
                View Full Record →
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(180deg, #DBDBDB, #e8e8e8)', padding: '4rem 2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', color: '#333', fontWeight: 600 }}>
              These records document real governance gaps. Dominion prevents them.
            </p>
            <a href="https://calendly.com/jfreeman-yavardi/yavardi-governance-examination" target="_blank" 
              style={{
                display: 'inline-block',
                background: '#000',
                color: '#fff',
                padding: '1rem 2.5rem',
                borderRadius: '6px',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}>
              Schedule a Governance Impact Review
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
