import type { Metadata } from "next";
import "./globals.scss";
import { Nunito } from "next/font/google";
import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";

const nunito = Nunito({
  subsets: ["cyrillic"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SkillSwap",
  description: "Dev version",
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning={true} lang="ru">
      <body suppressHydrationWarning={true} className={nunito.className}>
        <Header />
        <main className="max-w-[1280] mx-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};
