"use client";

import { useState, useEffect } from "react";

export default function ImagePopup({
  src = "images/affiliation.jpeg",
  autoOpen = true,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (autoOpen) {
      const t = setTimeout(() => setOpen(true), 500);
      return () => clearTimeout(t);
    }
  }, [autoOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={() => setOpen(false)}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(4px)",
        animation: "popupFadeIn 0.25s ease-out",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          animation: "popupZoomIn 0.3s cubic-bezier(.2,.8,.2,1)",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "-12px",
            right: "-12px",
            zIndex: 10,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "none",
            background: "#fff",
            color: "#1f2937",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            fontSize: "20px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s, color 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.color = "#dc2626";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.color = "#1f2937";
          }}
        >
          ✕
        </button>

        {/* Image */}
        <div
          style={{
            overflow: "hidden",
            borderRadius: "16px",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
            background: "#fff",
          }}
        >
          <img
            src={src}
            alt="Announcement"
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes popupZoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
