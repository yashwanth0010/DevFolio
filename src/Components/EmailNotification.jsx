import { useState, useEffect, useCallback } from "react";
import '../Assets/css/EmailNotification.css';

const ICONS = {
  success: (
    <path d="M20 6 9 17l-5-5" />
  ),
  error: (
    <>
      <path d="M12 8v5" />
      <path d="M12 16.5h.01" />
      <path d="M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    </>
  ),
};

export const EmailNotification = ({ type = "success", title, message, duration = 4000, onClose }) => {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  const dismiss = useCallback(() => {
    if (!visible) return;
    setLeaving(true);
    window.setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, 300);
  }, [onClose, visible]);

  useEffect(() => {
    if (!duration) return;
    const t = window.setTimeout(dismiss, duration);
    return () => window.clearTimeout(t);
  }, [duration, dismiss]);

  if (!visible) return null;

  return (
    <div
      className={`toast toast--${type}${leaving ? " toast--leaving" : ""}`}
      role={type === "error" ? "alert" : "status"}
      aria-live={type === "error" ? "assertive" : "polite"}
    >
      <span className="toast__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
             strokeLinecap="round" strokeLinejoin="round">
          {ICONS[type]}
        </svg>
      </span>

      <div className="toast__body">
        <p className="toast__title">{title}</p>
        <p className="toast__message">{message}</p>
      </div>

      <button className="toast__close" aria-label="Dismiss" onClick={dismiss}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      {duration ? (
        <span className="toast__progress" style={{ animationDuration: `${duration}ms` }} />
      ) : null}
    </div>
  );
}
export default EmailNotification;






/* ---- demo harness: shows both, re-triggerable ---- */
// export default function App() {
//   const [toasts, setToasts] = useState([
//     { id: 1, type: "success", title: "Message sent", message: "Your message has been sent successfully." },
//     { id: 2, type: "error", title: "Couldn’t send message", message: "Something went wrong. Check your connection and try again." },
//   ]);

//   const remove = (id) => setToasts((list) => list.filter((t) => t.id !== id));
//   const reset = () =>
//     setToasts([
//       { id: Date.now(), type: "success", title: "Message sent", message: "Your message has been sent successfully." },
//       { id: Date.now() + 1, type: "error", title: "Couldn’t send message", message: "Something went wrong. Check your connection and try again." },
//     ]);

//   return (
//     <div className="toast-wrap">
//       <style>{styles}</style>
//       {toasts.map((t) => (
//         <Toast key={t.id} {...t} onClose={() => remove(t.id)} />
//       ))}
//       <button className="demo-btn" onClick={reset}>Show toasts again</button>
//     </div>
//   );
// }