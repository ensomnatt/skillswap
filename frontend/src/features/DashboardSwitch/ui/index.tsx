"use client";

import { useDashboardStore } from "@/entities/Dashboard";
import { DashboardPages } from "@/entities/Dashboard";
import Button from "@/shared/ui/Button";

type Props = {
  page: DashboardPages;
  isLast: boolean;
}

export default function DashboardSwitch({ page, isLast }: Props) {
  const { setCurrentPage, currentPage } = useDashboardStore();

  let title: string;
  if (page === DashboardPages.IN_PROGRESS) {
    title = "В процессе";
  } else {
    title = "Завершено"
  }

  let className = "border-l rounded-none";
  if (isLast) {
    className += " border-r";
  }

  let isWhite = true;
  if (page === currentPage) isWhite = false;

  return (
    <Button label={title} onClick={() => setCurrentPage(page)} isWhite={isWhite} className={className} />
  );
}
