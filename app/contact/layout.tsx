import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Jeremiah Aworetan | Let’s Collaborate",
  description:
    "Get in touch with Jeremiah Aworetan for frontend engineering opportunities, collaborations, or speaking engagements.",
  openGraph: {
    title: "Contact Jeremiah Aworetan",
    description:
      "Reach out to Jeremiah for frontend engineering work, collaborations, or mentorship.",
    url: "https://www.jeremy0x.dev/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://www.jeremy0x.dev/contact",
  },
  twitter: {
    card: "summary",
    title: "Contact Jeremiah Aworetan",
    description:
      "Send a message to Jeremiah Aworetan for engineering projects or partnerships.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.jeremy0x.dev/contact/#webpage",
  url: "https://www.jeremy0x.dev/contact",
  name: "Contact Jeremiah Aworetan",
  description:
    "Get in touch with Jeremiah Aworetan for frontend engineering opportunities, collaborations, or speaking engagements.",
  isPartOf: { "@id": "https://www.jeremy0x.dev/#website" },
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
