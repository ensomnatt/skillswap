import RegisterButton from "@/features/RegisterButton";

export default function HeroSection() {
  return (
    <section className="h-[600] flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold">Учись и обучай с токенами</h1>
      <h4 className="mt-[24] text-xl max-w-[600] text-center">Покупай обучение у других наставников за токены или зарабатывай их, обучая других</h4>
      <RegisterButton label="Начать сейчас" className="text-2xl mt-[32] px-4 py-4" />
    </section>
  );
}
