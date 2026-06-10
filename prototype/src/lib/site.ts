export const SITE = {
  loginUrl:
    "https://semianalysis.com/wp-json/passport/v1/oauth/authlogin?signup_redirect_uri=https%3A%2F%2Fsemianalysis.com%2Fverify-your-email%2F",
  newsletterSubscribeUrl: "https://newsletter.semianalysis.com/subscribe",
  newsletterUrl: "https://newsletter.semianalysis.com",
  newsletterArchiveUrl: "https://newsletter.semianalysis.com/archive",
  chipbookSampleUrl:
    "https://semianalysis.com/wp-content/uploads/2026/02/Sample-Chipbook.pdf",
  modelsResearchUrl: "https://semianalysis.com/models-research/",
  eventsUrl: "https://semianalysis.com/semianalysis-events/",
  careersUrl: "https://semianalysis.com/semianalysis-careers/",
  /** Placeholder until on-site contact form URL is wired. */
  contactSalesUrl: "#",
  chipbookSalesEmail: "ChipBookSales@SemiAnalysis.com",
  substackFeedUrl: "https://newsletter.semianalysis.com/feed",
} as const;

export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/models", label: "Industry Models" },
  { href: "/products/chipbook", label: "ChipBook" },
  { href: SITE.newsletterArchiveUrl, label: "Archives", external: true },
  { href: "/about", label: "About" },
  { href: SITE.eventsUrl, label: "Events", external: true },
  { href: SITE.careersUrl, label: "Careers", external: true },
];
