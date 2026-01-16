'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Contact() {
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
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>
              Request a Governance Examination
            </h1>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(180deg, #DBDBDB, #e8e8e8)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ background: '#f5f5f5', border: '1px solid #c8c8c8', borderRadius: '8px', padding: '2rem', marginBottom: '1.5rem', transition: 'all 0.4s' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#333' }}>
                Law firms enforce evidentiary standards for filings, records, and physical artifacts. Digital legal work now executes through identity systems, document platforms, collaboration tools, and billing systems. Governance determines whether authorization for those actions is recorded as evidence or reconstructed later.
              </p>
            </div>

            <div style={{ background: '#f5f5f5', border: '1px solid #c8c8c8', borderRadius: '8px', padding: '2rem', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#333' }}>
                This examination evaluates how authorization is captured across those systems in your firm's operating environment.
              </p>
            </div>

            <div style={{ background: '#f5f5f5', border: '1px solid #c8c8c8', borderRadius: '8px', padding: '2rem', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#333' }}>
                The initial examination is a structured 30-minute discussion focused on how approval, execution, and authority function across your firm's digital workflows.
              </p>
            </div>

            <div style={{ background: '#f5f5f5', border: '1px solid #c8c8c8', borderRadius: '8px', padding: '2rem', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#333' }}>
                Where gaps are identified, the examination determines whether a formal governance baseline assessment is required.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '3rem 0 1rem' }}>
              <a href="https://calendly.com/jfreeman-yavardi/yavardi-governance-examination" target="_blank" 
                style={{
                  display: 'inline-block',
                  background: '#000',
                  color: '#fff',
                  padding: '1rem 2.5rem',
                  borderRadius: '6px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.4s'
                }}>
                Schedule a 30-Minute Governance Examination
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
