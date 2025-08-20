import StepCards from "@/features/StepCards";

export default function HowItWorks() {
  return (
    <section className="min-h-[400] flex flex-col items-center text-center">
      <h1 className="mb-[40] text-3xl font-bold">Как это работает?</h1>
      <StepCards />
    </section>
  );
}
