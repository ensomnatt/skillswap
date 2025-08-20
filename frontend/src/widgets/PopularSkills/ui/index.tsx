import SkillCards from "@/features/SkillCards";

export default function PopularSkills() {
  return (
    <section className="min-h-[400] flex flex-col items-center text-center pt-10 md:pt-0">
      <h1 className="mb-[40] text-3xl font-bold">Популярные навыки</h1>
      <SkillCards />
    </section>
  );
}
