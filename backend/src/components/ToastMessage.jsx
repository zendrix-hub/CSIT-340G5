import React, { useEffect } from "react";
import "../styles/toastMessage.css";

export default function ToastMessage({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div className={`toast-message ${show ? "show" : ""}`}>
      {message}
    </div>
  );
}
