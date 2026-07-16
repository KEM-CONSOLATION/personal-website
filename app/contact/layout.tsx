import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Consolation Lotachi Kem | Let's Collaborate",
  description:
    "Get in touch with Consolation Lotachi Kem for senior frontend engineering opportunities, collaborations, or consulting.",
  openGraph: {
    title: "Contact Consolation Lotachi Kem",
    description:
      "Reach out to Consolation for frontend engineering work, collaborations, or mentorship.",
    url: "https://techieconso.vercel.app/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://techieconso.vercel.app/contact",
  },
  twitter: {
    card: "summary",
    title: "Contact Consolation Lotachi Kem",
    description:
      "Send a message to Consolation Lotachi Kem for engineering projects or partnerships.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://techieconso.vercel.app/contact/#webpage",
  url: "https://techieconso.vercel.app/contact",
  name: "Contact Consolation Lotachi Kem",
  description:
    "Get in touch with Consolation Lotachi Kem for senior frontend engineering opportunities, collaborations, or consulting.",
  isPartOf: { "@id": "https://techieconso.vercel.app/#website" },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
