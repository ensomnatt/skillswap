import LinkToSkills from "@/features/LinkToSkills";
import Card from "@/widgets/Card";

export default function PopularSkills() {
  return (
    <section className="h-[400] flex flex-col items-center text-center">
      <h1 className="mb-[40] text-3xl font-bold">Популярные навыки</h1>
      <div className="flex justify-between items-center gap-[24]">
        <Card
          title="Javascript"
          description="Учись создавать интерактивные веб-приложения и сайты"
        />
        <Card
          title="Go"
          description="Создавай быстрые и масштабируемые серверные приложения"
        />
        <Card
          title="Английский"
          description="Учи язык для работы, общения и IT-карьеры"
        />
        <Card
          title="И многое другое..."
          description={<LinkToSkills />}
        />
      </div>
    </section>
  );
}
