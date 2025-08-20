import { CardType } from "@/shared/types/Card";

export const SKILL_CARDS: CardType[] = [
  {
    title: "Javascript",
    description: "Учись создавать интерактивные веб-приложения и сайты"
  },
  {
    title: "Go",
    description: "Создавай быстрые и масштабируемые серверные приложения"
  },
  {
    title: "Английский",
    description: "Учи язык для работы, общения и IT-карьеры"
  },
] as const;
