"use client";

import React, { useEffect, useRef, useState } from "react";

const REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJ47LHNQgWrjsRV0ikmlBQlEY";
const WHATSAPP_URL = "https://wa.me/919886231691";
const MAPS_URL = "https://www.google.com/maps/place/?q=place_id:ChIJ47LHNQgWrjsRV0ikmlBQlEY";
const CATALOGUE_URL = "https://aman482006-beep.github.io/Daga-s-retail-shop-website-/shop/";
const RATING_LABELS = ["", "Poor", "Fair", "Good", "Very good", "Excellent"];

export default function VisitHub() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [rating, setRating] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(true);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (dialogOpen && !dialog.open) dialog.showModal();
    if (!dialogOpen && dialog.open) dialog.close();
  }, [dialogOpen]);

  function toggleTheme() {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
  }

  function continueToGoogle() {
    if (!rating) return;
    const popup = window.open(
      REVIEW_URL,
      "dagasGoogleReview",
      "popup=yes,width=560,height=760,resizable=yes,scrollbars=yes"
    );
    if (popup) popup.opener = null;
    else window.open(REVIEW_URL, "_blank", "noopener,noreferrer");
  }

  return (
    <div className={"review-page theme-" + theme}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap');
        html, body { margin:0; min-height:100%; background:#f8fafd; font-family:Roboto,Arial,sans-serif; }
        body:has(.review-page) { display:block!important; min-height:100vh; padding:0!important; background:#f8fafd; }
        body:has(.review-page)>main { display:block; width:100%; min-height:100vh; margin:0; padding:0; flex:none; }
        .review-page {
          --page:#f8fafd; --surface:#fff; --ink:#202124; --subtle:#5f6368;
          --line:#dadce0; --blue:#1a73e8; --blue-soft:#e8f0fe;
          min-height:100vh; min-height:100svh;
          padding:max(20px,env(safe-area-inset-top)) 18px max(24px,env(safe-area-inset-bottom));
          background:var(--page); color:var(--ink); font-family:Roboto,Arial,sans-serif;
          transition:background .2s,color .2s;
        }
        .review-page.theme-dark { --page:#202124; --surface:#292a2d; --ink:#e8eaed; --subtle:#bdc1c6; --line:#5f6368; --blue:#8ab4f8; --blue-soft:#303f57; }
        .review-shell { max-width:620px; margin:0 auto; }
        .review-top { display:flex; justify-content:space-between; align-items:center; gap:12px; margin-bottom:44px; }
        .review-brand { font:500 16px 'Google Sans',Roboto,Arial,sans-serif; letter-spacing:-.2px; }
        .review-brand small { display:block; margin-top:3px; color:var(--subtle); font:400 12px Roboto,Arial,sans-serif; }
        .theme-toggle { border:1px solid var(--line); background:var(--surface); color:var(--ink); border-radius:999px; padding:9px 14px; font:500 13px Roboto,Arial,sans-serif; cursor:pointer; }
        .review-dialog { width:min(520px,calc(100% - 36px)); max-height:calc(100vh - 36px); overflow:auto; border:0; border-radius:28px; padding:0; margin:auto; background:var(--surface); color:var(--ink); box-shadow:0 12px 40px rgba(60,64,67,.28); }
        .review-dialog::backdrop { background:rgba(32,33,36,.42); }
        .dialog-inner { padding:28px 30px 24px; }
        .dialog-head { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:25px; }
        .google-word { font:500 18px 'Google Sans',Roboto,Arial,sans-serif; letter-spacing:-.7px; }
        .google-word .g1{color:#4285f4}.google-word .g2{color:#ea4335}.google-word .g3{color:#fbbc05}.google-word .g4{color:#4285f4}.google-word .g5{color:#34a853}.google-word .g6{color:#ea4335}
        .dialog-controls { display:flex; align-items:center; gap:4px; }
        .dialog-controls .theme-toggle { padding:8px 12px; }
        .close-dialog { display:grid; place-items:center; width:38px; height:38px; border:0; border-radius:50%; background:transparent; color:var(--subtle); font-size:24px; cursor:pointer; }
        .close-dialog:hover { background:var(--blue-soft); }
        .dialog-title { margin:0 0 7px; font:500 23px/1.25 'Google Sans',Roboto,Arial,sans-serif; letter-spacing:-.4px; }
        .dialog-copy { margin:0; color:var(--subtle); font:400 14px/1.5 Roboto,Arial,sans-serif; }
        .business-row { margin:25px 0 26px; }
        .business-name { font:500 16px 'Google Sans',Roboto,Arial,sans-serif; }
        .business-location { margin-top:3px; color:var(--subtle); font:400 13px Roboto,Arial,sans-serif; }
        .rate-label { margin:0 0 13px; font:500 14px Roboto,Arial,sans-serif; }
        .rating-stars { display:flex; align-items:center; gap:9px; margin:0 0 8px; }
        .rating-stars button { display:grid; place-items:center; width:54px; height:54px; padding:0; border:1px solid var(--line); border-radius:50%; background:var(--surface); color:#bdc1c6; font-size:29px; line-height:1; cursor:pointer; transition:background .15s,border-color .15s,color .15s,transform .15s; }
        .rating-stars button:hover { border-color:var(--blue); transform:translateY(-1px); }
        .rating-stars button.selected { color:#fbbc04; border-color:#fbbc04; background:#fff8e1; }
        .theme-dark .rating-stars button.selected { background:#51411f; }
        .rating-feedback { min-height:20px; margin:6px 0 0; color:var(--subtle); font:400 13px Roboto,Arial,sans-serif; }
        .dialog-note { margin:21px 0 0; padding-top:18px; border-top:1px solid var(--line); color:var(--subtle); font:400 12px/1.5 Roboto,Arial,sans-serif; }
        .dialog-actions { display:flex; justify-content:flex-end; align-items:center; gap:10px; margin-top:23px; }
        .dialog-actions button { min-height:40px; border-radius:999px; padding:0 18px; font:500 14px Roboto,Arial,sans-serif; cursor:pointer; }
        .btn-text { border:0; background:transparent; color:var(--blue); }
        .btn-primary { border:0; background:var(--blue); color:white; }
        .btn-primary:disabled { background:#e8eaed; color:#9aa0a6; cursor:not-allowed; }
        .theme-dark .btn-primary:disabled { background:#3c4043; color:#80868b; }
        .closed-state { max-width:520px; margin:0 auto; padding:42px 26px; border:1px solid var(--line); border-radius:24px; background:var(--surface); text-align:center; }
        .closed-state h1 { margin:0 0 9px; font:500 24px 'Google Sans',Roboto,Arial,sans-serif; }
        .closed-state p { margin:0 auto; max-width:360px; color:var(--subtle); font:400 14px/1.6 Roboto,Arial,sans-serif; }
        .reopen { margin-top:23px; border:0; border-radius:999px; padding:12px 20px; background:var(--blue); color:white; font:500 14px Roboto,Arial,sans-serif; cursor:pointer; }
        .small-links { display:flex; flex-wrap:wrap; justify-content:center; gap:20px; margin-top:28px; }
        .small-links a { color:var(--blue); font:500 13px Roboto,Arial,sans-serif; text-decoration:none; }
        .small-links a:hover { text-decoration:underline; }
        .review-page :focus-visible { outline:2px solid var(--blue); outline-offset:3px; }
        @media(max-width:420px) { .review-top{margin-bottom:26px}.dialog-inner{padding:24px 20px 20px}.rating-stars{gap:6px;justify-content:space-between}.rating-stars button{width:48px;height:48px;font-size:27px}.dialog-title{font-size:21px}.review-dialog{border-radius:24px} }
        @media(prefers-reduced-motion:reduce) { .review-page,.rating-stars button{transition:none} }
      `}</style>

      <div className="review-shell">
        <header className="review-top">
          <div className="review-brand">DAGAS SHOP<small>Thanks for visiting our showroom</small></div>
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Switch colour theme">
            {theme === "light" ? "Dark theme" : "Light theme"}
          </button>
        </header>

        {!dialogOpen && (
          <section className="closed-state">
            <h1>Thanks for visiting DAGAS SHOP</h1>
            <p>Your feedback helps other shoppers and helps us improve. Share an honest rating of your experience.</p>
            <button type="button" className="reopen" onClick={() => setDialogOpen(true)}>Write a Google review</button>
            <div className="small-links">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">Directions</a>
              <a href={CATALOGUE_URL}>Catalogue</a>
            </div>
          </section>
        )}
      </div>

      <dialog ref={dialogRef} className="review-dialog" aria-labelledby="review-title" aria-describedby="review-description" onClose={() => setDialogOpen(false)}>
        <div className="dialog-inner">
          <div className="dialog-head">
            <div className="google-word" aria-label="Google"><span className="g1">G</span><span className="g2">o</span><span className="g3">o</span><span className="g4">g</span><span className="g5">l</span><span className="g6">e</span></div>
            <div className="dialog-controls">
              <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Switch colour theme">
                {theme === "light" ? "Dark theme" : "Light theme"}
              </button>
              <button type="button" className="close-dialog" onClick={() => setDialogOpen(false)} aria-label="Close review popup">×</button>
            </div>
          </div>
          <h1 className="dialog-title" id="review-title">Review DAGAS SHOP</h1>
          <p className="dialog-copy" id="review-description">How was your experience with this business?</p>
          <div className="business-row">
            <div className="business-name">DAGAS SHOP</div>
            <div className="business-location">Sultanpete, Bengaluru</div>
          </div>
          <p className="rate-label">Rate your experience</p>
          <div className="rating-stars" role="group" aria-label="Choose a star rating">
            {[1,2,3,4,5].map((value) => (
              <button key={value} type="button" className={rating>=value?"selected":""} aria-label={value+" out of 5 stars"} aria-pressed={rating===value} onClick={() => setRating(value)}>★</button>
            ))}
          </div>
          <p className="rating-feedback" aria-live="polite">{rating===0?"Select a star to continue":RATING_LABELS[rating]}</p>
          <p className="dialog-note">You’ll finish sharing your rating on Google. Please leave an honest review based on your own experience.</p>
          <div className="dialog-actions">
            <button type="button" className="btn-text" onClick={() => setDialogOpen(false)}>Not now</button>
            <button type="button" className="btn-primary" disabled={rating===0} onClick={continueToGoogle}>Continue to Google</button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
