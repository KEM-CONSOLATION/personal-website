import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Breadcrumbs } from "@/components";

export const metadata: Metadata = {
  title: "Projects by Consolation Lotachi Kem | Senior Frontend Engineer",
  description:
    "Explore production web applications built by Consolation Lotachi Kem — church management platforms, enterprise websites, marketplaces, and SaaS products.",
  openGraph: {
    title: "Featured Projects | Consolation Lotachi Kem",
    description:
      "A curated selection of shipping-grade projects built with Next.js, TypeScript, and modern frontend tooling.",
    url: "https://techieconso.vercel.app/projects",
    type: "website",
  },
  alternates: {
    canonical: "https://techieconso.vercel.app/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Projects | Consolation Lotachi Kem",
    description:
      "Browse real-world enterprise, marketplace, and SaaS products crafted by Consolation Lotachi Kem.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://techieconso.vercel.app/projects/#webpage",
      url: "https://techieconso.vercel.app/projects",
      name: "Projects by Consolation Lotachi Kem | Senior Frontend Engineer",
      description:
        "Explore production web applications built by Consolation Lotachi Kem — church management platforms, enterprise websites, marketplaces, and SaaS products.",
      isPartOf: { "@id": "https://techieconso.vercel.app/#website" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://techieconso.vercel.app/projects/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://techieconso.vercel.app",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: "https://techieconso.vercel.app/projects",
        },
      ],
    },
  ],
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Projects", item: "/projects" },
        ]}
      />
      <main className="mx-auto flex min-h-dvh items-center justify-center overflow-x-hidden pt-20 text-neutral-900 dark:text-white">
        <div className="page-content">{children}</div>
      </main>
    </>
  );
}
