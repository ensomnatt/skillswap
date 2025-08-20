import { FooterColumnType } from "@/shared/types/FooterColumn";

export const FOOTER_COLUMNS: FooterColumnType[] = [
  {
    title: "Контакты",
    links: [
      { label: "pisya@gmail.ru", href: "mailto:pisya@gmail.ru" },
    ],
  },
  {
    title: "Ссылки",
    links: [
      { label: "кто это вообще читает", href: "#" },
      { label: "я гей", href: "#" },
    ],
  },
  {
    title: "Политика конф-ти",
    links: [
      { label: "Перейти", href: "#" },
    ],
  },
] as const;
