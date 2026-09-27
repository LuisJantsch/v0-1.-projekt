'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Camera,
  Menu,
  MoveHorizontal,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from 'lucide-react'

const packages = [
  { name: 'Fresh Start', price: '149', description: 'Der schnelle Reset für gepflegte Alltagsfahrzeuge.', features: ['Außenwäsche per Hand', 'Innenraum saugen & pflegen', 'Scheiben innen & außen', 'Reifenpflege'], accent: false },
  { name: 'Premium Finish', price: '299', description: 'Die Rundum-Aufbereitung für einen sichtbar besseren Auftritt.', features: ['Alles aus Fresh Start', 'Polster-Tiefenreinigung', '1-Stufen-Lackpolitur', 'Lederpflege & Versiegelung', 'Leasing-Check inklusive'], accent: true },
  { name: 'Ultimate Shield', price: '599', description: 'Maximaler Schutz für anspruchsvolle Fahrer und Leasingrückgaben.', features: ['Alles aus Premium Finish', '3-Stufen-Lackkorrektur', 'Keramikversiegelung', '3 Jahre Schutzgarantie*', 'Abnahmebegleitung'], accent: false },
]

function Logo() {
  return <Link href="/" className="flex items-center gap-2" aria-label="Stefan Detailing Startseite"><span className="logo-mark">S</span><span className="text-sm font-semibold tracking-[0.16em] uppercase">Stefan<span className="text-acid">.</span>Detailing</span></Link>
}

function BookingModal({ selectedPackage, onClose }: { selectedPackage?: string; onClose: () => void }) {
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <div className="glass-panel w-full max-w-lg rounded-3xl p-7 sm:p-9" role="dialog" aria-modal="true" aria-labelledby="booking-title">
      <div className="flex items-start justify-between gap-6"><div><p className="eyebrow">Prototyp-Buchung</p><h2 id="booking-title" className="mt-3 text-3xl font-semibold tracking-tight">Dein Fahrzeug. <span className="text-acid">Dein Termin.</span></h2></div><button className="icon-button" onClick={onClose} aria-label="Dialog schließen"><X /></button></div>
      <p className="mt-5 text-sm leading-6 text-white/60">Wir nehmen aktuell noch keine echten Buchungen entgegen. Hinterlasse deine Wunschdaten als Vorschau für den späteren Buchungsprozess.</p>
      {selectedPackage && <div className="mt-6 flex items-center gap-3 rounded-2xl border border-acid/20 bg-acid/10 p-4 text-sm"><Sparkles className="text-acid" /> <span>Ausgewählt: <strong>{selectedPackage}</strong></span></div>}
      <div className="mt-7 grid gap-4 sm:grid-cols-2"><div><label className="field-label" htmlFor="name">Vorname</label><input id="name" className="field" placeholder="Stefan" /></div><div><label className="field-label" htmlFor="car">Fahrzeug</label><input id="car" className="field" placeholder="z. B. BMW 3er" /></div></div>
      <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-acid px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-acid/85" onClick={onClose}>Demo-Anfrage vormerken <ArrowRight /></button>
      <p className="mt-4 text-center text-xs text-white/35">Keine Daten werden gespeichert oder versendet.</p>
    </div>
  </div>
}

const bookingReasons = [
  { icon: ShieldCheck, title: 'Werterhalt & Leasing', text: 'Frühzeitige Aufbereitung schützt vor teuren Mängelgebühren bei der Rückgabe.' },
  { icon: Sparkles, title: 'Sichtbares Ergebnis', text: 'Lack, Innenraum und Details werden mit Handarbeit auf Hochglanz gebracht.' },
  { icon: Clock3, title: 'Planbarer Ablauf', text: 'Du sicherst dir deinen Wunschtermin, ohne Wartezeit vor Ort.' },
  { icon: Zap, title: 'Individuelle Beratung', text: 'Wir besprechen den Zustand deines Fahrzeugs und das passende Paket persönlich.' },
]

