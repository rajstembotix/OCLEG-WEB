"use client";

import { FormEvent, useRef, useState } from "react";
import { company } from "@/data/catalog";

const fieldClass =
  "w-full border border-brand-line bg-white px-3 py-3 outline-none focus:border-brand-red";

type EnquiryKind = "career" | "dealer" | "contact";

const config: Record<
  EnquiryKind,
  {
    title: string;
    subject: string;
    submit: string;
    extraLabel?: string;
    extraName?: string;
  }
> = {
  career: {
    title: "Apply / Send Resume Details",
    subject: "Career application from ",
    submit: "Submit Application",
    extraLabel: "Position / area of interest",
    extraName: "position",
  },
  dealer: {
    title: "Dealer Enquiry Form",
    subject: "Dealer enquiry from ",
    submit: "Submit Dealer Enquiry",
    extraLabel: "City / territory of interest",
    extraName: "territory",
  },
  contact: {
    title: "Send an Enquiry",
    subject: "Website enquiry from ",
    submit: "Send Enquiry",
    extraLabel: "Product of interest",
    extraName: "product",
  },
};

export function EnquiryForm({ kind }: { kind: EnquiryKind }) {
  const [sent, setSent] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [coverLetterName, setCoverLetterName] = useState("");
  const resumeRef = useRef<HTMLInputElement>(null);
  const coverLetterRef = useRef<HTMLInputElement>(null);
  const meta = config[kind];

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const extra = meta.extraName
      ? String(data.get(meta.extraName) || "")
      : "";
    const message = String(data.get("message") || "");
    const companyName =
      kind === "dealer" ? String(data.get("company") || "") : "";
    const experience =
      kind === "career" ? String(data.get("experience") || "") : "";
    const resumeFile =
      kind === "career" ? resumeRef.current?.files?.[0] : undefined;
    const coverLetterFile =
      kind === "career" ? coverLetterRef.current?.files?.[0] : undefined;

    if (kind === "career" && !resumeFile) {
      alert("Please attach your resume (PDF, DOC or DOCX).");
      return;
    }

    const maxBytes = 5 * 1024 * 1024; // 5 MB
    if (kind === "career" && resumeFile && resumeFile.size > maxBytes) {
      alert("Resume file must be 5 MB or smaller. Please choose a smaller file.");
      return;
    }

    if (kind === "career" && coverLetterFile && coverLetterFile.size > maxBytes) {
      alert("Cover letter file must be 5 MB or smaller. Please choose a smaller file.");
      return;
    }

    const lines = [
      `Enquiry type: ${kind}`,
      `Name: ${name}`,
      companyName ? `Company: ${companyName}` : "",
      `Phone: ${phone}`,
      `Email: ${email}`,
      extra && meta.extraLabel ? `${meta.extraLabel}: ${extra}` : "",
      experience ? `Experience: ${experience}` : "",
      resumeFile
        ? `Resume file: ${resumeFile.name} (${Math.round(resumeFile.size / 1024)} KB)`
        : "",
      coverLetterFile
        ? `Cover letter file: ${coverLetterFile.name} (${Math.round(coverLetterFile.size / 1024)} KB)`
        : "",
      "",
      message,
    ].filter(Boolean);

    // mailto cannot attach files — open email with details and remind to attach files
    window.location.href = `mailto:${company.emails[0]}?subject=${encodeURIComponent(
      meta.subject + name,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);

    if (resumeFile || coverLetterFile) {
      const filesToAttach = [
        resumeFile ? `Resume: "${resumeFile.name}"` : null,
        coverLetterFile ? `Cover Letter: "${coverLetterFile.name}"` : null,
      ]
        .filter(Boolean)
        .join("\n");

      window.setTimeout(() => {
        alert(
          `Your email app should open now.\n\nPlease attach your document(s):\n${filesToAttach}\nbefore you send the email.`,
        );
      }, 400);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 border border-brand-line bg-brand-soft/40 p-6 md:p-8"
      encType={kind === "career" ? "multipart/form-data" : undefined}
    >
      <h3 className="font-display text-2xl tracking-wide">{meta.title}</h3>

      <input
        required
        name="name"
        placeholder="Your full name"
        className={fieldClass}
      />

      {kind === "dealer" && (
        <input
          required
          name="company"
          placeholder="Company / firm name"
          className={fieldClass}
        />
      )}

      <input
        required
        name="phone"
        placeholder="Phone"
        className={fieldClass}
      />
      <input
        required
        name="email"
        type="email"
        placeholder="Email"
        className={fieldClass}
      />

      {kind === "career" && (
        <input
          name="experience"
          placeholder="Years of experience (optional)"
          className={fieldClass}
        />
      )}

      {meta.extraName && (
        <input
          name={meta.extraName}
          placeholder={meta.extraLabel}
          className={fieldClass}
          required={kind === "dealer"}
        />
      )}

      {kind === "career" && (
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-brand-dark">
              Attach resume <span className="text-brand-red">*</span>
            </label>
            <input
              ref={resumeRef}
              required
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className={`${fieldClass} file:mr-4 file:border-0 file:bg-brand-red file:px-4 file:py-2 file:text-sm file:font-semibold file:uppercase file:tracking-wide file:text-white`}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file && file.size > 5 * 1024 * 1024) {
                  alert("Resume file must be 5 MB or smaller.");
                  e.target.value = "";
                  setResumeName("");
                  return;
                }
                setResumeName(file ? file.name : "");
              }}
            />
            <p className="mt-2 text-xs text-brand-muted">
              PDF, DOC or DOCX — maximum 5 MB.
              {resumeName ? (
                <>
                  {" "}
                  Selected: <span className="font-medium text-brand-dark">{resumeName}</span>
                </>
              ) : null}
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-brand-dark">
              Attach cover letter <span className="text-xs font-normal text-brand-muted">(optional)</span>
            </label>
            <input
              ref={coverLetterRef}
              type="file"
              name="coverLetter"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className={`${fieldClass} file:mr-4 file:border-0 file:bg-neutral-800 file:px-4 file:py-2 file:text-sm file:font-semibold file:uppercase file:tracking-wide file:text-white`}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file && file.size > 5 * 1024 * 1024) {
                  alert("Cover letter file must be 5 MB or smaller.");
                  e.target.value = "";
                  setCoverLetterName("");
                  return;
                }
                setCoverLetterName(file ? file.name : "");
              }}
            />
            <p className="mt-2 text-xs text-brand-muted">
              PDF, DOC or DOCX — maximum 5 MB.
              {coverLetterName ? (
                <>
                  {" "}
                  Selected: <span className="font-medium text-brand-dark">{coverLetterName}</span>
                </>
              ) : null}
            </p>
          </div>
        </div>
      )}

      <textarea
        required
        name="message"
        rows={5}
        placeholder={
          kind === "career"
            ? "Tell us about yourself, skills and why you want to join OCLEG"
            : kind === "dealer"
              ? "Tell us about your market, existing lines and interest in OCLEG"
              : "Message"
        }
        className={fieldClass}
      />

      <button
        type="submit"
        className="w-full bg-brand-red py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-white hover:bg-[#a50d25]"
      >
        {meta.submit}
      </button>

      {sent && (
        <p className="text-sm text-brand-muted">
          Your email app should open with the form details
          {kind === "career"
            ? " — attach your resume and cover letter before sending"
            : ""}
          . If it does not, write to {company.emails.join(" or ")}.
        </p>
      )}
    </form>
  );
}
