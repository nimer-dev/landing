'use client';

import { useState } from 'react';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjlyawe"; // ← ضع رابط Formspree هنا

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus('success'); setEmail(''); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <main className="min-h-screen text-[color:var(--fg)]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-28 md:pt-32 md:pb-40">
          <div className="flex items-center gap-3 mb-8 fade-up">
            <div className="h-px w-10 bg-[color:var(--accent)]" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--fg-muted)] font-mono-display">
              The Claude API cost optimizer
            </span>
          </div>

          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight mb-8 fade-up" style={{ animationDelay: '80ms' }}>
            Stop overpaying<br />
            for tokens you<br />
            <span className="italic text-[color:var(--accent)]">don&apos;t need.</span>
          </h1>

          <p className="text-lg md:text-xl text-[color:var(--fg-muted)] max-w-2xl mb-12 leading-relaxed fade-up" style={{ animationDelay: '160ms' }}>
            Drop-in Python SDK that routes between Haiku, Sonnet, and Opus automatically.
            Same API. Smarter spending. <span className="text-[color:var(--fg)]">~60% less on your bill.</span>
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md fade-up" style={{ animationDelay: '240ms' }}>
            <input
              type="email" required value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              disabled={status === 'loading' || status === 'success'}
              className="flex-1 px-4 py-3 bg-[color:var(--bg-soft)] border border-[color:var(--border)] rounded-md text-[color:var(--fg)] placeholder:text-[color:var(--fg-muted)] focus:outline-none focus:border-[color:var(--accent)] transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-6 py-3 bg-[color:var(--accent)] text-[#0a0e1a] font-medium rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap"
            >
              {status === 'loading' ? '...' : status === 'success' ? '✓ on the list' : 'Join waitlist'}
            </button>
          </form>

          {status === 'error' && (
            <p className="mt-3 text-sm text-red-400">Something went wrong. Try again.</p>
          )}

          <div className="mt-6 fade-up" style={{ animationDelay: '320ms' }}>
            <a href="https://github.com/nimer-dev/optimizer-sdk" target="_blank" rel="noopener noreferrer"
              className="text-sm text-[color:var(--fg-muted)] hover:text-[color:var(--fg)] transition-colors inline-flex items-center gap-2 font-mono-display">
              <span>or read the source on GitHub</span>
              <span>→</span>
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[color:var(--accent)] opacity-[0.08] blur-3xl rounded-full pointer-events-none" />
      </section>

      {/* PROBLEM */}
      <section className="border-t border-[color:var(--border)] py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--fg-muted)] font-mono-display">01 / The problem</span>
            <h2 className="font-serif-display text-4xl md:text-5xl mt-4 mb-6 leading-tight">
              Most teams use<br /><em className="text-[color:var(--accent)]">Sonnet</em> for everything.
            </h2>
            <p className="text-[color:var(--fg-muted)] leading-relaxed">
              Every &ldquo;Hi&rdquo;. Every classification. Every short answer — all routed to a $3/M-token model.
              It works, but you&apos;re torching budget on tasks Haiku could handle for a fraction.
            </p>
          </div>
          <div className="bg-[color:var(--bg-soft)] border border-[color:var(--border)] rounded-lg p-6 font-mono-display text-sm">
            <div className="text-[color:var(--fg-muted)] text-xs mb-4">// per 1M input tokens</div>
            <div className="space-y-3">
              {[
                { name: 'haiku-4.5', price: '$1.00', width: 'w-[8%]' },
                { name: 'sonnet-4.6', price: '$3.00', width: 'w-[20%]' },
                { name: 'opus-4.7', price: '$15.00', width: 'w-full' },
              ].map((m) => (
                <div key={m.name} className="flex items-center gap-3">
                  <span className="w-24">{m.name}</span>
                  <div className="flex-1 h-2 bg-[color:var(--border)] rounded relative">
                    <div className={`absolute left-0 top-0 h-full ${m.width} bg-[color:var(--accent)] rounded`} />
                  </div>
                  <span className="text-[color:var(--fg-muted)] w-16 text-right">{m.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-[color:var(--border)] text-xs text-[color:var(--fg-muted)]">
              Sonnet for a Haiku task = 3× overspend.
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="border-t border-[color:var(--border)] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--fg-muted)] font-mono-display">02 / How it works</span>
          <h2 className="font-serif-display text-4xl md:text-5xl mt-4 mb-12 leading-tight">
            Three lines. <em className="text-[color:var(--accent)]">That&apos;s it.</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: '01', t: 'Install', body: 'pip install nimer-optimizer', code: true },
              { n: '02', t: 'Swap one import', body: 'from nimer import Anthropic', code: true },
              { n: '03', t: 'Ship', body: 'Same SDK signature. Smart routing under the hood.', code: false },
            ].map((s) => (
              <div key={s.n} className="border-l-2 border-[color:var(--border)] pl-6 hover:border-[color:var(--accent)] transition-colors">
                <div className="text-xs font-mono-display text-[color:var(--fg-muted)] mb-2">{s.n}</div>
                <h3 className="font-serif-display text-2xl mb-3">{s.t}</h3>
                {s.code ? (
                  <code className="block bg-[color:var(--bg-soft)] border border-[color:var(--border)] rounded px-3 py-2 text-sm text-[color:var(--accent)] font-mono-display">{s.body}</code>
                ) : (
                  <p className="text-sm text-[color:var(--fg-muted)] leading-relaxed">{s.body}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CODE */}
      <section className="border-t border-[color:var(--border)] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--fg-muted)] font-mono-display">03 / Drop-in</span>
          <h2 className="font-serif-display text-4xl md:text-5xl mt-4 mb-12 leading-tight">
            Your code <em className="text-[color:var(--accent)]">barely changes.</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[color:var(--bg-soft)] border border-[color:var(--border)] rounded-lg overflow-hidden">
              <div className="px-4 py-2 border-b border-[color:var(--border)] flex justify-between text-xs font-mono-display">
                <span className="text-[color:var(--fg-muted)]">before.py</span>
                <span className="text-red-400">$$$</span>
              </div>
              <pre className="p-4 text-sm font-mono-display leading-relaxed overflow-x-auto"><code>{`from anthropic import Anthropic

client = Anthropic()
resp = client.messages.create(
  model="claude-sonnet-4-6",
  max_tokens=1024,
  messages=[{"role":"user",
             "content":"Hi"}]
)`}</code></pre>
            </div>
            <div className="bg-[color:var(--bg-soft)] border border-[color:var(--accent)] rounded-lg overflow-hidden">
              <div className="px-4 py-2 border-b border-[color:var(--border)] flex justify-between text-xs font-mono-display">
                <span className="text-[color:var(--accent)]">after.py</span>
                <span className="text-[color:var(--accent)]">~60% less</span>
              </div>
              <pre className="p-4 text-sm font-mono-display leading-relaxed overflow-x-auto"><code>{`from nimer import Anthropic

client = Anthropic()
resp = client.messages.create(
  model="claude-sonnet-4-6",
  max_tokens=1024,
  messages=[{"role":"user",
             "content":"Hi"}]
)
# routed to haiku-4.5 automatically`}</code></pre>
            </div>
          </div>
          <p className="text-sm text-[color:var(--fg-muted)] mt-6 leading-relaxed max-w-2xl">
            Routing rules are configurable. Privacy-first logging — token counts only, never your prompts.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="border-t border-[color:var(--border)] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--fg-muted)] font-mono-display">04 / Pricing</span>
          <h2 className="font-serif-display text-4xl md:text-5xl mt-4 mb-12 leading-tight">
            Pay <em className="text-[color:var(--accent)]">a fraction</em> of what you save.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Free', price: '$0', desc: 'SDK + community routing rules', cta: 'forever', hl: false },
              { name: 'Pro', price: '$29', desc: 'Dashboard, analytics, custom rules', cta: '/ month', hl: true },
              { name: 'Scale', price: '$99', desc: 'Team seats, audit log, priority', cta: '/ month', hl: false },
            ].map((t) => (
              <div key={t.name} className={`p-6 rounded-lg border ${t.hl ? 'border-[color:var(--accent)] bg-[color:var(--accent-soft)]' : 'border-[color:var(--border)] bg-[color:var(--bg-soft)]'}`}>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-serif-display text-2xl">{t.name}</span>
                  {t.hl && <span className="text-xs font-mono-display text-[color:var(--accent)]">popular</span>}
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-serif-display text-4xl">{t.price}</span>
                  <span className="text-sm text-[color:var(--fg-muted)] font-mono-display">{t.cta}</span>
                </div>
                <p className="text-sm text-[color:var(--fg-muted)] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[color:var(--border)] py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="font-serif-display text-xl">Nimer</div>
            <div className="text-xs text-[color:var(--fg-muted)] font-mono-display mt-1">Built in Saudi Arabia · Made for the world</div>
          </div>
          <div className="flex gap-6 text-sm font-mono-display text-[color:var(--fg-muted)]">
            <a href="https://twitter.com/trynimer" target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--fg)] transition-colors">Twitter</a>
            <a href="https://github.com/nimer-dev" target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--fg)] transition-colors">GitHub</a>
            <a href="mailto:nimershahm@gmail.com" className="hover:text-[color:var(--fg)] transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}