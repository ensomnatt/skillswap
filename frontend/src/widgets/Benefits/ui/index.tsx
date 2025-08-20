import BenefitsList from "@/features/BenefitsList";

export default function Benefits() {
  return (
    <section className="h-[200] flex justify-center items-center gap-10">
      <h1 className="text-4xl font-bold max-w-[400px]">Наши преимущества:</h1>
      <BenefitsList />
    </section>
  )
}
