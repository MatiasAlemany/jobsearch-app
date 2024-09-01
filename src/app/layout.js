import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Provider } from "./components/provider"; //SESSION PROVIDER
import { Toaster } from "@/components/ui/toaster";
import { ViewModeSwitch } from "@/app/components/view-mode-switch";
import { MyContextSwitchProvider } from "./components/context-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JobFinder",
  description: "JobFinder",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <MyContextSwitchProvider >
            <Navbar/>
            {children}
            <ViewModeSwitch />
          </MyContextSwitchProvider>
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
