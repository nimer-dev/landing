'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import RoutingDemo from './components/RoutingDemo';
import CostCalculator from './components/CostCalculator';
import FAQ from './components/FAQ';

const FORMSPREE = "https://formspree.io/f/mnjlyawe";

// Syntax tokens
const kw  = (t: string) => <span className="token-kw">{t}</span>;
const fn  = (t: string) => <span className="token-fn">{t}</span>;
const str = (t: string) => <span className="token-str">{t}</span>;
const cmt = (t: string) => <span className="token-cmt">{t}</span>;
const cls = (t: string) => <span className="token-cls">{t}</span>;
const num = (t: string) => <span className="token-num">{t}</span>;
const acc = (t: string) => <span className="token-acc">{t}</span>;

const FEATURES = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
      </svg>
    ),
    title: "Intelligent Routing",
    desc: "Deterministic classifier picks Haiku, Sonnet, or Opus based on length, complexity, and code signals — in under 3ms.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Drop-in Replacement",
    desc: "Change one import. That's the entire migration. Same method signatures, same parameters, same behaviour.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: "Privacy First",
    desc: "The SDK runs in your process. We log token counts, model used, and timestamp only — never prompts or completions.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: "Real-time Analytics",
    desc: "Dashboard tracks every routed call — savings, model distribution, token spend, and budget utilization over time.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "3ms Overhead",
    desc: "Routing is fully synchronous and deterministic. No network calls, no models, no perceptible latency to your users.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    title: "Full Control",
    desc: "Set auto_route=False per call to pin a model. Configure routing rules. Set quality floors. You're always in charge.",
  },
];

