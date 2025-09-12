import type { Metadata } from "next";
import "./globals.css";
import { Inter, Merriweather } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merri = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merri",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nuscbc.vercel.app"),
  title: {
    default: "NUSCBC | NUSC Broadcasting Corporation",
    template: "%s | NUSCBC",
  },
  description: "A single-article news feature built with Next.js.",
  openGraph: {
    type: "article",
    siteName: "NUSCBC",
    title: "NUSCBC Feature",
    description: "Longform article with sidebar gallery and bibliography.",
    url: "https://nuscbc.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "NUSCBC Feature",
    description: "Longform article with sidebar gallery and bibliography.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${merri.variable} h-full`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen w-full overflow-x-hidden bg-white text-zinc-900 antialiased">
        <header className="border-b">
          <div className="mx-auto w-full max-w-7xl px-8 sm:px-12 py-4 flex items-center justify-between">
            <Link href="/" className="flex flex-col leading-tight">
              <span className="brand text-3xl font-black tracking-tight">
                <span className="text-[#002D72]">NUS</span>
                <span className="text-[#E87722]">CBC</span>
              </span>
              <span className="uppercase text-xs tracking-widest text-zinc-500">
                <span className="text-[#002D72]">NUSC</span>{" "}
                <span className="text-[#E87722]">Broadcasting Company</span>
              </span>
            </Link>
            <nav className="hidden sm:flex items-center gap-8 text-sm text-zinc-600">
              <a href="#bibliography" className="hover:underline">Bibliography</a>
              <a href="#acknowledgments" className="hover:underline">Acknowledgments</a>
              <a href="#top" className="hover:underline">Top</a>
            </nav>
          </div>
        </header>

        <main id="top" className="mx-auto w-full max-w-7xl px-8 sm:px-12 py-8">
          {children}
        </main>

        <footer className="mt-12 border-t">
          <div className="mx-auto w-full max-w-7xl px-8 sm:px-12 py-12 text-sm text-zinc-500">
            © {new Date().getFullYear()}. Built with Next.js & Tailwind.
          </div>
        </footer>
      </body>
    </html>
  );
}
