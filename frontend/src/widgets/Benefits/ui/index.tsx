import BenefitsList from "@/features/BenefitsList";

export default function Benefits() {
  return (
    <section className="min-h-[200] flex flex-col md:flex-row justify-center items-center text-center md:text-start gap-10 py-10 md:py-0">
      <h1 className="text-4xl font-bold max-w-[400px]">Наши преимущества:</h1>
      <BenefitsList />
    </section>
  )
}
