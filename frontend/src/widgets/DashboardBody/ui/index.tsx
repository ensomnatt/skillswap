"use client";

import { DashboardPages, useDashboardStore } from "@/entities/Dashboard";
import DashboardSwitches from "@/features/DashboardSwitches";
import CoursesCompleted from "@/widgets/CoursesCompleted";
import CoursesInProgress from "@/widgets/CoursesInProgress";

export default function DashboardBody() {
  const { currentPage } = useDashboardStore();

  return (
    <>
      <DashboardSwitches />
      {currentPage === DashboardPages.IN_PROGRESS ? <CoursesInProgress /> : <CoursesCompleted />}
    </>
  );
}
