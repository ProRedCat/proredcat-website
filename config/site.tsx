const productionUrl = "https://www.proredcat.dev";
const stagingUrl = "https://staging.proredcat.dev";

function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, "");
  }

  if (process.env.VERCEL_ENV === "preview") {
    if (process.env.VERCEL_GIT_COMMIT_REF === "development") {
      return stagingUrl;
    }

    if (process.env.VERCEL_BRANCH_URL) {
      return `https://${process.env.VERCEL_BRANCH_URL}`;
    }
  }

  return productionUrl;
}

export const siteConfig = {
  name: "Reilly Oldham",
  url: getSiteUrl(),
  description:
    "Portfolio and technical writing from Reilly Oldham, a backend and full-stack software engineer in Wellington, New Zealand.",
  author: "Reilly Oldham",
  links: {
    github: "https://github.com/ProRedCat",
    linkedin: "https://www.linkedin.com/in/reilly-oldham/",
    twitter: "https://x.com/ProRedCat",
  },
};

export type SiteConfig = typeof siteConfig;
