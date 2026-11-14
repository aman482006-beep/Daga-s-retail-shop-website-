"use client";

import React, { useEffect, useState } from "react";

const SHOP = {
  name: "DAGAS SHOP",
  tagline: "Thanks for visiting our Sultanpete showroom",
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
  happyMin: 4,
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
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [feedbackName, setFeedbackName] = useState("");
  const [need, setNeed] = useState("Product availability");
  const [details, setDetails] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem("dagas-visit-hub-theme");
    } catch {
      saved = null;
    }
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = saved === "light" || saved === "dark" ? saved : prefersDark ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      window.localStorage.setItem("dagas-visit-hub-theme", nextTheme);
    } catch {
      // The theme still changes for this visit when storage is unavailable.
    }
  }

  function chooseRating(value: number) {
    setRating(value);
    if (value >= SHOP.happyMin) {
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

  const offersMessage = "Hi DAGAS SHOP, I visited your showroom and would like to receive updates about new arrivals and offers on WhatsApp. Please share the details.";
  const isHappy = rating >= SHOP.happyMin;

  return (
    <div className="vh-root" data-theme={theme || undefined}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Figtree:wght@400;500;600&display=swap');
        body:has(.vh-root) {
          display: block !important;
          min-height: 100vh;
          margin: 0;
          padding: 0 !important;
          overflow-x: hidden;
          background: var(--vh-bg);
          color: var(--vh-ink);
          font-family: Figtree, system-ui, sans-serif;
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
          --vh-bg: #f3f4f9;
          --vh-surf: #fff;
          --vh-ink: #151a3d;
          --vh-mute: #667085;
          --vh-line: #dfe2ee;
          --vh-ind: #1f2a6b;
          --vh-onind: #fff;
          --vh-gold: #f0a91c;
          --vh-soft: #e8ebf7;
          box-sizing: border-box;
          min-height: 100vh;
          min-height: 100svh;
          padding: calc(18px + env(safe-area-inset-top, 0px)) 18px calc(104px + env(safe-area-inset-bottom, 0px));
          background: var(--vh-bg);
          color: var(--vh-ink);
          color-scheme: light;
          font: 400 16px/1.5 Figtree, system-ui, sans-serif;
          transition: background .3s, color .3s;
        }
        .vh-root[data-theme="dark"] {
          --vh-bg: #0d1026;
          --vh-surf: #171b3a;
          --vh-ink: #eef0fb;
          --vh-mute: #9aa0c4;
          --vh-line: #2a3063;
          --vh-ind: #8fa0ff;
          --vh-onind: #0d1026;
          --vh-gold: #ffc14a;
          --vh-soft: #222850;
          color-scheme: dark;
        }
        @media (prefers-color-scheme: dark) {
          .vh-root:not([data-theme="light"]) {
            --vh-bg: #0d1026;
            --vh-surf: #171b3a;
            --vh-ink: #eef0fb;
            --vh-mute: #9aa0c4;
            --vh-line: #2a3063;
            --vh-ind: #8fa0ff;
            --vh-onind: #0d1026;
            --vh-gold: #ffc14a;
            --vh-soft: #222850;
            color-scheme: dark;
          }
        }
        .vh-root *, .vh-root *::before, .vh-root *::after { box-sizing: border-box; }
        .vh-wrap { max-width: 460px; margin: 0 auto; }
        .vh-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
        .vh-brand { font: 700 1.15rem Bricolage Grotesque, sans-serif; letter-spacing: -.01em; }
        .vh-tagline { color: var(--vh-mute); font-size: .82rem; }
        .vh-theme { width: 40px; height: 40px; border-radius: 50%; border: 1px solid var(--vh-line); background: var(--vh-surf); color: var(--vh-ink); font-size: 1.05rem; cursor: pointer; }
        .vh-title { font: 700 2rem/1.08 Bricolage Grotesque, sans-serif; letter-spacing: -.025em; margin: 0 0 8px; }
        .vh-copy { margin: 0 0 14px; color: var(--vh-mute); }
        .vh-pane { display: none; }
        .vh-pane.on { display: block; animation: vh-in .35s ease both; }
        @keyframes vh-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .vh-card { background: var(--vh-surf); border: 1px solid var(--vh-line); border-radius: 28px; padding: 24px 20px; }
        .vh-stars { position: relative; display: flex; justify-content: space-between; margin: 26px 4px 8px; }
        .vh-stars::before, .vh-stars-fill { content: ""; position: absolute; left: 22px; right: 22px; top: 50%; height: 0; border-top: 2px dashed var(--vh-line); }
        .vh-stars-fill { right: auto; width: 0; border-color: var(--vh-gold); transition: width .55s cubic-bezier(.2,.8,.2,1); }
        .vh-stars button { position: relative; z-index: 1; width: 50px; height: 50px; border-radius: 50%; border: 1.5px solid var(--vh-line); background: var(--vh-surf); color: var(--vh-line); font-size: 1.5rem; cursor: pointer; transition: transform .25s, background .25s, color .25s, border-color .25s; animation: vh-pop .5s both; }
        .vh-stars button:nth-of-type(1) { animation-delay: .3s; }
        .vh-stars button:nth-of-type(2) { animation-delay: .42s; }
        .vh-stars button:nth-of-type(3) { animation-delay: .54s; }
        .vh-stars button:nth-of-type(4) { animation-delay: .66s; }
        .vh-stars button:nth-of-type(5) { animation-delay: .78s; }
        @keyframes vh-pop { from { opacity: 0; transform: scale(.6); } to { opacity: 1; transform: none; } }
        .vh-stars button.f { background: var(--vh-gold); border-color: var(--vh-gold); color: #3a2800; transform: scale(1.08); }
        .vh-hint { display: flex; justify-content: space-between; font-size: .75rem; color: var(--vh-mute); padding: 0 6px; }
        .vh-result { display: none; margin-top: 22px; border-top: 1px solid var(--vh-line); padding-top: 20px; }
        .vh-result.on { display: block; animation: vh-in .35s both; }
        .vh-root label { display: block; font-size: .85rem; font-weight: 600; margin: 14px 0 6px; }
        .vh-root input, .vh-root textarea, .vh-root select { width: 100%; padding: 14px 16px; border: 1px solid var(--vh-line); border-radius: 16px; background: var(--vh-bg); color: var(--vh-ink); font: inherit; }
        .vh-btn { display: block; width: 100%; margin-top: 18px; padding: 16px; border: 0; border-radius: 999px; background: var(--vh-ind); color: var(--vh-onind); font: 600 1rem Figtree, sans-serif; text-align: center; text-decoration: none; cursor: pointer; transition: transform .15s; }
        .vh-btn:active { transform: scale(.98); }
        .vh-btn.alt { background: var(--vh-soft); color: var(--vh-ink); }
        .vh-link { display: block; text-align: center; margin-top: 14px; color: var(--vh-mute); font-size: .85rem; text-decoration: underline; }
        .vh-perks { list-style: none; padding: 0; margin: 0 0 6px; }
        .vh-perks li { padding: 12px 0; border-bottom: 1px solid var(--vh-line); }
        .vh-perks li:last-child { border: 0; }
        .vh-nav { position: fixed; left: 50%; transform: translateX(-50%); bottom: calc(14px + env(safe-area-inset-bottom, 0px)); display: flex; gap: 2px; padding: 6px; border-radius: 999px; background: var(--vh-surf); border: 1px solid var(--vh-line); box-shadow: 0 10px 30px rgba(20,26,70,.18); z-index: 5; }
        .vh-nav button { padding: 11px 16px; border: 0; border-radius: 999px; background: none; color: var(--vh-mute); font: 600 .88rem Figtree, sans-serif; cursor: pointer; transition: background .25s, color .25s; }
        .vh-nav button.on { background: var(--vh-ind); color: var(--vh-onind); }
        .vh-root :focus-visible { outline: 2px solid var(--vh-gold); outline-offset: 2px; }
        @media (max-width: 360px) { .vh-nav button { padding: 10px 13px; } .vh-card { padding: 22px 16px; } }
        @media (prefers-reduced-motion: reduce) { .vh-root *, .vh-root *::before, .vh-root *::after { animation: none !important; transition: none !important; } }
      `}</style>

      <div className="vh-wrap">
        <header className="vh-top">
          <div>
            <div className="vh-brand">{SHOP.name}</div>
            <div className="vh-tagline">{SHOP.tagline}</div>
          </div>
          <button className="vh-theme" type="button" onClick={toggleTheme} aria-label="Switch theme">
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </header>

        <main>
          <section className={"vh-pane" + (activeTab === "rate" ? " on" : "")} aria-hidden={activeTab !== "rate"}>
            <div className="vh-card">
              <h1 className="vh-title">How was your visit?</h1>
              <p className="vh-copy">Tap a star. It takes ten seconds.</p>
              <div className="vh-stars" aria-label="Rate your visit from one to five stars">
                <i className="vh-stars-fill" style={{ width: rating ? "calc((100% - 44px) * " + ((rating - 1) / 4) + ")" : "0" }} />
                {[1, 2, 3, 4, 5].map((value) => (
                  <button key={value} type="button" className={rating >= value ? "f" : ""} aria-label={value + " star" + (value > 1 ? "s" : "")} aria-pressed={rating === value} onClick={() => chooseRating(value)}>★</button>
                ))}
              </div>
              <div className="vh-hint"><span>Not great</span><span>Loved it</span></div>

              <div className={"vh-result" + (rating > 0 && isHappy ? " on" : "")} aria-live="polite">
                <b>Thank you! Your review helps other shoppers find us.</b>
                <a className="vh-btn" href={SHOP.reviewUrl} target="_blank" rel="noopener noreferrer">Open Google review</a>
                <p className="vh-copy" style={{ marginTop: 12, fontSize: ".85rem" }}>On Google, tap the same star once more and add a line if you like.</p>
              </div>

              <div className={"vh-result" + (rating > 0 && !isHappy ? " on" : "")} aria-live="polite">
                <b>Sorry we fell short. What went wrong?</b>
                <label htmlFor="vh-feedback">Your feedback</label>
                <textarea id="vh-feedback" rows={4} value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                <label htmlFor="vh-feedback-name">Name and phone (optional)</label>
                <input id="vh-feedback-name" autoComplete="name" value={feedbackName} onChange={(e) => setFeedbackName(e.target.value)} />
                <button className="vh-btn" type="button" onClick={sendFeedback}>Send to the owner</button>
                <a className="vh-link" href={SHOP.reviewUrl} target="_blank" rel="noopener noreferrer">Rather post a public Google review?</a>
              </div>
            </div>
          </section>

          <section className={"vh-pane" + (activeTab === "ask" ? " on" : "")} aria-hidden={activeTab !== "ask"}>
            <div className="vh-card">
              <h1 className="vh-title">Can’t find your size?</h1>
              <p className="vh-copy">Ask us. We reply on WhatsApp.</p>
              <label htmlFor="vh-need">What do you need?</label>
              <select id="vh-need" value={need} onChange={(e) => setNeed(e.target.value)}>
                <option>Product availability</option><option>Size or alteration</option><option>Bulk or wedding order</option><option>Something else</option>
              </select>
              <label htmlFor="vh-details">Details</label>
              <input id="vh-details" placeholder="Black kurta, size M" value={details} onChange={(e) => setDetails(e.target.value)} />
              <label htmlFor="vh-visitor-name">Your name</label>
              <input id="vh-visitor-name" autoComplete="name" value={visitorName} onChange={(e) => setVisitorName(e.target.value)} />
              <button className="vh-btn" type="button" onClick={sendQuestion}>Message the store</button>
            </div>
          </section>

          <section className={"vh-pane" + (activeTab === "off" ? " on" : "")} aria-hidden={activeTab !== "off"}>
            <div className="vh-card">
              <h1 className="vh-title">Get offers first</h1>
              <p className="vh-copy">Ask us on WhatsApp for new-arrival and offer updates. No spam.</p>
              <ul className="vh-perks">{SHOP.perks.map((perk) => <li key={perk}>{perk}</li>)}</ul>
              <a className="vh-btn" href={whatsappLink("Hi DAGAS SHOP, I visited your showroom and would like to receive updates about new arrivals and offers on WhatsApp. Please share the details.")} target="_blank" rel="noopener noreferrer">Get offers on WhatsApp</a>
              <a className="vh-btn alt" href={SHOP.catalogueUrl}>Browse the catalogue</a>
            </div>
          </section>

          <section className={"vh-pane" + (activeTab === "vis" ? " on" : "")} aria-hidden={activeTab !== "vis"}>
            <div className="vh-card">
              <h1 className="vh-title">Visit the store</h1>
              <p className="vh-copy">{SHOP.address}</p>
              <p className="vh-copy">{SHOP.hours}</p>
              <a className="vh-btn" href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
              <a className="vh-btn alt" href={"tel:" + SHOP.phone}>Call us</a>
            </div>
          </section>
        </main>
      </div>

      <nav className="vh-nav" aria-label="Sections">
        {tabs.map((tab) => (
          <button key={tab.id} type="button" className={activeTab === tab.id ? "on" : ""} aria-current={activeTab === tab.id ? "page" : undefined} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
        ))}
      </nav>
    </div>
  );
}
