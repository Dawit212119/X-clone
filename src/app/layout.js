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
          <div className="hidden sm:inline border-r">
            <Sidebar />
          </div>
          <div>{children}</div>
          <div className="lg:flex-col h-screen border-l p-3 hidden lg:flex w-[24rem]">
            <div className="py-2 sticky top-0 w-full">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100  sm:w-full   border text-sm px-4 py-2 border-gray-200 focus:outline-none rounded-3xl w-full "
              />
            </div>
            <News />
          </div>
        </div>
      </body>
    </html>
  );
}
