'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Services() {
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
              Our Services
            </h1>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '2rem' }}>
              Governance Architecture for Legal Operations
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              Yavardi deploys governance infrastructure that captures authority at execution—before decisions move through billing, documents, or access layers.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>Baseline Assessment</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              A 30-day diagnostic engagement that maps your firm's digital workflows, identifies governance gaps, and quantifies exposure. Deliverable: A comprehensive governance roadmap with prioritized recommendations.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>Governance Implementation</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              Infrastructure deployment inside your Microsoft environment. Authority capture, decision logging, and compliance workflows become native to your operating systems. Ongoing support and optimization.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>Ongoing Governance</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              Monthly monitoring, quarterly reporting, and governance evolution as your firm's workflows change. Authority capture becomes transparent and auditable.
            </p>

            <div style={{ textAlign: 'center', padding: '3rem 0 1rem', marginTop: '3rem' }}>
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
                Schedule a Governance Examination
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
