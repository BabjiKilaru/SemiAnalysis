import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center ${className}`}>
      <Image
        src="/semianalysis-logo.png"
        alt="SemiAnalysis"
        width={180}
        height={40}
        priority
        className="h-8 w-auto transition-opacity duration-300 group-hover:opacity-90 md:h-9"
      />
    </Link>
  );
}
