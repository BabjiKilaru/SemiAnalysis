"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, SITE } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--sa-border)] md:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">{open ? "Close" : "Menu"}</span>
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
          <path
            d="M0 1h18M0 7h18M0 13h18"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-16 border-b border-[var(--sa-border)] bg-[var(--sa-bg)] px-6 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navLinks.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--sa-text-muted)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--sa-text-muted)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <a
              href={SITE.loginUrl}
              className="mt-2 inline-flex w-fit rounded-full border border-[var(--sa-border)] px-4 py-2 text-sm font-semibold text-[var(--sa-text)]"
              onClick={() => setOpen(false)}
            >
              Log in
            </a>
            <a
              href={SITE.newsletterSubscribeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit rounded-full bg-[var(--sa-cobalt)] px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Subscribe
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
