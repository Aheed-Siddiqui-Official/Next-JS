import "./globals.css";
import Navigation from "../component/Navigation.jsx";
import { Roboto, Work_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "Aheed | Learn Web Development",
    template: "%s | Aheed",
  },
  description:
    "Free tutorials on React.js, Next.js, and web development by Aheed.",
  keywords: ["React", "Next.js", "Web Development", "Aheed"],
  icons: {
    icon: "/images/kody.png",
  },
  metadataBase: new URL("https://mas-portfolio.vercel.app/"),
  openGraph: {
    title: "Aheed",
    description: "Join the best web dev tutorials!",
    url: "https://yourdomain.com",
    siteName: "Aheed",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aheed Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aheed",
    description: "Learn Web Dev from scratch with Aheed!",
    creator: "@mas",
    images: ["/og-image.png"],
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${workSans.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
