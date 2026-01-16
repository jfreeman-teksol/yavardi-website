'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Governance() {
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
              How Governance Protects Your Firm
            </h1>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '2rem' }}>
              Authority Preservation as Infrastructure
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              Governance captures authority at execution, before decisions move through billing, documents, or access layers.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>Financial Protection</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              Billing disputes resolve through records rather than reconstruction. Write-downs disappear. Partner compensation uses verified facts instead of assumptions. Revenue that would have been reconstructed stays on the books.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>Operational Efficiency</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              Senior attorneys stop spending billable hours reconstructing decisions. Scope questions resolve without escalation. Approvals become visible in real-time. Coordination happens with facts, not memory.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>Compliance and Auditability</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              Authority records satisfy internal audits, external examinations, and regulatory inquiries. Decision lineages are transparent and defensible. Firm policy compliance becomes measurable.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>Client Service</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              Invoices are immediately defensible. Work approvals are documented in real-time. Client questions resolve through records. Billing is never reconstructed or questioned.
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
