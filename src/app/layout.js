import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import News from "../components/News";

// Use leading slashes to reference fonts in the public directory
const geistSans = localFont({
  src: "../fonts/GeistVF.woff", // Correct path for font file
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff", // Correct path for font file
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "X-Clone",
  description: "Clone x using next.js and tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-between max-w-6xl mx-auto">
          <div>
            <Sidebar />
          </div>
          <div>{children}</div>
          <div>
            <News />
          </div>
        </div>
      </body>
    </html>
  );
}
