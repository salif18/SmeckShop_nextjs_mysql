import { Inter } from "next/font/google";
import "./styles/globals.scss";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import { StoreProvider } from "@/context/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-com",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className="App">
      <StoreProvider>
        <Navbar />
        {children}
        <Footer />
      </StoreProvider>
      </body>
    </html>
  );
}
