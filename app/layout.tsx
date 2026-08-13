import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://psychedelicpuppet.show"),
  title: {
    default: "Psychedelic Puppet Show",
    template: "%s | Psychedelic Puppet Show",
  },
  description:
    "Awakening curiosity and connection through storytelling, psychedelic art, and creative wonder.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "Psychedelic Puppet Show",
    title: "Psychedelic Puppet Show",
    description:
      "Awakening curiosity and connection through storytelling, psychedelic art, and creative wonder.",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Psychedelic Puppet Show puppets looking into a colorful cosmic portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychedelic Puppet Show",
    description:
      "Awakening curiosity and connection through storytelling, psychedelic art, and creative wonder.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
