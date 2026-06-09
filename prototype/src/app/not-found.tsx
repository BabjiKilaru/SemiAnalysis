"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-6 text-center"
    >
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-sm font-medium uppercase tracking-widest text-[var(--sa-amber)]"
      >
        404
      </motion.p>
      <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
      <p className="mt-4 text-[var(--sa-text-muted)]">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="sa-btn-lift mt-8 rounded-full bg-[var(--sa-amber)] px-6 py-3 text-sm font-semibold text-black"
      >
        Back to home
      </Link>
    </motion.div>
  );
}
