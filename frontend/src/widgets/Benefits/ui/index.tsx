import Benefit from "@/shared/ui/Benefit";

export default function Benefits() {
  return (
    <section className="h-[200] flex justify-center items-center gap-10">
      <h1 className="text-4xl font-bold max-w-[400px]">Наши преимущества:</h1>
      <ul className="text-xl flex flex-col gap-3">
        <Benefit label="Децентрализованная платформа" />
        <Benefit label="Вы сами выбираете, сколько стоит ваше обучение" />
        <Benefit label="Образование доступно каждому" />
      </ul>
    </section>
  )
}
