import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/widgets/Header";

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
      <body suppressHydrationWarning={true}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
};
