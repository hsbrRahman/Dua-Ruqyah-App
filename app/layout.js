import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SettingsBar from "./components/SettingsBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dua & Ruqyah App",
  description: "Made by Hasibur Rahman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#f7f8fa] w-full h-screen overflow-x-hidden grid grid-cols-19 gap-4 p-4">
          <div className=" col-span-1 ">
            <NavBar />
          </div>
          <div className=" col-span-15 ">
            <Header />
            <div className=" grid grid-cols-7 h-full gap-4 ">
              <div className="col-span-7">{children}</div>
              {/* <h2 className="bg-white col-span-2 text-cyan-900">testing 2</h2>
          <h2 className="bg-white col-span-4 text-red-600">testing 3</h2> */}
            </div>
          </div>
          <div className="bg-white col-span-3">
            <SettingsBar />
          </div>
        </div>
      </body>
    </html>
  );
}