function ReasonsModal({ onClose, onBook }: { onClose: () => void; onBook: () => void }) {
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <div className="glass-panel w-full max-w-lg rounded-3xl p-7 sm:p-9" role="dialog" aria-modal="true" aria-labelledby="reasons-title">
      <div className="flex items-start justify-between gap-6"><div><p className="eyebrow">Gute Gründe</p><h2 id="reasons-title" className="mt-3 text-3xl font-semibold tracking-tight">Warum einen <span className="text-acid">Termin</span> vereinbaren?</h2></div><button className="icon-button" onClick={onClose} aria-label="Dialog schließen"><X /></button></div>
      <ul className="mt-7 grid gap-4">{bookingReasons.map((reason) => { const Icon = reason.icon; return <li key={reason.title} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[.03] p-4"><Icon className="mt-0.5 shrink-0 text-acid" /><div><strong className="text-white">{reason.title}</strong><p className="mt-1 text-sm leading-6 text-white/55">{reason.text}</p></div></li> })}</ul>
      <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-acid px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-acid/85" onClick={onBook}>Jetzt Termin sichern <ArrowRight /></button>
    </div>
  </div>
}

function BeforeAfter() {
  const [position, setPosition] = useState(52)
  const ref = useRef<HTMLDivElement>(null)
  const update = (clientX: number) => { if (!ref.current) return; const bounds = ref.current.getBoundingClientRect(); setPosition(Math.max(5, Math.min(95, ((clientX - bounds.left) / bounds.width) * 100))) }
  return <div ref={ref} className="before-after" onPointerMove={(e) => e.buttons === 1 && update(e.clientX)} onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); update(e.clientX) }} role="group" aria-label="Vorher-Nachher Vergleich">
    <div className="after-image" aria-hidden="true"><span className="compare-label right">Nachher</span></div><div className="before-image" style={{ width: `${position}%` }} aria-hidden="true"><span className="compare-label left">Vorher</span></div>
    <input aria-label="Vergleich zwischen vorher und nachher" type="range" min="5" max="95" value={position} onChange={(e) => setPosition(Number(e.target.value))} className="compare-range" /><div className="compare-handle" style={{ left: `${position}%` }}><MoveHorizontal /></div>
  </div>
}

