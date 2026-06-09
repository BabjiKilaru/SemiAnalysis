import type { ReactNode } from "react";

/** Full-width page gutter — content keeps its size, layout spans the viewport. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full px-6 lg:px-12 xl:px-16 ${className}`}>
      {children}
    </div>
  );
}

/** Spread a row of items evenly across the full container width. */
export function SpreadRow({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "dl";
}) {
  return (
    <Tag
      className={`flex w-full flex-wrap items-start justify-between gap-x-6 gap-y-8 ${className}`}
    >
      {children}
    </Tag>
  );
}
