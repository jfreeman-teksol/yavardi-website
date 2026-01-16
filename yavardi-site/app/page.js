'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '70px' }}>
        <section className="hero" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8rem 1.5rem 2rem',
          background: 'linear-gradient(135deg, #000, #1a1a1a)',
          color: '#fff'
        }}>
          <div style={{ maxWidth: '1000px', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '1.5rem' }}>
              If the chain of custody breaks on a physical exhibit, the case fails.
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#ddd', marginBottom: '2rem', lineHeight: 1.6 }}>
              Digital legal work produces the same legal and financial consequences, yet authority is rarely preserved with the same evidentiary discipline.
            </p>
            <p style={{ fontSize: '1.25rem', color: '#ddd', fontWeight: 700, marginBottom: '2rem' }}>
              When authorization is later questioned, what record exists?
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '2rem' }}>The Reconstruction Tax</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              The Reconstruction Tax is the cost of proving decisions after execution has already occurred.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              It surfaces when the firm is asked to explain who approved a change, when it was approved, and under what authority—during billing review, reporting, audits, or disputes.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333', fontWeight: 600 }}>
              Billing entries, approvals, document changes, access actions, and system handoffs execute every day without a complete lineage of who acted, what triggered the action, and under what authority it occurred.
            </p>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(180deg, #DBDBDB, #e8e8e8)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Engagement Record — Billing & Reporting Transition</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333', fontWeight: 600 }}>
              Billing, reporting, and partner compensation continued during an active system transition.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              Billing entries, expenses, deposits, and reports were entered in more than one system at the same time. Staff selected which numbers to use when systems disagreed.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              Partner compensation was calculated using month-end reports that had not been fully reconciled.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              Partners were paid based on those reports. Errors were discovered after compensation was issued.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              Correction required reconstructing billing, deposits, and reports while new work continued.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333', fontWeight: 600 }}>
              Overpayments were issued and later corrected.
            </p>
          </div>
        </section>

        <section style={{ background: '#000', color: '#fff', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '2rem' }}>Dominion</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 600 }}>
              Dominion captures authority at the moment execution occurs.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Dominion is Yavardi's governance platform for law firms. It deploys inside the firm's existing Microsoft environment.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              When a consequential action occurs, Dominion preserves the approval that already took place as part of execution.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 600 }}>
              That record remains available during billing review, audits, and disputes.
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
              Billing systems record what was billed. Document systems record what was saved. Access controls record who can enter.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333', fontWeight: 600 }}>
              None of these systems preserve who authorized a decision at execution.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333', fontWeight: 600 }}>
              Dominion preserves authority where decisions occur—before execution reaches billing, documents, or access layers.
            </p>
          </div>
        </section>

        <section style={{ background: '#000', color: '#fff', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '2rem' }}>What Changes Inside the Firm</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Authority is preserved at execution. Billing review relies on records rather than memory. Scope questions resolve without escalation. Senior time remains focused on revenue work. Approved work is defended without reconstruction.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 600 }}>
              Execution continues in the same tools. Authority is preserved when it matters.
            </p>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(180deg, #DBDBDB, #e8e8e8)', padding: '4rem 2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', color: '#333', fontWeight: 600 }}>
              Authority capture must exist at the infrastructure layer. It cannot be added through policy or process after the fact.
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
            <p style={{ marginTop: '3rem', color: '#555', fontSize: '0.9rem' }}>
              Initial review conducted at no cost. Findings inform your governance roadmap.
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>Jonathan Freeman</h3>
            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1.5rem' }}>Founder</p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, fontStyle: 'italic', color: '#333' }}>
              "I've spent years building enterprise infrastructure for legal operations at national scale. Dominion exists because I kept seeing the same problem: firms had the right tools but no governance over how those tools executed legally consequential work. Yavardi deploys that governance as infrastructure."
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
