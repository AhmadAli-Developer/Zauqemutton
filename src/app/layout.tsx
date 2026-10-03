import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zauq-e-Mutton — Fresh Halal Meat Shop in Lahore | Premium Mutton & Specialty Cuts",
  description:
    "Lahore's premium halal mutton and meat shop. Fresh ghosht, qeema, payee, kaleeji & more. Order via WhatsApp for same-day delivery. Qurbani, Sadqah & Aqiqa services available.",
  keywords: [
    "halal meat Lahore",
    "fresh mutton Lahore",
    "zauq-e-mutton",
    "mutton shop Lahore",
    "qurbani Lahore",
    "sadqah meat",
    "aqiqa Lahore",
    "premium mutton delivery",
    "ghosht delivery Lahore",
    "meat delivery Lahore",
  ],
  openGraph: {
    title: "Zauq-e-Mutton — Fresh Halal Meat Shop in Lahore",
    description:
      "Premium fresh mutton, organ meats & specialty cuts. Qurbani, Sadqah & Aqiqa services. Same-day delivery across Lahore.",
    type: "website",
    locale: "en_PK",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="grain-overlay antialiased">
        {children}
      </body>
    </html>
  );
}
