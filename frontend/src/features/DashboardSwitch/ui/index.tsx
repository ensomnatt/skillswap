"use client";

import { useDashboardStore } from "@/entities/Dashboard";
import { DashboardPageId } from "@/entities/Dashboard";
import Button from "@/shared/ui/Button";

type Props = {
  id: DashboardPageId;
  isLast: boolean;
}

export default function DashboardSwitch({ id, isLast }: Props) {
  const { setCurrentPage, currentPage } = useDashboardStore();

  let title: string;
  if (id === DashboardPageId.IN_PROGRESS) {
    title = "В процессе";
  } else {
    title = "Завершено"
  }

  let className = "border-l rounded-none";
  if (isLast) {
    className += " border-r";
  }

  let isWhite = true;
  if (id === currentPage) isWhite = false;

  return (
    <Button label={title} onClick={() => setCurrentPage(id)} isWhite={isWhite} className={className} />
  );
}
