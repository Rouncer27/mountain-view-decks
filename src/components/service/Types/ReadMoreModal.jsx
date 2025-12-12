import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function ReadMoreModal({ isOpen, onClose, contentHtml, title }) {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  // Animate on open
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        overlayRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.3, ease: "power2.out" },
      );

      gsap.fromTo(
        modalRef.current,
        { autoAlpha: 0, scale: 0.85 },
        { autoAlpha: 1, scale: 1, duration: 0.35, ease: "power3.out" },
      );
    }
  }, [isOpen]);

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      gsap.set(overlayRef.current, { clearProps: "all" });
      gsap.set(modalRef.current, { clearProps: "all" });
    }
  }, [isOpen]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div
      ref={overlayRef}
      className={`readmore-modal-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className={`readmore-modal ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
