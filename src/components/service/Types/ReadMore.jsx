import { useState, useEffect } from "react";
import ReadMoreModal from "./ReadMoreModal";

export default function ReadMore({ html, title, limit = 150 }) {
  const [open, setOpen] = useState(false);
  const [textOnly, setTextOnly] = useState("");
  const [isLong, setIsLong] = useState(false);

  useEffect(() => {
    // Runs only in browser — safe to use document
    const temp = document.createElement("div");
    temp.innerHTML = html;
    const text = temp.textContent || temp.innerText || "";

    setTextOnly(text);
    setIsLong(text.length > limit);
  }, [html, limit]);

  if (!textOnly) return null;

  const shortText = textOnly.substring(0, limit) + (isLong ? "..." : "");

  return (
    <>
      <div>
        {shortText}
        {isLong && <button onClick={() => setOpen(true)}>Read more</button>}
      </div>

      <ReadMoreModal
        isOpen={open}
        onClose={() => setOpen(false)}
        contentHtml={html}
        title={title}
      />
    </>
  );
}
