import { useEffect } from "react";

export default function ReadMoreModal({ isOpen, onClose, contentHtml, title }) {
  if (!isOpen) return null;

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="readmore-modal-overlay" onClick={onClose}>
      <div className="readmore-modal" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
