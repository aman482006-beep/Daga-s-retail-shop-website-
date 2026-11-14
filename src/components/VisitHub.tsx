"use client";

import React, { useEffect, useState } from "react";

const SHOP = {
  name: "DAGAS SHOP",
  location: "Sultanpete, Bengaluru",
  reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ47LHNQgWrjsRV0ikmlBQlEY",
  whatsapp: "919886231691",
  phone: "+919886231691",
  catalogueUrl: "https://aman482006-beep.github.io/Daga-s-retail-shop-website-/shop/",
  address: "Shop No. 301, 3rd Floor, Mohana Square, #132/1, Sultanpet Main Road, Bengaluru, Karnataka 560053, India",
  hours: "Monday – Saturday, 11:00 AM – 8:30 PM IST · Sunday closed / by appointment",
  mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ47LHNQgWrjsRV0ikmlBQlEY",
  perks: [
    "Wholesale kidswear for retailers and boutiques",
    "Flexible quantities with no fixed MOQ",
    "New arrivals, ready stock and bulk-order support",
  ],
};

const tabs = [
  { id: "rate", label: "Rate" },
  { id: "ask", label: "Ask" },
  { id: "off", label: "Offers" },
  { id: "vis", label: "Visit" },
];

function whatsappLink(message: string) {
  return "https://wa.me/" + SHOP.whatsapp + "?text=" + encodeURIComponent(message);
}

