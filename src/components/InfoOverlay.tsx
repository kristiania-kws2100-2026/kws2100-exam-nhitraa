import React from "react";

const items = [
  {
    color: "rgba(255,210,0,0.85)",
    label: "Daylight accident",
    shape: "circle",
  },
  {
    color: "rgba(255,140,0,0.85)",
    label: "Dark, lit road accident",
    shape: "circle",
  },
  {
    color: "rgba(200,30,30,0.85)",
    label: "Dark, no lighting accident",
    shape: "circle",
  },
  {
    color: "rgba(150,150,150,0.85)",
    label: "Unknown lighting accident",
    shape: "circle",
  },
  { color: "rgba(255,60,60,0.75)", label: "Fire station", shape: "diamond" },
  { color: "rgba(0,150,255,0.85)", label: "Hospital", shape: "diamond" },
  { color: "rgba(60,180,60,0.9)", label: "Tunnel", shape: "line" },
];

export function InfoOverlay() {
  return (
    <div className="info-overlay">
      {items.map(({ color, label, shape }) => (
        <div key={label} className="info-overlay-item">
          <span className="info-overlay-icon">
            {shape === "line" ? (
              <span
                className="info-overlay-line"
                style={{ background: color }}
              />
            ) : (
              <span
                className={`info-overlay-dot info-overlay-dot-${shape === "circle" ? "circle" : "diamond"}`}
                style={{ background: color }}
              />
            )}
          </span>
          {label}
        </div>
      ))}
    </div>
  );
}
