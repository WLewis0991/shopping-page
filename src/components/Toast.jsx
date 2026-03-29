import React, { useEffect } from "react";


export default function Toast({ message, show, onClose, duration = 2000 }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <div className={`toast ${show ? "toast-show" : ""}`}>
      {message}
    </div>
  );
}