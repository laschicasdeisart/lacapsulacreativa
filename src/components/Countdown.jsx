import { useEffect, useState } from "react";
import { OFFER_DEADLINE_ISO } from "../constants";

const DAY_MS = 86400000;
const HOUR_MS = 3600000;
const MINUTE_MS = 60000;

function getRemaining() {
  const diff = new Date(OFFER_DEADLINE_ISO).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / DAY_MS),
    hours: Math.floor((diff % DAY_MS) / HOUR_MS),
    minutes: Math.floor((diff % HOUR_MS) / MINUTE_MS),
    seconds: Math.floor((diff % MINUTE_MS) / 1000),
  };
}

const pad = (n) => String(n).padStart(2, "0");

export default function Countdown({ className = "" }) {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!remaining) {
    return <p className={`countdown countdown--closed ${className}`}>La oferta se ha cerrado.</p>;
  }

  const { days, hours, minutes, seconds } = remaining;

  return (
    <div className={`countdown ${className}`} role="timer" aria-live="off">
      <span className="countdown__unit">
        <strong>{pad(days)}</strong>d
      </span>
      <span className="countdown__unit">
        <strong>{pad(hours)}</strong>h
      </span>
      <span className="countdown__unit">
        <strong>{pad(minutes)}</strong>m
      </span>
      <span className="countdown__unit">
        <strong>{pad(seconds)}</strong>s
      </span>
    </div>
  );
}