export default function DetailingLanding() {
  const [menuOpen, setMenuOpen] = useState(false); const [modalPackage, setModalPackage] = useState<string>(); const [showTop, setShowTop] = useState(false)
  useEffect(() => { const handler = () => setShowTop(window.scrollY > 600); window.addEventListener('scroll', handler, { passive: true }); return () => window.removeEventListener('scroll', handler) }, [])
  useEffect(() => { const handler = (e: KeyboardEvent) => e.key === 'Escape' && (setMenuOpen(false), setModalPackage(undefined)); window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler) }, [])
  const closeMenu = () => setMenuOpen(false)
  return <main className="min-h-screen overflow-x-hidden bg-ink text-white">
    <header className="site-header"><div className="shell flex items-center justify-between"><Logo /><nav className="hidden items-center gap-8 text-sm text-white/60 md:flex"><a href="#pakete" className="nav-link">Pakete</a><a href="#ablauf" className="nav-link">Ablauf</a><a href="#faq" className="nav-link">FAQ</a><Link href="/kontakt" className="nav-link">Kontakt</Link></nav><div className="flex items-center gap-3"><button className="hidden rounded-full bg-acid px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-acid/85 md:block" onClick={() => setModalPackage('Premium Finish')}>Termin sichern</button><button className="icon-button md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button></div></div>{menuOpen && <div className="mobile-menu md:hidden"><a href="#pakete" onClick={closeMenu}>Pakete</a><a href="#ablauf" onClick={closeMenu}>Ablauf</a><a href="#faq" onClick={closeMenu}>FAQ</a><Link href="/kontakt" onClick={closeMenu}>Kontakt</Link><button onClick={() => { closeMenu(); setModalPackage('Premium Finish') }}>Termin sichern <ArrowUpRight /></button></div>}</header>
    <section className="hero-section"><div className="hero-grid" aria-hidden /><div className="hero-orb hero-orb-1" aria-hidden /><div className="hero-orb hero-orb-2" aria-hidden /><div className="hero-glow" /><div className="shell relative grid min-h-[720px] items-center gap-12 py-24 lg:grid-cols-[1.05fr_.95fr] lg:py-28"><div className="relative z-10 max-w-2xl"><p className="eyebrow"><span className="pulse-dot" /> Fahrzeugaufbereitung auf neuem Level</p><h1 className="mt-7 text-balance text-5xl font-semibold leading-[.98] tracking-[-0.06em] sm:text-7xl lg:text-[5.7rem]">Dein Auto.<br /><span className="text-acid">Dein Statement.</span></h1><p className="mt-7 max-w-lg text-base leading-7 text-white/60 sm:text-lg">Wir bringen dein Fahrzeug zurück in den Zustand, in dem du es am liebsten siehst: makellos, geschützt und bereit für die nächste Fahrt.</p><div className="mt-9 flex flex-wrap items-center gap-4"><button className="cta-primary" onClick={() => setModalPackage('Premium Finish')}>Aufbereitung starten <ArrowUpRight /></button><a className="cta-secondary" href="#pakete">Pakete ansehen <ArrowDown /></a></div><div className="mt-12 flex flex-wrap gap-6 text-xs text-white/45"><span className="inline-flex items-center gap-2"><CircleCheck className="text-acid" /> Fixpreis-Garantie</span><span className="inline-flex items-center gap-2"><ShieldCheck className="text-acid" /> 3 Jahre Schutz*</span></div></div><div className="hero-visual"><div className="hero-image" role="img" aria-label="Glänzendes Fahrzeug in einer professionellen Detailing-Werkstatt" /><div className="hero-stamp"><span className="text-3xl font-semibold text-acid">01</span><span className="mt-1 text-[10px] uppercase tracking-[.2em] text-white/45">Detailing<br />Studio</span></div></div></div></section>
    <section className="stats-band"><div className="shell grid grid-cols-2 gap-8 py-8 sm:grid-cols-4"><div><strong>1.200<span className="text-acid">+</span></strong><span>Fahrzeuge veredelt</span></div><div><strong>4,9<span className="text-acid">/5</span></strong><span>Kundenbewertung</span></div><div><strong>7<span className="text-acid">+</span></strong><span>Jahre Erfahrung</span></div><div><strong>100<span className="text-acid">%</span></strong><span>Leidenschaft</span></div></div></section>
    <section id="pakete" className="section-pad"><div className="shell"><div className="section-intro"><div><p className="eyebrow">Pakete</p><h2>Wähle deinen <span className="text-acid">Level.</span></h2></div><p>Keine versteckten Kosten. Kein Kleingedrucktes. Nur ein sichtbares Ergebnis, das sich lohnt.</p></div><div className="package-grid">{packages.map((item, index) => <article key={item.name} className={`package-card ${item.accent ? 'featured' : ''}`}><div className="flex items-start justify-between"><span className="package-number">0{index + 1}</span>{item.accent && <span className="recommended">Empfohlen</span>}</div><h3>{item.name}</h3><p className="package-description">{item.description}</p><div className="price"><span>€</span>{item.price}<small>ab</small></div><ul>{item.features.map((feature) => <li key={feature}><Check /> {feature}</li>)}</ul><button className={item.accent ? 'cta-primary w-full' : 'cta-outline w-full'} onClick={() => setModalPackage(item.name)}>Paket wählen <ArrowRight /></button></article>)}</div><p className="mt-6 text-xs text-white/30">* Beispielinhalte für den Prototyp. Preise und Leistungsumfang werden vor dem Livegang final bestätigt.</p></div></section>
    <section className="section-pad pt-0"><div className="shell grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow">Der Unterschied</p><h2 className="mt-5">Nicht nur sauber.<br /><span className="text-acid">Aufbereitet.</span></h2><p className="mt-6 max-w-md leading-7 text-white/55">Jede Oberfläche bekommt die Aufmerksamkeit, die sie verdient. Von der ersten Handwäsche bis zum letzten Tropfenversiegelung.</p><div className="mt-9 grid gap-5"><div className="feature-row"><Zap className="text-acid" /><div><strong>Präzision statt Schnellwäsche</strong><p>Handarbeit, Erfahrung und ein Blick fürs Detail.</p></div></div><div className="feature-row"><ShieldCheck className="text-acid" /><div><strong>Schutz, der bleibt</strong><p>Hochwertige Produkte für dauerhaften Glanz.</p></div></div><div className="feature-row"><Clock3 className="text-acid" /><div><strong>Zeit für dein Fahrzeug</strong><p>Kein Durchschleusen. Wir nehmen uns die nötige Zeit.</p></div></div></div></div><div><BeforeAfter /><p className="mt-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[.18em] text-white/35"><MoveHorizontal /> Ziehen zum Vergleichen</p></div></div></section>
    <section id="ablauf" className="section-pad border-y border-white/8 bg-white/[.02]"><div className="shell"><div className="section-intro"><div><p className="eyebrow">So läuft&apos;s</p><h2>In drei Schritten<br /><span className="text-acid">zum Wow.</span></h2></div><p>Ein klarer Prozess, ein klares Ergebnis. Du weißt jederzeit, was passiert.</p></div><div className="steps-grid">{[['01', 'Auswählen', 'Wähle das Paket, das zu deinem Fahrzeug und deinem Anspruch passt.'], ['02', 'Vorbeibringen', 'Wir besprechen kurz deine Wünsche und den Zustand deines Fahrzeugs.'], ['03', 'Abholen & staunen', 'Du bekommst dein Fahrzeug zurück – bereit für viele neue Kilometer.']].map(([number, title, text]) => <div className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
    <section className="section-pad"><div className="shell testimonial-wrap"><div className="quote-mark">“</div><p className="eyebrow">Was Kunden sagen</p><blockquote>„Ich dachte, mein Auto wäre sauber. Nach dem Premium Finish wusste ich, wie sauber es wirklich sein kann.“</blockquote><div className="mt-7 flex items-center justify-center gap-3 text-sm"><div className="avatar">MK</div><span><strong>Max K.</strong><span className="ml-2 text-white/35">BMW M340i</span></span><span className="flex text-acid"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></span></div></div></section>
    <section id="faq" className="section-pad pt-0"><div className="shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">FAQ</p><h2 className="mt-5">Noch Fragen?<br /><span className="text-acid">Klären wir.</span></h2></div><div className="faq-list">{['Wie lange dauert eine Aufbereitung?', 'Was muss ich zur Leasingrückgabe wissen?', 'Gilt die Garantie für jedes Fahrzeug?', 'Kann ich mein Paket vor Ort upgraden?'].map((question, index) => <details key={question} open={index === 0}><summary>{question}<ChevronDown /></summary><p>{index === 0 ? 'Je nach Paket planen wir zwischen 3 und 8 Stunden ein. Dein Fahrzeug bleibt dabei in unserer Obhut und wird erst übergeben, wenn alles passt.' : 'Gute Frage – die konkreten Details werden im finalen Angebot transparent und verständlich ausgewiesen. Dieser Bereich ist im Prototyp bewusst beispielhaft.'}</p></details>)}</div></div></section>
    <section className="cta-section"><div className="shell relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow">Bereit für den Unterschied?</p><h2 className="mt-5 max-w-2xl">Dein Auto wartet<br />auf seinen <span className="text-acid">besten Auftritt.</span></h2></div><button className="cta-primary shrink-0" onClick={() => setModalPackage('Premium Finish')}>Jetzt Termin sichern <ArrowUpRight /></button></div></section>
    <footer className="site-footer"><div className="shell flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between"><div><Logo /><p className="mt-4 text-xs text-white/35">Premium Fahrzeugaufbereitung<br />Beispielstandort Deutschland</p></div><div className="flex flex-wrap gap-5 text-xs text-white/40"><Link href="/kontakt" className="hover:text-acid">Kontakt</Link><a href="#" className="hover:text-acid">Impressum</a><a href="#" className="hover:text-acid">Datenschutz</a><a href="https://instagram.com" className="inline-flex items-center gap-1 hover:text-acid" target="_blank" rel="noreferrer"><Camera /> Instagram</a></div><p className="text-xs text-white/25">© 2025 Stefan Detailing</p></div></footer>
    {showTop && <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Zum Seitenanfang"><ArrowUpRight /></button>}
    <div className="mobile-booking"><span><strong>Premium Finish</strong><small>ab 299 €</small></span><button onClick={() => setModalPackage('Premium Finish')}>Termin sichern <ArrowUpRight /></button></div>
    {modalPackage && <BookingModal selectedPackage={modalPackage} onClose={() => setModalPackage(undefined)} />}
  </main>
}

export function ContactPage() {
  const [modalPackage, setModalPackage] = useState<string>()
  const [showReasons, setShowReasons] = useState(false)
  useEffect(() => { const handler = (e: KeyboardEvent) => e.key === 'Escape' && (setModalPackage(undefined), setShowReasons(false)); window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler) }, [])

  return <main className="min-h-screen bg-ink text-white">
    <header className="site-header"><div className="shell flex items-center justify-between"><Logo /><Link href="/" className="nav-link inline-flex items-center gap-2"><ArrowRight className="rotate-180" /> Zur Startseite</Link></div></header>
    <section className="section-pad"><div className="shell max-w-3xl"><p className="eyebrow">Kontakt</p><h1 className="mt-6 text-6xl font-semibold tracking-[-.06em]">Sprich mit <span className="text-acid">Stefan.</span></h1><p className="mt-7 max-w-xl text-lg leading-8 text-white/60">Du hast Fragen zu deinem Fahrzeug, einem Paket oder dem Ablauf? Schreib oder ruf uns an – dieser Kontaktbereich ist aktuell als Vorschau angelegt.</p><div className="mt-12 grid gap-4 sm:grid-cols-2"><a className="contact-card" href="tel:+491234567890"><Phone className="text-acid" /><span><small>Telefon</small><strong>+49 123 456 7890</strong></span></a><div className="contact-card"><Sparkles className="text-acid" /><span><small>Studio</small><strong>Beispielstandort Deutschland</strong></span></div></div><div className="mt-16 rounded-3xl border border-acid/20 bg-acid/5 p-6 text-sm leading-6 text-white/55"><strong className="text-white">Hinweis zum Prototyp:</strong> Es werden keine Nachrichten gespeichert oder versendet. Für den Livegang werden echte Kontaktdaten, Öffnungszeiten und eine rechtlich geprüfte Kontaktstrecke ergänzt.</div></div></section>
    <section className="cta-section"><div className="shell relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow">Bereit für den nächsten Schritt?</p><h2 className="mt-5 max-w-2xl">Dein Auto verdient<br />seinen <span className="text-acid">besten Auftritt.</span></h2></div><div className="flex shrink-0 flex-wrap gap-4"><button className="cta-primary" onClick={() => setModalPackage('Premium Finish')}>Jetzt Termin sichern <ArrowUpRight /></button><button className="cta-secondary" onClick={() => setShowReasons(true)}>Mehr erfahren <ArrowRight /></button></div></div></section>
    <footer className="site-footer"><div className="shell flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between"><div><Logo /><p className="mt-4 text-xs text-white/35">Premium Fahrzeugaufbereitung<br />Beispielstandort Deutschland</p></div><div className="flex flex-wrap gap-5 text-xs text-white/40"><Link href="/kontakt" className="hover:text-acid">Kontakt</Link><a href="#" className="hover:text-acid">Impressum</a><a href="#" className="hover:text-acid">Datenschutz</a><a href="https://instagram.com" className="inline-flex items-center gap-1 hover:text-acid" target="_blank" rel="noreferrer"><Camera /> Instagram</a></div><p className="text-xs text-white/25">© 2025 Stefan Detailing</p></div></footer>
    {showReasons && <ReasonsModal onClose={() => setShowReasons(false)} onBook={() => { setShowReasons(false); setModalPackage('Premium Finish') }} />}
    {modalPackage && <BookingModal selectedPackage={modalPackage} onClose={() => setModalPackage(undefined)} />}
  </main>
}
