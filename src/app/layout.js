import "./globals.css";

export const metadata = {
  title: "Eidhaart – Web Developer",
  description:
    "Portfolio of Marcin Swieczkowski – Full-stack web developer with a passion for RPGs, Warhammer, and clean, impactful design.",
  keywords: [
    "Web Developer",
    "Next.js",
    "REACT",
    "JavaScript",
    "HTML",
    "CSS",
    "Portfolio",
    "Marcin Swieczkowski",
    "Frontend",
    "Backend",
  ],
  metadataBase: new URL("https://www.eidhaart.com"),
  openGraph: {
    title: "Marcin Swieczkowski – Web Developer Portfolio",
    description:
      "Explore Marcin’s clean, modern dev work infused with personality and tactical flair.",
    url: "https://www.eidhaart.com",
    siteName: "Marcin.dev",
    images: [
      {
        url: "/images/eidhaart-red.png",
        width: 1042,
        height: 479,
        alt: "Marcin's Portfolio Preview",
      },
    ],
    type: "website",
  },
  themeColor: "#0b1410",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Devicon icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />

        {/* Orbitron font for the header */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />

        {/* Viewport for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
