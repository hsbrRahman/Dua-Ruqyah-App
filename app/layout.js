import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dua & Ruqyah App",
  description: "Made by Hasibur Rahman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#f7f8fa] w-full h-screen overflow-x-hidden grid grid-cols-18 gap-4 p-4">
          <div className=" col-span-1 ">
            <Navbar />
          </div>
          <div className=" col-span-13 ">
            <div className=" grid grid-cols-6 h-full gap-4 ">
              <div className="col-span-6">{children}</div>
              {/* <h2 className="bg-white col-span-2 text-cyan-900">testing 2</h2>
          <h2 className="bg-white col-span-4 text-red-600">testing 3</h2> */}
            </div>
          </div>
          <h2 className="bg-white col-span-4">testing 4</h2>
        </div>
      </body>
    </html>
  );
}