export default function VisitHub() {
  const [activeTab, setActiveTab] = useState("rate");
  const [reviewOpen, setReviewOpen] = useState(true);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [feedbackName, setFeedbackName] = useState("");
  const [need, setNeed] = useState("Product availability");
  const [details, setDetails] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // New visitors always see the light design. Dark mode is only used after an explicit choice.
    try {
      const saved = window.localStorage.getItem("dagas-visit-hub-theme");
      if (saved === "dark") {
        setTheme("dark");
      }
    } catch {
      // Keep the default light theme if storage is unavailable.
    }
  }, []);

  useEffect(() => {
    if (!reviewOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setReviewOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [reviewOpen]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      window.localStorage.setItem("dagas-visit-hub-theme", nextTheme);
    } catch {
      // Theme remains changed for this visit even if storage is unavailable.
    }
  }

  function chooseRating(value: number) {
    setRating(value);
    if (value >= 4) {
      // This click is a direct user gesture, so the real Google review page can open in a new tab.
      window.open(SHOP.reviewUrl, "_blank", "noopener,noreferrer");
    }
  }

  function sendFeedback() {
    const message = [
      "DAGAS SHOP visit feedback",
      "Rating: " + rating + " stars",
      "Feedback: " + (feedback.trim() || "Not provided"),
      "Name / phone: " + (feedbackName.trim() || "Not provided"),
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  function sendQuestion() {
    const message = [
      "Hi DAGAS SHOP, I have a showroom enquiry.",
      "Requirement: " + need,
      "Details: " + (details.trim() || "Please contact me with more information."),
      "Name: " + (visitorName.trim() || "Not provided"),
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  const offersMessage =
    "Hi DAGAS SHOP, I visited your showroom and would like to receive updates about new arrivals and offers on WhatsApp. Please share the details.";

  return (
    <div className="vh-root" data-theme={theme}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');
        body:has(.vh-root) {
          display: block !important;
          min-height: 100vh;
          margin: 0;
          padding: 0 !important;
          overflow-x: hidden;
          background: var(--vh-bg);
          color: var(--vh-ink);
          font-family: Roboto, Arial, sans-serif;
        }
        body:has(.vh-root) > main {
          display: block;
          width: 100%;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          flex: none;
        }
        .vh-root {
          --vh-bg: #f8f9fa;
          --vh-surf: #fff;
          --vh-ink: #202124;
          --vh-mute: #5f6368;
          --vh-line: #dadce0;
          --vh-blue: #1a73e8;
          --vh-blue-soft: #e8f0fe;
          --vh-star: #fbbc04;
          min-height: 100vh;
          min-height: 100svh;
          padding: max(18px, env(safe-area-inset-top, 0px)) 16px calc(104px + env(safe-area-inset-bottom, 0px));
          background: var(--vh-bg);
          color: var(--vh-ink);
          color-scheme: light;
          font: 400 16px/1.5 Roboto, Arial, sans-serif;
          transition: background .2s, color .2s;
        }
        .vh-root[data-theme="dark"] {
          --vh-bg: #17191c;
          --vh-surf: #22252a;
          --vh-ink: #e8eaed;
          --vh-mute: #bdc1c6;
          --vh-line: #3c4043;
          --vh-blue: #8ab4f8;
          --vh-blue-soft: #26364d;
          --vh-star: #fdd663;
          color-scheme: dark;
        }
        .vh-root *,.vh-root *::before,.vh-root *::after { box-sizing: border-box; }
        .vh-wrap { max-width: 520px; margin: 0 auto; }
        .vh-top { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:24px; }
        .vh-brand { font-size:17px; font-weight:700; letter-spacing:.01em; }
        .vh-tag { color:var(--vh-mute); font-size:13px; margin-top:2px; }
        .vh-theme { width:40px; height:40px; border:1px solid var(--vh-line); border-radius:50%; background:var(--vh-surf); color:var(--vh-ink); font-size:18px; cursor:pointer; }
        .vh-title { margin:0 0 8px; font-size:24px; line-height:1.25; font-weight:600; letter-spacing:-.3px; }
        .vh-copy { margin:0 0 16px; color:var(--vh-mute); font-size:14px; line-height:1.55; }
        .vh-card { padding:24px 20px; border:1px solid var(--vh-line); border-radius:18px; background:var(--vh-surf); box-shadow:0 1px 2px rgba(60,64,67,.10); }
        .vh-card + .vh-card { margin-top:14px; }
        .vh-btn { display:inline-flex; align-items:center; justify-content:center; width:100%; min-height:48px; padding:13px 18px; margin-top:12px; border:0; border-radius:8px; background:var(--vh-blue); color:#fff; font:500 14px Roboto,Arial,sans-serif; text-decoration:none; cursor:pointer; }
        .vh-btn.secondary { background:var(--vh-blue-soft); color:var(--vh-blue); }
        .vh-link { display:block; margin-top:14px; color:var(--vh-blue); font-size:13px; text-align:center; text-decoration:none; }
        .vh-root label { display:block; margin:14px 0 6px; font-size:13px; font-weight:500; }
        .vh-root input,.vh-root textarea,.vh-root select { display:block; width:100%; padding:13px 14px; border:1px solid var(--vh-line); border-radius:8px; background:var(--vh-surf); color:var(--vh-ink); font:400 15px Roboto,Arial,sans-serif; }
        .vh-root textarea { resize:vertical; }
        .vh-list { padding:0; margin:0; list-style:none; }
        .vh-list li { padding:13px 0; border-bottom:1px solid var(--vh-line); font-size:14px; }
        .vh-list li:last-child { border-bottom:0; }
        .vh-modal-backdrop { position:fixed; inset:0; z-index:20; display:flex; align-items:center; justify-content:center; padding:20px 14px calc(20px + env(safe-area-inset-bottom,0px)); background:rgba(32,33,36,.48); }
        .vh-modal { position:relative; width:min(100%,440px); max-height:calc(100dvh - 40px - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px)); overflow:auto; border-radius:20px; background:var(--vh-surf); color:var(--vh-ink); box-shadow:0 12px 40px rgba(0,0,0,.28); padding:25px 24px 22px; animation:vh-pop .18s ease-out both; }
        @keyframes vh-pop { from { opacity:0; transform:translateY(8px) scale(.985); } to { opacity:1; transform:none; } }
        .vh-modal-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; }
        .vh-google { display:flex; align-items:center; gap:9px; font-size:17px; font-weight:500; letter-spacing:-.3px; }
        .vh-google-g { font:700 27px Arial,sans-serif; background:conic-gradient(from -45deg,#4285f4 0 25%,#34a853 25% 48%,#fbbc05 48% 70%,#ea4335 70% 86%,#4285f4 86%); color:transparent; background-clip:text; -webkit-background-clip:text; }
        .vh-close { width:36px; height:36px; border:0; border-radius:50%; background:transparent; color:var(--vh-mute); font-size:23px; cursor:pointer; }
        .vh-google-sub { margin-top:2px; color:var(--vh-mute); font-size:12px; }
        .vh-business { padding:16px 0 18px; border-top:1px solid var(--vh-line); border-bottom:1px solid var(--vh-line); }
        .vh-business-name { font-size:18px; font-weight:600; }
        .vh-business-loc { margin-top:3px; color:var(--vh-mute); font-size:13px; }
        .vh-rate-label { margin:19px 0 10px; font-size:14px; font-weight:500; }
        .vh-stars { display:flex; align-items:center; justify-content:space-between; gap:6px; max-width:330px; margin:0 auto 8px; }
        .vh-star { display:flex; align-items:center; justify-content:center; width:54px; height:54px; border:0; border-radius:50%; background:transparent; color:#dadce0; font-size:35px; line-height:1; cursor:pointer; transition:background .15s,color .15s,transform .15s; }
        .vh-star:hover,.vh-star:focus-visible { background:var(--vh-blue-soft); color:var(--vh-star); }
        .vh-star.selected { color:var(--vh-star); }
        .vh-star:active { transform:scale(.94); }
        .vh-muted-note { color:var(--vh-mute); font-size:12px; text-align:center; margin:0; }
        .vh-followup { margin-top:18px; padding-top:18px; border-top:1px solid var(--vh-line); }
        .vh-nav { position:fixed; left:50%; bottom:calc(13px + env(safe-area-inset-bottom,0px)); z-index:8; display:flex; gap:2px; width:max-content; max-width:calc(100vw - 24px); padding:5px; transform:translateX(-50%); border:1px solid var(--vh-line); border-radius:999px; background:var(--vh-surf); box-shadow:0 3px 12px rgba(60,64,67,.16); }
        .vh-nav button { padding:10px 16px; border:0; border-radius:999px; background:transparent; color:var(--vh-mute); font:500 13px Roboto,Arial,sans-serif; cursor:pointer; }
        .vh-nav button.on { background:var(--vh-blue-soft); color:var(--vh-blue); }
        .vh-root :focus-visible { outline:2px solid var(--vh-blue); outline-offset:2px; }
        @media(max-width:360px) { .vh-modal { padding:22px 17px 18px; } .vh-star { width:47px; height:47px; font-size:31px; } .vh-nav button { padding:10px 13px; } }
        @media(prefers-reduced-motion:reduce) { .vh-root *, .vh-root *::before, .vh-root *::after { animation:none!important; transition:none!important; } }
      `}</style>

      <div className="vh-wrap">
        <header className="vh-top">
          <div>
            <div className="vh-brand">{SHOP.name}</div>
            <div className="vh-tag">{SHOP.location} · Thanks for visiting</div>
          </div>
          <button className="vh-theme" type="button" onClick={toggleTheme} aria-label="Switch theme" title="Switch theme">
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </header>

        <main>
          {activeTab === "rate" && (
            <section className="vh-card">
              <h1 className="vh-title">Thanks for visiting DAGAS SHOP</h1>
              <p className="vh-copy">Your feedback helps other shoppers discover us.</p>
              <button className="vh-btn" type="button" onClick={() => setReviewOpen(true)}>Rate your visit</button>
            </section>
          )}

          {activeTab === "ask" && (
            <section className="vh-card">
              <h1 className="vh-title">Can’t find your size?</h1>
              <p className="vh-copy">Ask us. We’ll reply on WhatsApp.</p>
              <label htmlFor="vh-need">What do you need?</label>
              <select id="vh-need" value={need} onChange={(e) => setNeed(e.target.value)}>
                <option>Product availability</option><option>Size or alteration</option><option>Bulk or wedding order</option><option>Something else</option>
              </select>
              <label htmlFor="vh-details">Details</label>
              <input id="vh-details" placeholder="Product name, colour or size" value={details} onChange={(e) => setDetails(e.target.value)} />
              <label htmlFor="vh-name">Your name (optional)</label>
              <input id="vh-name" autoComplete="name" value={visitorName} onChange={(e) => setVisitorName(e.target.value)} />
              <button className="vh-btn" type="button" onClick={sendQuestion}>Message the store</button>
            </section>
          )}

          {activeTab === "off" && (
            <section className="vh-card">
              <h1 className="vh-title">Get offers first</h1>
              <p className="vh-copy">Ask us on WhatsApp for new-arrival and offer updates. No spam.</p>
              <ul className="vh-list">{SHOP.perks.map((perk) => <li key={perk}>{perk}</li>)}</ul>
              <a className="vh-btn" href={whatsappLink(offersMessage)} target="_blank" rel="noopener noreferrer">Get offers on WhatsApp</a>
              <a className="vh-btn secondary" href={SHOP.catalogueUrl}>Browse the catalogue</a>
            </section>
          )}

          {activeTab === "vis" && (
            <section className="vh-card">
              <h1 className="vh-title">Visit the store</h1>
              <p className="vh-copy">{SHOP.address}</p>
              <p className="vh-copy">{SHOP.hours}</p>
              <a className="vh-btn" href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
              <a className="vh-btn secondary" href={"tel:" + SHOP.phone}>Call us</a>
            </section>
          )}
        </main>
      </div>

      {reviewOpen && activeTab === "rate" && (
        <div className="vh-modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setReviewOpen(false); }}>
          <section className="vh-modal" role="dialog" aria-modal="true" aria-labelledby="vh-dialog-title">
            <div className="vh-modal-top">
              <div>
                <div className="vh-google"><span className="vh-google-g" aria-hidden="true">G</span><span id="vh-dialog-title">Google review</span></div>
                <div className="vh-google-sub">Share your experience</div>
              </div>
              <button className="vh-close" type="button" onClick={() => setReviewOpen(false)} aria-label="Close review window">×</button>
            </div>

            <div className="vh-business">
              <div className="vh-business-name">{SHOP.name}</div>
              <div className="vh-business-loc">{SHOP.location}</div>
            </div>

            <div className="vh-rate-label">Rate your experience</div>
            <div className="vh-stars" aria-label="Rate your experience from one to five stars">
              {[1, 2, 3, 4, 5].map((value) => (
                <button key={value} type="button" className={"vh-star" + (rating >= value ? " selected" : "")} aria-label={value + " star" + (value > 1 ? "s" : "")} aria-pressed={rating === value} onClick={() => chooseRating(value)}>★</button>
              ))}
            </div>
            <p className="vh-muted-note">Tap a star to continue to Google reviews.</p>

            {rating > 0 && rating < 4 && (
              <div className="vh-followup" aria-live="polite">
                <strong>Sorry we fell short. What went wrong?</strong>
                <label htmlFor="vh-feedback">Your feedback</label>
                <textarea id="vh-feedback" rows={3} value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                <label htmlFor="vh-feedback-name">Name and phone (optional)</label>
                <input id="vh-feedback-name" autoComplete="name" value={feedbackName} onChange={(e) => setFeedbackName(e.target.value)} />
                <button className="vh-btn" type="button" onClick={sendFeedback}>Send feedback privately</button>
              </div>
            )}

            {rating >= 4 && (
              <div className="vh-followup" aria-live="polite">
                <strong>Thank you for your rating.</strong>
                <p className="vh-copy">Google reviews should now be open in a new tab. You can finish sharing your experience there.</p>
                <a className="vh-btn" href={SHOP.reviewUrl} target="_blank" rel="noopener noreferrer">Continue to Google review</a>
              </div>
            )}
          </section>
        </div>
      )}

      <nav className="vh-nav" aria-label="Sections">
        {tabs.map((tab) => (
          <button key={tab.id} type="button" className={activeTab === tab.id ? "on" : ""} aria-current={activeTab === tab.id ? "page" : undefined} onClick={() => { setActiveTab(tab.id); if (tab.id === "rate") setReviewOpen(true); else setReviewOpen(false); }}>{tab.label}</button>
        ))}
      </nav>
    </div>
  );
}
