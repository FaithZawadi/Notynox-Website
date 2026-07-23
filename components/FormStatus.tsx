"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

/**
 * Shows a success / error banner after the PHP contact handler redirects
 * back to this page with ?sent=1 or ?error=1.
 */
export default function FormStatus() {
  const [status, setStatus] = useState<"sent" | "error" | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") setStatus("sent");
    else if (params.get("error") === "1") setStatus("error");
  }, []);

  if (!status) return null;

  if (status === "sent") {
    return (
      <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3">
        <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-[var(--text-primary)]">
          <span className="font-semibold">Thank you!</span> Your enquiry has been
          sent — our team will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
      <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-[var(--text-primary)]">
        Sorry, something went wrong sending your message. Please email us directly
        at{" "}
        <a
          href="mailto:notynox.engineering@gmail.com"
          className="font-semibold text-orange-600 underline"
        >
          notynox.engineering@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