export default function Home() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus('success'); setEmail(''); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <main style={{ minHeight: '100vh', color: 'var(--fg)' }}>
      <Navbar />

      {/* ════════════════════════════════════════════════════
          HERO — centered, Linear-style
      ════════════════════════════════════════════════════ */}
      <section id="hero" style={{ padding: '148px 24px 80px', textAlign: 'center', position: 'relative' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          {/* Badge */}
          <div className="badge fade-up" style={{ marginBottom: 28, display: 'inline-flex' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', display: 'inline-block', animation: 'pulse-dot 2s ease-in-out infinite' }} />
            Open beta · MIT licensed · Python 3.11+
          </div>

          {/* Headline */}
          <h1
            className="fade-up"
            style={{
              fontSize: 'clamp(42px, 7vw, 76px)',
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: '-0.03em',
              marginBottom: 22,
              animationDelay: '60ms',
              color: 'var(--fg)',
            }}
          >
            Stop overpaying<br />
            <span className="gradient-text">for Claude API calls.</span>
          </h1>

          {/* Sub */}
          <p
            className="fade-up"
            style={{
              fontSize: 18,
              color: 'var(--fg-2)',
              lineHeight: 1.72,
              maxWidth: 560,
              margin: '0 auto 36px',
              animationDelay: '120ms',
            }}
          >
            Drop-in Python SDK that routes requests to Haiku, Sonnet, or Opus
            based on task complexity. Same code.{' '}
            <span style={{ color: 'var(--fg)', fontWeight: 500 }}>~60% less on your bill.</span>
          </p>

          {/* CTAs */}
          <div
            className="fade-up"
            style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 16, animationDelay: '180ms' }}
          >
            <button
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              style={{ padding: '12px 24px', fontSize: 14, borderRadius: 8, fontFamily: 'inherit' }}
            >
              Get early access →
            </button>
            <a
              href="https://github.com/nimer-dev/optimizer-sdk"
              target="_blank" rel="noopener noreferrer"
              className="btn-ghost"
              style={{ padding: '12px 24px', fontSize: 14, borderRadius: 8, fontFamily: 'inherit' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>

          <p className="fade-up" style={{ fontSize: 12, color: 'var(--fg-muted)', animationDelay: '220ms' }}>
            SDK free forever · 14-day dashboard trial · No credit card
          </p>
        </div>

        {/* Routing Demo — hero visual */}
        <div
          className="fade-up"
          style={{ maxWidth: 500, margin: '56px auto 0', animationDelay: '260ms' }}
        >
          <RoutingDemo />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          STATS STRIP
      ════════════════════════════════════════════════════ */}
      <section style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{
          maxWidth: 900, margin: '0 auto', padding: '44px 24px',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
        }}>
          {[
            { val: '~60%',  label: 'average savings',    accent: true },
            { val: '$0',    label: 'free tier forever',   accent: false },
            { val: '14',    label: 'tests passing',       accent: false },
            { val: '<3ms',  label: 'routing overhead',    accent: false },
          ].map((s, i) => (
            <div key={s.label} style={{
              textAlign: 'center', padding: '0 16px',
              borderRight: i < 3 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.03em', color: s.accent ? 'var(--accent)' : 'var(--fg)' }}>
                {s.val}
              </div>
              <div className="font-mono" style={{ fontSize: 11, color: 'var(--fg-muted)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FEATURES — Linear-style 3-col grid
      ════════════════════════════════════════════════════ */}
      <section id="features" style={{ borderTop: '1px solid var(--border)', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="badge" style={{ marginBottom: 16, display: 'inline-flex' }}>Features</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 14 }}>
              Everything you need.{' '}
              <span className="gradient-text">Nothing you don&apos;t.</span>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--fg-2)', maxWidth: 480, margin: '0 auto' }}>
              Intelligent routing with zero infrastructure. Works with your existing Claude integration out of the box.
            </p>
          </div>

          {/* 3-col feature grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="card"
                style={{
                  padding: '28px 28px 32px',
                  borderRadius: 0,
                  border: 'none',
                  borderRight: (i % 3 !== 2) ? '1px solid var(--border)' : 'none',
                  borderBottom: (i < 3) ? '1px solid var(--border)' : 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.035)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div className="icon-box" style={{ marginBottom: 16, color: 'var(--accent)' }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8, color: 'var(--fg)', letterSpacing: '-0.01em' }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PROBLEM
      ════════════════════════════════════════════════════ */}
      <section style={{ borderTop: '1px solid var(--border)', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gap: 64, alignItems: 'center', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <div className="badge" style={{ marginBottom: 18 }}>The Problem</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.025em', marginBottom: 18 }}>
              Most teams send{' '}
              <span style={{ color: '#f87171' }}>everything</span>{' '}
              to Sonnet.
            </h2>
            <p style={{ color: 'var(--fg-2)', lineHeight: 1.75, fontSize: 15 }}>
              Every &ldquo;Hi&rdquo;. Every classification. Every two-word lookup — all hitting a $3/M-token model.
              It works, but you&apos;re burning budget on tasks Haiku handles for 12× less.
            </p>
          </div>

          <div className="card" style={{ padding: '28px 24px' }}>
            <div className="font-mono" style={{ fontSize: 11, color: 'var(--fg-muted)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Input cost · per 1M tokens
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { name: 'claude-haiku-4.5',  price: '$0.25',  pct: 2,   color: '#34d399' },
                { name: 'claude-sonnet-4.6', price: '$3.00',  pct: 20,  color: '#6366f1' },
                { name: 'claude-opus-4.7',   price: '$15.00', pct: 100, color: '#a78bfa' },
              ].map((m) => (
                <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className="font-mono" style={{ width: 130, fontSize: 12, color: 'var(--fg-muted)', flexShrink: 0 }}>
                    {m.name}
                  </span>
                  <div style={{ flex: 1, height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ width: `${m.pct}%`, height: '100%', background: m.color, borderRadius: 3, boxShadow: `0 0 8px ${m.color}50` }} />
                  </div>
                  <span className="font-mono" style={{ width: 44, fontSize: 12, color: m.color, textAlign: 'right', flexShrink: 0 }}>
                    {m.price}
                  </span>
                </div>
              ))}
            </div>
            <div className="font-mono" style={{ marginTop: 20, padding: '10px 14px', background: 'rgba(248,113,113,0.07)', borderRadius: 8, border: '1px solid rgba(248,113,113,0.15)', fontSize: 12, color: 'var(--fg-2)' }}>
              Sonnet for a Haiku task ={' '}
              <span style={{ color: '#f87171', fontWeight: 500 }}>12× overspend.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════════════════ */}
      <section id="how" style={{ borderTop: '1px solid var(--border)', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="badge" style={{ marginBottom: 16, display: 'inline-flex' }}>How it works</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.025em' }}>
              Three steps.{' '}
              <span className="gradient-text">One minute.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
            {[
              { n: '01', title: 'Install', code: 'pip install nimer-optimizer', desc: 'Add to your existing Python environment. No other changes required.' },
              { n: '02', title: 'Swap the import', code: 'from nimer import Anthropic', desc: 'That single line is the entire migration. Everything else stays identical.' },
              { n: '03', title: 'Ship, unchanged', code: null, desc: 'Same SDK interface. Same method signatures. Intelligent routing starts immediately with zero code changes.' },
            ].map((step) => (
              <div key={step.n} className="card" style={{ padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
                <div className="font-mono" style={{ fontSize: 11, color: 'var(--accent)', marginBottom: 14, letterSpacing: '0.1em', fontWeight: 600 }}>
                  {step.n}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 12 }}>
                  {step.title}
                </h3>
                {step.code ? (
                  <code className="font-mono" style={{
                    display: 'block', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border)',
                    borderRadius: 8, padding: '10px 14px', fontSize: 13, color: 'var(--accent)', marginBottom: 12,
                  }}>
                    {step.code}
                  </code>
                ) : null}
                <p className="font-mono" style={{ fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.65, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CODE COMPARISON
      ════════════════════════════════════════════════════ */}
      <section style={{ borderTop: '1px solid var(--border)', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.025em' }}>
              Your code{' '}
              <span className="gradient-text">barely changes.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {/* Before */}
            <div className="code-block">
              <div className="code-block-header">
                <div className="code-dot code-dot-r" />
                <div className="code-dot code-dot-y" />
                <div className="code-dot code-dot-g" />
                <span className="font-mono" style={{ fontSize: 11, color: 'var(--fg-muted)', marginLeft: 6 }}>before.py</span>
                <span style={{ marginLeft: 'auto', fontSize: 10, padding: '2px 7px', borderRadius: 4, background: 'rgba(248,113,113,0.1)', color: '#f87171', fontFamily: 'monospace' }}>
                  billing: $$$
                </span>
              </div>
              <pre style={{ padding: '20px 18px', fontSize: 13, fontFamily: 'var(--font-geist-mono)', lineHeight: 1.8, overflowX: 'auto', margin: 0 }}>
                <code>
                  {kw('from')} anthropic {kw('import')} {cls('Anthropic')}{'\n\n'}
                  client = {cls('Anthropic')}(){'\n'}
                  resp = client.messages.{fn('create')}({'\n'}
                  {'    '}{acc('model')}{str('"claude-sonnet-4-6"')},{'\n'}
                  {'    '}{acc('max_tokens')}{num('1024')},{'\n'}
                  {'    '}{acc('messages')}=[{'{'}
                  {str('"role"')}: {str('"user"')},{'\n'}
                  {'                '}
                  {str('"content"')}: {str('"Hi"')}{'}'}],{'\n'}
                  )
                </code>
              </pre>
            </div>

            {/* After */}
            <div className="code-block" style={{ borderColor: 'rgba(99,102,241,0.25)', boxShadow: '0 0 32px rgba(99,102,241,0.08)' }}>
              <div className="code-block-header">
                <div className="code-dot code-dot-r" />
                <div className="code-dot code-dot-y" />
                <div className="code-dot code-dot-g" />
                <span className="font-mono" style={{ fontSize: 11, color: 'var(--accent)', marginLeft: 6 }}>after.py</span>
                <span style={{ marginLeft: 'auto', fontSize: 10, padding: '2px 7px', borderRadius: 4, background: 'rgba(99,102,241,0.12)', color: 'var(--accent)', fontFamily: 'monospace' }}>
                  ~60% saved
                </span>
              </div>
              <pre style={{ padding: '20px 18px', fontSize: 13, fontFamily: 'var(--font-geist-mono)', lineHeight: 1.8, overflowX: 'auto', margin: 0 }}>
                <code>
                  {kw('from')} {cls('nimer')} {kw('import')} {cls('Anthropic')}{'\n\n'}
                  client = {cls('Anthropic')}(){'\n'}
                  resp = client.messages.{fn('create')}({'\n'}
                  {'    '}{acc('model')}{str('"claude-sonnet-4-6"')},{'\n'}
                  {'    '}{acc('max_tokens')}{num('1024')},{'\n'}
                  {'    '}{acc('messages')}=[{'{'}
                  {str('"role"')}: {str('"user"')},{'\n'}
                  {'                '}
                  {str('"content"')}: {str('"Hi"')}{'}'}],{'\n'}
                  ){'\n'}
                  {cmt('# → routed to haiku-4.5 · saved $0.000021')}
                </code>
              </pre>
            </div>
          </div>

          <p className="font-mono" style={{ marginTop: 16, fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.6, textAlign: 'center' }}>
            Routing is configurable · Privacy-first · Never logs prompts or completions
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CALCULATOR
      ════════════════════════════════════════════════════ */}
      <CostCalculator />

      {/* ════════════════════════════════════════════════════
          PRICING
      ════════════════════════════════════════════════════ */}
      <section id="pricing" style={{ borderTop: '1px solid var(--border)', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="badge" style={{ marginBottom: 16, display: 'inline-flex' }}>Pricing</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 14 }}>
              Pay{' '}
              <span className="gradient-text">a fraction</span>{' '}
              of what you save.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--fg-2)' }}>
              The SDK is free forever. Pay only for the dashboard and advanced features.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, alignItems: 'start' }}>
            {[
              {
                name: 'Free',
                price: '$0',
                sub: 'forever',
                desc: 'For solo developers exploring intelligent routing.',
                features: ['Full SDK access', 'Community routing rules', 'Local logging only', 'MIT open source'],
                hl: false,
                cta: 'Start free',
                onClick: () => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }),
              },
              {
                name: 'Pro',
                price: '$29',
                sub: '/ month',
                desc: 'For builders shipping products with Claude.',
                features: ['Everything in Free', 'Web dashboard + analytics', 'Custom routing rules', 'Budget alerts at 50/75/90%', 'Email support'],
                hl: true,
                cta: 'Join waitlist',
                onClick: () => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }),
              },
              {
                name: 'Scale',
                price: '$99',
                sub: '/ month',
                desc: 'For teams running Claude in production.',
                features: ['Everything in Pro', 'Team seats (5+)', 'Audit log + SSO', 'Priority support', 'SLA guarantee'],
                hl: false,
                cta: 'Contact us',
                onClick: () => { window.location.href = 'mailto:nimershahm@gmail.com'; },
              },
            ].map((tier) => (
              <div
                key={tier.name}
                style={{
                  padding: '28px 24px',
                  borderRadius: 14,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  background: tier.hl ? 'rgba(99,102,241,0.06)' : 'var(--bg-card)',
                  border: `1px solid ${tier.hl ? 'rgba(99,102,241,0.3)' : 'var(--border)'}`,
                  boxShadow: tier.hl ? '0 0 48px rgba(99,102,241,0.1)' : 'none',
                }}
              >
                {tier.hl && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                    color: '#fff', fontSize: 10, fontFamily: 'var(--font-geist-mono)',
                    letterSpacing: '0.1em', padding: '4px 14px', borderRadius: 100,
                    textTransform: 'uppercase', whiteSpace: 'nowrap',
                  }}>Most popular</div>
                )}

                <div style={{ marginBottom: 6, fontSize: 15, fontWeight: 600, color: 'var(--fg)' }}>{tier.name}</div>
                <p style={{ fontSize: 13, color: 'var(--fg-muted)', marginBottom: 20, lineHeight: 1.5 }}>{tier.desc}</p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginBottom: 28 }}>
                  <span style={{ fontSize: 44, fontWeight: 700, color: tier.hl ? 'var(--accent)' : 'var(--fg)', letterSpacing: '-0.03em', lineHeight: 1 }}>{tier.price}</span>
                  <span className="font-mono" style={{ fontSize: 12, color: 'var(--fg-muted)' }}>{tier.sub}</span>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24, flex: 1, padding: 0, listStyle: 'none' }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13 }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span>
                      <span style={{ color: 'var(--fg-2)', lineHeight: 1.4 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={tier.onClick}
                  className={tier.hl ? 'btn-primary' : 'btn-ghost'}
                  style={{ width: '100%', padding: '11px', borderRadius: 8, fontSize: 14, fontFamily: 'inherit', cursor: 'pointer' }}
                >{tier.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════════ */}
      <div id="faq"><FAQ /></div>

      {/* ════════════════════════════════════════════════════
          FINAL CTA — waitlist
      ════════════════════════════════════════════════════ */}
      <section id="waitlist" style={{ borderTop: '1px solid var(--border)', padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -60%)',
          width: 600, height: 400,
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div className="badge" style={{ marginBottom: 24, display: 'inline-flex' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', display: 'inline-block', animation: 'pulse-dot 2s ease-in-out infinite' }} />
            SDK free forever · 14-day dashboard trial
          </div>

          <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: 18 }}>
            Start saving on{' '}
            <span className="gradient-text">your next deploy.</span>
          </h2>
          <p style={{ color: 'var(--fg-2)', fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            One import change. No infrastructure. No API keys to manage.
            Your Claude calls get cheaper immediately.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="email" required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              disabled={status === 'loading' || status === 'success'}
              style={{
                flex: 1, minWidth: 240, maxWidth: 320,
                padding: '13px 18px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border)', borderRadius: 9,
                color: 'var(--fg)', fontSize: 15, outline: 'none',
                transition: 'border-color 0.2s',
                fontFamily: 'inherit',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="btn-primary"
              style={{ padding: '13px 24px', borderRadius: 9, fontSize: 15, fontFamily: 'inherit' }}
            >
              {status === 'success' ? '✓ You\'re on the list' : status === 'loading' ? '…' : 'Get early access'}
            </button>
          </form>

          {status === 'error' && (
            <p style={{ marginTop: 12, fontSize: 13, color: '#f87171' }}>Something went wrong — please try again.</p>
          )}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════════ */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '36px 24px' }}>
        <div style={{
          maxWidth: 1080, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <div style={{
                width: 22, height: 22, borderRadius: 6,
                background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 700, color: '#fff',
              }}>N</div>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>Nimer</span>
            </div>
            <div className="font-mono" style={{ fontSize: 11, color: 'var(--fg-muted)' }}>
              Built in Dammam, Saudi Arabia · Made for the world
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {[
              { label: 'GitHub',   href: 'https://github.com/nimer-dev' },
              { label: 'Twitter',  href: 'https://twitter.com/trynimer' },
              { label: 'Docs',     href: 'https://github.com/nimer-dev/optimizer-sdk' },
              { label: 'Contact',  href: 'mailto:nimershahm@gmail.com' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="font-mono"
                style={{
                  padding: '6px 12px', fontSize: 12, color: 'var(--fg-muted)',
                  textDecoration: 'none', borderRadius: 6, transition: 'color 0.15s, background 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--fg)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--fg-muted)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >{l.label}</a>
            ))}
          </div>

          <div className="font-mono" style={{ fontSize: 11, color: 'var(--fg-muted)' }}>
            © 2026 Nimer · MIT License
          </div>
        </div>
      </footer>
    </main>
  );
}
